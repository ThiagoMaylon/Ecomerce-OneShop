import { HeaderStyle } from "./style";

export const Header = () => {

    return(
        <HeaderStyle>
            <div className="constainer">
                <div className="logo">
                {/* eslint-disable-next-line */}
                    <a href="#">My Shop</a>
                </div>
                <div className="lin">
                    <nav>
                        <ul>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">Sobre</a></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">Contato</a></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">Categorias</a></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">Carrinho</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </HeaderStyle>
    )
};