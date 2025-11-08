import React, { useState } from "react"; //useState:criar estados que reagem a mudanças.
import produtos from "./Produtos.json"; //lista de produtos(array do javascript)
import "./App.css";

function App() {
  const [codigo, setCodigo] = useState(""); //guarda oq o usuário digitou
  const [produto, setProduto] = useState(null); //guarda produto encontrado/null=nenhum 
  const [buscou, setBuscou] = useState(false); //indica se o usuário já clicou no botão de pesquisar

  function buscarProduto() {
    setBuscou(true); // marca que o usuário clicou no botão
    const encontrado = produtos.find((item) => item.ean === codigo);
    //find=item encontrado/undefined se não achar.
    setProduto(encontrado || null);
  }

  return (
    <div
      className="App" //css background image
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/fundo.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <div className="container">
        <h1>Papelaria: Consulte Já</h1>
        <input
          type="text"
          placeholder="Digite o código de barras"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <button onClick={buscarProduto}>Pesquisar</button>

        {produto ? (
          <div className="resultado">
            <img src={produto.imagem} alt={produto.nome} />
            <h2>{produto.nome}</h2>
            <p><strong>Valor:</strong> {produto.valor}</p>
          </div>
        ) : (
          buscou && <p>Produto não cadastrado</p>
        )}
      </div>
    </div>
  );
}

export default App;
