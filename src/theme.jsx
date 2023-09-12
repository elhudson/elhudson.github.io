import { css } from "@emotion/css"

const theme = {
  border: '1px solid #282828',
  linkable: css`
    margin:unset;
    font-family:'mono'; 
    &:hover {
        cursor: pointer;
        text-decoration:underline;
        text-decoration-thickness:3px;
        text-underline-offset:3px;
    }
  `
}

export default theme