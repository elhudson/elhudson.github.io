import { Document, Page } from "react-pdf";
import { Section } from "../components";
import library_resume from '../assets/library_resume.pdf'
import { css } from "@emotion/css";

export default function Resume() {
    return(
        <Section title='Resume'>
           <embed
                src={library_resume}
                className={css`
                    width:100%;
                    height:${window.visualViewport.height*0.9}px;
                `}/>
        </Section>
    )
}