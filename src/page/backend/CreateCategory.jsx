import { Link } from "react-router"


function CreateCategory() {


  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const chef = e.target.chef.value
    const supplier = e.target.supplier.value
    const taste = e.target.taste.value
    const category = e.target.category.value
    const details = e.target.details.value
    const photo = e.target.photo.value
    const price = e.target.price.value


    const coffeeObject = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
      price
    }
    console.log(coffeeObject);

  }


  return (
    <div
      className=" max-w-3xl mx-auto bg-[url('/11.png')] bg-cover bg-center flex justify-center items-center"
    >
      <div className="bg-[#F4F3F0] p-8 rounded-lg shadow-lg w-[800px]">
        <button className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
          <Link to={"/dashboard"} className="text-xl mr-2">&#8592;</Link> Back to home
        </button>
        <h2 className="text-2xl font-bold text-center mb-6">Add New Category</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm mb-2"> Category Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter coffee name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">Category Photo</label>
            <input
              type="URL"
              placeholder="Enter photo URL"
              name="photo"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}


export default CreateCategory

