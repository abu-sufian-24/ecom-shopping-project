import { useState } from "react";
import { Link } from "react-router";

function Table() {

  const [categories, setCategories] = useState([
    {
      id: "-OEh7LObKFqs9AYxdm8o",
      imageUrl: "https://i.postimg.cc/xTF1Cgr1/download.png",
      name: "t-shirt",
    },
    {
      id: "-OErJxOQUbnfmluE73_F",
      imageUrl: "https://i.postimg.cc/xTF1Cgr1/download.png",
      name: "panjabi",
    },
    {
      id: "-OErJxOQUbnfmluE73_F",
      imageUrl: "https://i.postimg.cc/xTF1Cgr1/download.png",
      name: "panjabi",
    },
  ]);



  const handleDelete = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4 text-center md:text-left">
        Our Categories
      </h1>

      {/* Search Bar and Add Button */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
        <input
          type="text"
          placeholder="Search for items"
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Link to={"/dashboard/create-category"}>
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
              Category Image URL
            </th>
            <th className="px-4 py-3 text-left text-sm md:text-base">
              Category Name
            </th>
            <th className="px-4 py-3 text-center text-sm md:text-base">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="border-b">
              <td className="px-4 py-3 text-sm md:text-base">{category.id}</td>
              <td className="px-4 py-3 text-sm md:text-base">
                <a
                  href={category.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline break-all"
                >
                  {category.imageUrl}
                </a>
              </td>
              <td className="px-4 py-3 text-sm md:text-base">
                {category.name}
              </td>
              <td className="px-4 py-3 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2">
                <button
                  className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm md:text-base"
                  onClick={() => alert(`Edit ${category.name}`)}
                >
                  Edit
                </button>
                <button
                  className="flex items-center bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm md:text-base"
                  onClick={() => handleDelete(category.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
