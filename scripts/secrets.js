import fs from "fs";

var args = process.argv.slice(2);
console.log(__dirname)
fs.writeFileSync(
  `../env.json"`,
  JSON.stringify({
    github: args[0]
  })
);
