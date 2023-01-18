import {CardProductStyle} from './style';

export const Produtos = ({ title, photo, descricao, preco }) => {
    return(
        <CardProductStyle>
            <div className="Card">
                <img src={photo} alt={title}/>
                <div className="conteudo">
                    <h2>{title}</h2>
                    <p>{descricao}</p>
                    <h3>R${preco},00</h3>
                    <button>Adicionar ao Carrrinho</button>
                </div>
            </div>
        </CardProductStyle>
    )
}