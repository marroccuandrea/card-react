import React from 'react'
const prezzo = '10'
const alt = 'valore'
const img = "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f20099.jpg"

const Card = () => {
  return (
    <article>
        <div className="card">
            <img src={img} alt={`${alt}`} />
            <h6>10 € Amazon</h6>
            <p>2,16 €</p>
            <p>bamby0000</p>
        </div>
        <p className='card-time'>RIAPRE PRESTO</p>
        <button>{prezzo} €</button>
    </article>
  )
}

export default Card