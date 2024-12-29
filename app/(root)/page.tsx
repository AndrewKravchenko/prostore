import sampleData from '@/db/sample-data'
import { ProductList } from '@/entities'

const Home = () => {
  return (
    <>
      <ProductList data={sampleData.products} title="Newest Arrivals" limit={4} />
    </>
  )
}

export default Home
