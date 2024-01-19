const credentials = {
  username: "ehudson@wellesley.edu",
  password: "s4XsT*N/d:B8uKq"
};

import puppeteer from "puppeteer-core";
import * as cheerio from "cheerio";
import fs from "fs";
import _ from "lodash";

String.prototype.stain = function () {
  return this.replace(/\s+/g, " ");
};

// const browser = await puppeteer.launch({
//   executablePath: "/usr/bin/google-chrome",
//   headless: false
// });

// const page = await browser.newPage();
// await page.goto("https://www.linkedin.com/uas/login");

// await page.type("#username", credentials.username);
// await page.type("#password", credentials.password);

// await page.click("button[type=submit][aria-label='Sign in']");

// await page.goto("https://www.linkedin.com/in/elthudson", {
//   waitUntil: "domcontentloaded"
// });

// setTimeout(async () => {
//   var html = await page.content();

// }, 5000);

const html = fs.readFileSync("./linkedin.html");

const ext = JSON.parse(fs.readFileSync("../public/resume.json"));

const $ = cheerio.load(html);

const sections = $("section[data-section]").map((i, elem) => {
  return {
    header: $(elem).attr("data-section"),
    html: $(elem).find(".core-section-container__content")
  };
});

const data = Object.fromEntries(
  sections
    .map((i, section) => {
      return {
        section: section.header,
        items: $(section.html)
          .find("ul > li")
          .map((j, elem) => {
            var title =
              $(elem).find("span[class*=-item__title]").text().trim() ||
              $(elem).find("h3 > a").text().trim() ||
              $(elem).find("h3").text().trim();
            var subtitle =
              $(elem).find("span[class*=-item__subtitle]").text().trim() ||
              $(elem).find("h4").text().trim();
            var dates = $(elem).find("span.date-range time");
            var metadata = $(elem).find("[class*=-item__meta-item]");

            return { title, subtitle, dates, metadata };
          })
          .toArray()
      };
    })
    .toArray()
    .map((d) => [d.section, d.items])
);

const resume = {
  basics: {
    name: $(".top-card-layout__entity-info h1").text().trim(),
    label: $("h2.top-card-layout__headline").text().trim(),
    image: $("div[data-section='picture'] img").attr("src"),
    email: "el.hudson@hotmail.com",
    phone: "(781) 458-9514",
    url: "https://elhudson.github.io",
    summary: $(
      "section[data-section=summary] div.core-section-container__content p"
    )
      .text()
      .trim()
      .stain(),
    location: {
      address: "29 Wilson Ave #2",
      postalCode: "MA 02478",
      city: "Belmont",
      countryCode: "US",
      region: "Massachusetts"
    },
    profiles: [
      {
        network: "Github",
        username: "elhudson",
        url: "https://github.com/elhudson"
      }
    ]
  },
  work: data.experience.map((d) => ({
    name: d.subtitle,
    position: d.title,
    startDate: $(d.dates[0]).text(),
    endDate: $(d.dates[1]).text(),
    summary: $(d.metadata)
      .find("div.show-more-less-text p")
      .text()
      .trim()
      .stain()
      .replaceAll("—", "\\")
      .replaceAll("- ", "\\")
      .replaceAll("—", "\\")
      .replaceAll("–", "\\")
      .split("\\")
      .filter((f) => f != "")
  })),
  volunteer: data.volunteering.map((d) => ({
    name: d.subtitle,
    position: d.title,
    startDate: $(d.dates[0]).text(),
    endDate: $(d.dates[1]).text(),
    summary: $(d.metadata)
      .find("div.show-more-less-text p")
      .text()
      .trim()
      .stain()
      .replaceAll("—", "\\")
      .replaceAll("- ", "\\")
      .replaceAll("—", "\\")
      .replaceAll("–", "\\")
      .split("\\")
      .filter((f) => f != "")
  })),
  education: data.educationsDetails.map((d) => ({
    institution: d.title,
    area: d.subtitle.split("\n")[1]?.trim() ?? "",
    studyType: d.subtitle.split("\n")[0],
    startDate: $(d.dates[0]).text(),
    endDate: $(d.dates[1]).text()
  })),
  awards: data["honors-and-awards"].map((d) => ({
    title: d.title,
    date: $(d.dates).text().trim(),
    awarder: d.subtitle
  })),
  publications: data.publications.map((p) => ({
    name: p.title,
    publisher: p.subtitle.stain()
  })),
  languages: data.languages.map((l) => ({
    name: l.title,
    fluency: l.subtitle
  })),
  projects: data.projects.map((p) => ({
    name: p.title,
    startDate: $(p.dates[0]).text(),
    endDate: $(p.dates[1]).text()
  }))
};

const res = _.merge(ext, resume);
fs.writeFileSync("../public/resume.json", JSON.stringify(res));
