import { Link, NavLink } from "react-router-dom";
import { HeaderStyle } from "./style";

export const Header = () => {

    return(
        <HeaderStyle>
            <div className="constainer">
                <div className="logo">
                {/* eslint-disable-next-line */}
                    <NavLink to="/"><span>One</span>Shope</NavLink>
                </div>
                <div className="lin">
                    <nav>
                        <ul>
                            {/* eslint-disable-next-line */}
                            <li><Link to="/">Inicio</Link></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="#contato">Contato</a></li>
                            {/* eslint-disable-next-line */}
                            <li><Link to="/car" >Carrinho</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </HeaderStyle>
    )
};