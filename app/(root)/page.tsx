import sampleData from '@/db/sample-data'
import { ProductList } from '@/entities'

const Home = () => {
  return (
    <div className="space-y-8">
      <h2 className="h2-bold">Latest Products</h2>
      <ProductList title="Newest Arrivals" data={sampleData.products} />
    </div>
  )
}

export default Home
