const Product = ({ product }) => {
  const { title, slug, price, description } = product
  console.log(product)

  return (
    <div className='border-2 border-red-600 p-2 rounded bg-amber-200'>
      <h1 className='text-xl font-bold'>Title: {title}</h1>
      <p>Slug: {slug}</p>
      <span className='text-green-500'>Price: {price}</span>
      <p className='text-gray-500'>Desc: {description}</p>
      <button className='bg-green-500 px-2 py-1 mt-2 font-bold '>
        Add To Cart
      </button>
    </div>
  )
}

export default Product
