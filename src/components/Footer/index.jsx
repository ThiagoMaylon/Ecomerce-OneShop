import { FooterStyle } from "./style"

export const Footer = () => {
    return(
        <FooterStyle id="contato">
            <p><span>Feito por</span>: Thiago</p>
            <p>
                {/* eslint-disable-next-line */}
                <span>contato</span>: <a href="https://github.com/ThiagoMaylon" target="_blank">GitHub</a>
            </p>
        </FooterStyle>
    )
}