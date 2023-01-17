import { Categorias } from "../Categorias";
import { HeaderStyle } from "./style";

export const Header = () => {
    function handOnSubmit(e){
        e.prevendefault();
    }
    return(
        <HeaderStyle>
            <div className="constainer">
                <div className="logo">
                {/* eslint-disable-next-line */}
                    <a href="#">My Shop</a>
                </div>
                <form onSubmit={handOnSubmit}>
                    <input type="text" placeholder="pesquisar..."/>
                    <button>Procurar</button>
                </form>
            </div>
            <Categorias />
        </HeaderStyle>
    )
};