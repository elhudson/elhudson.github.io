import { Section } from "../components"
import { css } from "@emotion/css"

export default function Contact() {
    return(
        <Section title='Contact'>
            <div className={css`
                display:grid;
                grid-template-columns:min-content auto;
                width:fit-content;
                margin:auto;
                h4, p {
                    margin:unset;
                    margin-bottom:5px;
                    &:not(p) {
                        margin-right:10px;
                        font-family:'mono';
                    }
                }
            `}>
                <ContactItem data={{
                    method:'email',
                    address:'el.hudson@hotmail.com',
                    link:'mailto:el.hudson@hotmail.com'
                }} />
                <ContactItem data={{
                    method:'telephone',
                    address:'781.458.9514',
                    link:'tel:781.458.9514'
                }} />
            </div>
        </Section>
    )
}

function ContactItem({data}) {
    return(
        <>
            <h4>{data.method}</h4>
            <a href={data.link}>{data.address}</a>
        </>
    )
}