import Cart from "../component/add-cart/Cart"
import SliderSection from "../component/add-cart/SliderSection"


function AddToCart() {

  return (

    <div className="py-4 md:py-20">
      <h2 className="text-5xl text-center font-bold pb-8 ">Cart</h2>
      <Cart />
      <SliderSection />


    </div>

  )
}

export default AddToCart