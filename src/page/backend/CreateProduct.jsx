import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function CreateProduct() {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    photo: "",
    price: "",
    label: "",

  });

  // Fetch data if it's in edit mode
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/shop/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setFormData({
            name: data.name,
            description: data.description,
            photo: data.photo,
            price: data.price,
            label: data.label,

          });
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      // Update product (Edit mode)
      fetch(`http://localhost:5000/shop/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          Swal.fire("Success", "Product updated successfully!", "success");
          navigate("/dashboard/product");
          console.log(data);
        });


    } else {
      // Create new product (Create mode)
      fetch("http://localhost:5000/shops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          Swal.fire("Success", "Product created successfully!", "success");
          navigate("/dashboard/product");
        });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
        <Link to="/dashboard" className="text-gray-600 hover:text-gray-800 mb-4 block">
          &#8592; Back to Dashboard
        </Link>
        <h2 className="text-2xl font-bold mb-6 text-center">
          {id ? "Edit Product" : "Add New Product"}
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-gray-700 text-sm mb-2">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Product Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-2">Product Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter Product Price"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-2">Product Photo</label>
            <input
              type="url"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              placeholder="Enter Photo URL"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-2">Product Label</label>
            <input
              type="text"
              name="label"
              value={formData.label}
              onChange={handleChange}
              placeholder="Enter Product Label"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-2">Product Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter Product Description"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            {id ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
