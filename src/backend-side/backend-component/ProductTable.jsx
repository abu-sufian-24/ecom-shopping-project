import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";




function ProductTable() {
  const [products, setProducts] = useState([])
  // const {products} = useContext(AuthContext)

  useEffect(() => {
    fetch("http://localhost:5000/shops")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])


  const handleDelete = (id) => {


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/shop/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {

              const newData = products.filter((product => product._id !== id))
              setProducts(newData)
              Swal.fire({

                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }

          })

      }
    });



  }



  return (
    <>

      <div className="p-6 bg-white rounded-md shadow-md overflow-x-auto">

        {/* Search Bar and Add Button */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
          <input
            type="text"
            placeholder="Search for items"
            className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <Link to={"/dashboard/create-product"}>
            <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 w-full md:w-auto justify-center">
              Add
            </button>
          </Link>

        </div>

        {/* Table */}
        <table className="w-full border-collapse">
          <thead className="border-dashed border-b-2">
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left text-sm md:text-base">
                ID
              </th>
              <th className="px-4 py-3 text-left text-sm md:text-base">
                Product Image URL
              </th>
              <th className="px-4 py-3 text-left text-sm md:text-base">
                Product Description
              </th>
              <th className="px-4 py-3 text-left text-sm md:text-base">
                Product Name
              </th>
              <th className="px-4 py-3 text-left text-sm md:text-base">
                Product label
              </th>
              <th className="px-4 py-3 text-left text-sm md:text-base">
                Product Price
              </th>
              <th className="px-4 py-3 text-center text-sm md:text-base">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-b">
                <td className="px-4 py-3 text-sm md:text-base">{product._id}</td>
                <td className="px-4 py-3 text-sm md:text-base">
                  <a
                    href={product.photo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline break-all"
                  >
                    {product.photo}
                  </a>
                </td>
                <td className="px-4 py-3 text-sm md:text-base">
                  {product.category}
                </td>
                <td className="px-4 py-3 text-sm md:text-base">
                  {product.name}
                </td>
                <td className="px-4 py-3 text-sm md:text-base">
                  {product.label}
                </td>
                <td className="px-4 py-3 text-sm md:text-base">
                  {product.price}
                </td>
                <td className="px-4 py-3 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2">
                  <Link to={`/dashboard/edit-product/${product._id}`}>
                    <button
                      className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm md:text-base"
                    >
                      Edit
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(product._id)}
                    className="flex items-center bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm md:text-base"

                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>


  );
}

export default ProductTable