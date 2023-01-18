import { Header } from "../components/Header";
import { useEffect, useState } from "react"
import { Produtos } from "../components/Produtos";
import { HomeStyle } from "./style";

function App() {
  // eslint-disable-next-line
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
      fetch('https://dummyjson.com/products/')
        .then(res => res.json())
        .then(res => setProdutos(res.products));
    }, []);

    console.log(produtos[1])
  return (
    <HomeStyle>
      <Header />

      <main>
        {produtos.map((produto) => (
          <Produtos 
            key={produto.id}
            photo={produto.thumbnail}
            title={produto.title}
            descricao={produto.description}
            preco={produto.price}
          />
        ))}
      </main>
    </HomeStyle>
  );
}

export default App;
