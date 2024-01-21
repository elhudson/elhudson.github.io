import fs from "fs";

var args = process.argv.slice(2);
fs.writeFileSync(
  `${process.cwd()}/env.json"`,
  JSON.stringify({
    github: args[0]
  })
);
