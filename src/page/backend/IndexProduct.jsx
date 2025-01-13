import ProductTable from "../../backend-side/backend-component/ProductTable"


function IndexProduct() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Our Products</h1>
      <ProductTable />
    </div>
  )
}

export default IndexProduct