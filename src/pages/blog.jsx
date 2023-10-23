import { Section } from "../components"
import theme from "../theme"
import Markdown from "react-markdown"
import remarkFrontmatter from "remark-frontmatter"
import { remark } from "remark"
import { DateTime } from "luxon"

const yaml = await import('js-yaml')
const parser = remark().use(remarkFrontmatter)

import { css } from '@emotion/css'

import Uri from "jsuri"

var posts_markdown = []

Object.entries(import.meta.glob('../blog/*.md', { as: 'raw' })).forEach(async (entry) => {
    var data = await entry[1]()
    var p = parser.parse(data)
    var meta = yaml.load(p.children.filter(a => a.type == 'yaml')[0].value)
    var content = p.children.filter(a => a.type != 'yaml').map(j => parser.stringify(j)).join('')
    var date=new DateTime(meta.date)
    posts_markdown.push({
        metadata: {
            ...meta,
            tags: meta.tags.split(','),
            date: date.toUnixInteger()
        },
        content: content
    })
})

export default function Blog() {
    return (
        <Section title='Blog'>
            {posts_markdown.map(post => <PostSnippet post={post} />)}
        </Section>
    )
}

function PostSnippet({ post }) {
    return (
        <div className={css`
            border:${theme.border};
            a {
                ${theme.linkable};
            }
            h3 {
                margin:5px 0px;
                text-align:center;
                width:100%;
                border-bottom:${theme.border};

            }
        `}>
            <h3>
                <a href={url_for(post.metadata.id, 'post')}>
                    {post.metadata.title}
                </a>
            </h3>
            <Markdown className={css`
                border-left:${theme.border};
                margin:5px;
                padding:5px;
            `}>
                {post.content}
            </Markdown>
            <PostMeta meta={post.metadata} />
        </div>
    )
}

function PostMeta({ meta }) {
    return (
        <div className={css`
        display:grid;
        grid-template-columns:min-content auto;
        grid-gap:10px;
        margin:5px;
    `}>
            {Object.entries(meta).filter(f => !['title', 'id'].includes(f[0])).map(m => <Metadatum label={m[0]} value={m[1]} />)}
        </div>
    )
}

function url_for(text, type) {
    var uri = new Uri(window.location.href)
    uri.addQueryParam(type, text)
    return uri
}

function Metadatum({ label, value }) {
    var disp=value
    label=='date' && (disp=DateTime.fromMillis(value*1000).toFormat('LLL dd yyyy'))
    return (
        <>
            <div className={css`
                text-transform:uppercase;
                font-weight:bold;
            `}>{label}</div>
            <div>
                {Array.isArray(value) ?
                    value.map(v =>
                        <span className={css`
                            border:${theme.border};
                            margin:3px;
                        `}>
                            <a href={url_for(v, label)}>{v}</a>
                        </span>) :
                    <span>
                        <a href={url_for(value, label)}>
                            {disp}
                        </a>
                    </span>
                }
            </div>
        </>
    )
}