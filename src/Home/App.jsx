import { useEffect, useState } from "react"
import { Produtos } from "../components/Produtos";
import { HomeStyle } from "./style";
import { PesquisaProduto } from "../components/PesquisaProduto";
import { Footer } from "../components/Footer";

function App() {
  // eslint-disable-next-line
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
      fetch('https://dummyjson.com/products/')
        .then(res => res.json())
        .then(res => setProdutos(res.products));
    }, []);

  return (
    <HomeStyle>
      <PesquisaProduto />
      <main>
        {produtos.map((produto) => (
          <Produtos 
            key={produto.id}
            photo={produto.thumbnail}
            title={produto.title}
            descricao={produto.description}
            preco={produto.price}
            id={produto.id}
          />
        ))}
      </main>
      <Footer />
    </HomeStyle>
  );
}

export default App;
