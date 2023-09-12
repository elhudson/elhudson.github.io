import { css } from "@emotion/css"
import theme from "./theme"

export function Bio() {
    return (
        <div>
            <h1 className={css`
                margin:unset;
                border-bottom:${theme.border};
                font-family:'mono'; 
            `}>
                El Hudson
            </h1>
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

export function Links() {
    return (
        <div className={css`
            display:flex;
            width:100%;
            button {
                border:none;
                width:100%;
                border-top:${theme.border};
                &:not(button:last-child) {
                    border-right:${theme.border}
                }
            }
      `}>
            <button onClick={() => { window.location.assign('about') }}>About</button>
            <button onClick={() => { window.location.assign('projects') }}>Projects</button>
            {/* <button onClick={()=> {window.location.assign('blog')}}>Blog</button> */}
            <button onClick={() => { window.location.assign('src/assets/library_resume.pdf') }}>Resume</button>
            <button onClick={() => { window.location.assign('contact') }}>Contact</button>
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
