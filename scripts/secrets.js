import minimist from "minimist";
import fs from "fs";

var args = minimist(process.argv);
fs.writeFileSync(
  "../env.json",
  JSON.stringify({
    github: args.github
  })
);
