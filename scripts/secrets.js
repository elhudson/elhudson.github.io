import fs from "fs";

var args = process.argv.slice(2);
console.log(process.cwd())
fs.writeFileSync(
  `${process.cwd()}/env.json"`,
  JSON.stringify({
    github: args[0]
  })
);
