import Nav from '../components/Nav'
import ProductList from '../components/ProductList'
import { getProductsInCollection } from '../lib/shopify'



export default function Home({ products }) {
  return (
   <div>


<ProductList products={products} />


   </div>

  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}