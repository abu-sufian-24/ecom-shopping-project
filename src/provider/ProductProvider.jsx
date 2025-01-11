import { useState } from "react"
import { ProductContext } from "../context"


function ProductProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const productInfo = {
    selectedProduct
  }
  return (
    <ProductContext.Provider value={productInfo}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider