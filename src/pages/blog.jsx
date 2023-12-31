import { Section } from "../components"
import theme from "../theme"
import Markdown from "react-markdown"
import remarkFrontmatter from "remark-frontmatter"
import { remark } from "remark"
import { DateTime } from "luxon"

import { css } from '@emotion/css'

import Uri from "jsuri"

import posts from '../assets/blog.json'

export default function Blog() {
    return (
        <Section title='Blog'>
            {posts.map(post => <PostSnippet post={post} />)}
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