import { css } from "@emotion/css"
import theme from "./theme"
import Uri from "jsuri"

export function Bio() {
    return (
        <div className={css`
            h1 {
                border-bottom:${theme.border};
            }
        `}>
            <Title />
            <div className={css`
                padding:0px 10px;
            `}>
                <p>
                    Neophyte programmer, incorrigible humanist, infamous pedant. Where the falling angel meets the rising ape.
                </p>
            </div>
        </div>

    )
}

export function Title() {
    return (<h1 className={css`
                ${theme.linkable}
            `} onClick={()=>window.location.assign('/')}>
        El Hudson
    </h1>)
}

export function Links() {
    function redir(next) {
        window.location.pathname=next
    }
    return (
        <div className={css`
            display:flex;
            width:100%;
            button {
                border:none;
                width:100%;
                &:not(button:last-child) {
                    border-right:${theme.border}
                }
            }
      `}>
            <button onClick={() => { redir('about') }}>About</button>
            <button onClick={() => { redir('projects') }}>Projects</button>
            <button onClick={() => { redir('contact') }}>Contact</button>
            <button onClick={() => { redir('resume') }}>Resume</button>
            <button onClick={() => { redir('blog') }}>Blog</button>
        </div>
    )
}


export function Section({ title, children }) {
    return (
        <div className={css`
            width:80%;
            margin:auto;
            border:${theme.border};
        `}>
            <h3 className={css`
                text-transform:uppercase;
                font-family:'mono';
                text-align:center;
                border-bottom:${theme.border};
                padding:10px;
                margin:unset;
            `}>
                {title}
            </h3>
            <div className={css`
                margin:5px;
            `}>
                {children}
            </div>
        </div>
    )
}
