import _ from "lodash";
import * as cheerio from "cheerio";

import { PocketSDK } from "pocket-sdk-typescript";

let pocket=new PocketSDK("110178-be2d202ca5bb7ad299b7753")
let access_token = "1e7c8341-89fa-6454-c3d5-775c56";


const articles = await pocket
  .getItems(access_token, {
    sort: "newest",
    count: "10"
  })
  .then((o) => Object.values(o.list))

  articles.forEach(async (item) => {
    item.src = item.domain_metadata ? item.domain_metadata.name : await get_title(item);
  });
  
  
const get_title = async (article) => {
  const url = new URL(article.given_url);
  const title = await fetch("https://" + url.hostname)
    .then((r) => r.text())
    .then((html) => {
      const doc = cheerio.load(html);
      const re = /[^a-z,'A-Z\d\s:]/;
      return doc("head title").text().split(re)[0];
    });
  return title;
};

export default () => {
  return <ul>
    {articles.map((a) => (
      <li>
        <a href={a.resolved_url}>
          {a.resolved_title.length > 0 ? a.resolved_title : a.given_title}
        </a>{" "}
        •{" "}
        <span>
          {a.src}
        </span>
      </li>
    ))}
  </ul>;
};
