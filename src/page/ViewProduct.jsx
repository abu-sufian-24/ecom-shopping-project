import LeftSide from "../component/productDetails/viewProduct/LeftSide";
import MainSection from "../component/productDetails/viewProduct/MainSection";



function ViewProduct() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl text-center mt-8 sm:mt-14">Prodotti</h1>
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6 sm:mb-10">
        <p className="mb-4 sm:mb-0">Showing 1-12 of 20 results</p>
        <select className="select select-error w-full sm:w-auto">
          <option disabled selected>Default Sorting</option>
          <option>Strapi</option>
          <option>Ghost</option>
          <option>Netlify CMS</option>
          <option>Sanity</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3 lg:col-span-2">
          <LeftSide />
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-10">
          <MainSection />
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
