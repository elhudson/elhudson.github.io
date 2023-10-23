import { Section } from "../components"
import theme from "../theme"
import { css } from "@emotion/css"

export default function Projects() {
    return(
        <Section title='projects'>
            <Project data={{
                title:'HUBRIS Web',
                link:'https://www.hubris.games',
                code:'https://github.com/elhudson/hubris-web',
                blurb:`An interactive character sheet for the Habitually Underbuilt Roleplay Integrated System, 
                or HUBRIS, created by Nadav Elata with contributions and documentation (mostly) by El Hudson.`
            }}/>
            <Project data={{
                title:'As-Yet-Unnamed Fanfiction Statistical Model',
                code:'https://github.com/elhudson/fanficStats',
                blurb:`A project exploring what kinds of published fiction generate more/less/what kinds of fanfiction, among 
                other things.`
            }}/>
        </Section>
    )
}

function Project({data}) {
    return(
        <div className={css`
            border:${theme.border};
            margin-bottom:5px;
            p {
                    margin:5px;
                }
        `}>
            <div className={css`
                display:flex;
                position:relative;
            `}>
                <h4 className={css`
                    margin:unset;
                    font-family:'mono';
                    border-bottom:${theme.border};
                    width:100%;
                    padding:5px;
                `}>
                    {data.title}
                </h4>
                <div className={css`
                    position:absolute;
                    right:0;
                    top:5px;
                    right:5px;
                    button {
                        margin-left:5px;
                    }
                `}>
                    <button onClick={()=> {window.location.assign(data.link)}}>Site</button>
                    <button onClick={()=> {window.location.assign(data.code)}}>Source Code</button>
                </div>
            </div>
            <p>
                {data.blurb}
            </p>
        </div>
    )
}