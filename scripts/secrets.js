import fs from "fs";

var args = process.argv.slice(2);
console.log(process.cwd())
fs.writeFileSync(
  `../env.json"`,
  JSON.stringify({
    github: args[0]
  })
);
