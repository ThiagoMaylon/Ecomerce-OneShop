import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetalheProdutoStyle } from './style'

export const DetalheProduto = () => {
    const [produtos, setProdutos] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
          .then(res => res.json())
          .then(res => setProdutos(res));

      }, []);
    return(
        <DetalheProdutoStyle>
           <div className="imagem">
               <img src={produtos.thumbnail} />
           </div>
           <div className="content">
                <h1>{produtos.title}</h1>
                <p>
                    {produtos.description}
                </p>
                <h2>R$ {produtos.price},00</h2>
                <button>Adicionar ao Carrinho</button>
           </div>
        </DetalheProdutoStyle>
    )
}