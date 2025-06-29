import React from 'react'

const ProductList = () => {
    const product = [
        {
            id: 1,
            name: "phone",
            price: "$165"
        },
        {
            id: 2,
            name: "Laptop",
            price: "$356"
        },
        {
            id: 3,
            name: "Headphone",
            price: "$128"
        },
    ]
  return (
    <div>
        {
            product.map(({id, name , price}) => (
                <ul key={id}>
                    <li>{name}</li>
                    <li>{price}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default ProductList