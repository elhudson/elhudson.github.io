import fs from 'fs'
import path from 'path'
import remarkFrontmatter from "remark-frontmatter"
import { remark } from "remark"
import { DateTime } from "luxon"
import root from 'app-root-path'

const yaml = await import('js-yaml')
const parser = remark().use(remarkFrontmatter)
const blog_folder=path.join(root.path, '/blog/')
const files=fs.readdirSync(blog_folder).filter(f=>f.includes('.md'))
const docs=files.map(f=>
        parser.parse(fs.readFileSync(blog_folder+f, 'utf-8'))
    )
const json=[]
for (var p of docs) {
    var meta = yaml.load(p.children.filter(a => a.type == 'yaml')[0].value)
    var content = p.children.filter(a => a.type != 'yaml').map(j => parser.stringify(j)).join('')
    var date=new DateTime(meta.date)
    json.push({
        metadata: {
            ...meta,
            tags: meta.tags.split(','),
            date: date.toUnixInteger()
        },
        content: content
    })
}

fs.writeFileSync(path.join(root.path,'/src/assets/blog.json'), JSON.stringify(json))

