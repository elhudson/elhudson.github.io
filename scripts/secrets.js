import fs from "fs";

var args = process.argv.slice(2)
fs.writeFileSync(
  "../env.json",
  JSON.stringify({
    github: args[0]
  })
);
