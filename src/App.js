import Product from "./Product";

const primaCard = {
  nome: "Asciugamano",
  img: "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f14712.jpg",
  prezzo: 2.16,
}
const secondaCard = {
  nome: "Cuccia Gatti",
  img: "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f20099.jpg",
  prezzo: 12.16,
}

function App() {
  return (
    <div className="App">
      <h1>La mia prima Card</h1>
      {/* <Product nome="mario" zona="rossa" /> */}
      <Product nome={primaCard.nome} prezzo={primaCard.prezzo} img={primaCard.img}/>
      <Product nome={secondaCard.nome} prezzo={secondaCard.prezzo} img={secondaCard.img}/>
    </div>
  );
}

export default App;
