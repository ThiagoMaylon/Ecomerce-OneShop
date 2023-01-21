import { Link } from 'react-router-dom';
import {CardProductStyle} from './style';

export const Produtos = ({ title, photo, preco, id }) => {

    return(
        <CardProductStyle>
            <Link to={`/prod/${id}`}>
                <div className="Card">
                    <img src={photo} alt={title}/>
                    <div className="conteudo">
                        <h2>{title}</h2>
                        <h3>R${preco},00</h3>
                    </div>
                </div>
            </Link>
        </CardProductStyle>
    )
}