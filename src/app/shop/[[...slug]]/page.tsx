import React from 'react'

const ProductDetails = async ({params}: {params: Promise<{slug?: string[]}>}) => {
  const {slug} = await params;

  if (slug && slug.length === 2) {
    return <p>Viewing product category: {slug[0]} and product: {slug[1]}</p>
  } else if (slug && slug.length === 1) {
    return <p>Viewing product category: {slug[0]}</p>
  } else {
    return (
      <div>
        <h1>Product Details Page</h1>
      </div>
    )
  }
}

export default ProductDetails
