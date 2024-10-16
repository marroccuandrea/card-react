import React from 'react'
// const prezzo = '10'
// const alt = 'valore'
// const img = "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f20099.jpg"

const Product = (props) => {
//  console.log(props.nome);
 
  return (
    <article>
        <div className="card">
            <img src={props.img} alt={`${props.nome}`} />
            <h6>{props.nome}</h6>
            <hr />
            <p>{props.prezzo} €</p>
            <p>{props.nome}</p>
            <p style={{textTransform: 'uppercase'}}>{props.utente}</p>
            <p className="card-time">RIAPRE PRESTO</p>
          <button>{props.prezzoFinale} €</button>
        </div>
        
    </article>
  )
}

export default Product