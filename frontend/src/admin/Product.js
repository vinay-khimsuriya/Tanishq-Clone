import React from "react";

const Product = () => {
  const handleSubmit = () => {};
  return (
    <div className="w-full h-screen fixed bg-black bg-opacity-25">
      <div className="w-4/5 h-4/5 bg-white rounded-lg overflow-auto">
        <form className="w-full px-5 py-2" onSubmit={handleSubmit}>
          <div>
            <div></div>
          </div>
          <button>Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default Product;

// const [formData, setFormData] = useState({
//     productName: "",
//     productSlug: "",
//     originalPrice: "",
//     discountPrice: "",
//     discount: "",
//     primaryImage: null,
//     secondaryImage: null,
//     multipleImages: [],
//     metalType: "gold",
//     metalColor: "rose",
//     karat: "18k",
//     clarity: "",
//     shape: "",
//     noOfDiamond: "",
//     color: "",
//     productType: "",
//     jewelleryType: "",
//     gender: "women",
//     brand: "tanishq",
//     collection: "tanishq",
//     occasion: "tanishq",
//     categories: [],
//     subcategories: [],
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle file changes
//   const handleFileChange = (e, imageType) => {
//     const file = e.target.files[0];
//     setFormData((prev) => ({
//       ...prev,
//       [imageType]: file,
//     }));
//   };

//   // Handle multi-selection checkboxes
//   const handleMultiSelectChange = (e, fieldName) => {
//     const value = e.target.value;
//     setFormData((prev) => ({
//       ...prev,
//       [fieldName]: prev[fieldName].includes(value)
//         ? prev[fieldName].filter((item) => item !== value)
//         : [...prev[fieldName], value],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Submit formData here
//     console.log(formData);
//   };

//   return (
//     <div className="w-full h-screen flex justify-center items-center fixed top-0 left-0 bg-black bg-opacity-25 z-20 p-4">
//       <div className="w-full max-w-2xl h-auto bg-white rounded-lg overflow-auto p-5">
//         <form className="w-full" onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             {/* Product Name and Slug */}
//             <div className="flex flex-col sm:flex-row gap-3">
//               <div className="flex flex-col">
//                 <label>Product Name:</label>
//                 <input
//                   type="text"
//                   name="productName"
//                   value={formData.productName}
//                   onChange={handleChange}
//                   className="border border-primary rounded p-2"
//                   placeholder="Product name"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label>Product Slug:</label>
//                 <input
//                   type="text"
//                   name="productSlug"
//                   value={formData.productSlug}
//                   onChange={handleChange}
//                   className="border border-primary rounded p-2"
//                   placeholder="Product slug"
//                 />
//               </div>
//             </div>

//             {/* Price Fields */}
// <div className="flex flex-col sm:flex-row gap-3">
//   <div className="flex flex-col">
//     <label>Original Price:</label>
//     <input
//       type="number"
//       name="originalPrice"
//       value={formData.originalPrice}
//       onChange={handleChange}
//       className="border border-primary rounded p-2"
//       placeholder="Original Price"
//     />
//   </div>
//   <div className="flex flex-col">
//     <label>Discount Price:</label>
//     <input
//       type="number"
//       name="discountPrice"
//       value={formData.discountPrice}
//       onChange={handleChange}
//       className="border border-primary rounded p-2"
//       placeholder="Discount Price"
//     />
//   </div>
//   <div className="flex flex-col">
//     <label>Discount:</label>
//     <input
//       type="number"
//       name="discount"
//       value={formData.discount}
//       onChange={handleChange}
//       className="border border-primary rounded p-2"
//       placeholder="Discount"
//     />
//   </div>
// </div>

//             {/* File Uploads */}
// <div className="flex flex-col gap-3">
//   <label>Primary Image:</label>
//   <input
//     type="file"
//     onChange={(e) => handleFileChange(e, "primaryImage")}
//     className="border border-primary rounded p-2"
//   />
//   <label>Secondary Image:</label>
//   <input
//     type="file"
//     onChange={(e) => handleFileChange(e, "secondaryImage")}
//     className="border border-primary rounded p-2"
//   />
// </div>

//             {/* Metal Type, Metal Color, Karat */}
//             <div className="flex flex-col sm:flex-row gap-3">
//               <div className="flex flex-col">
//                 <label>Metal Type:</label>
//                 <select
//                   name="metalType"
//                   value={formData.metalType}
//                   onChange={handleChange}
//                   className="border border-primary rounded p-2"
//                 >
//                   <option value="gold">Gold</option>
//                   <option value="platinum">Platinum</option>
//                 </select>
//               </div>
//               <div className="flex flex-col">
//                 <label>Metal Color:</label>
//                 <select
//                   name="metalColor"
//                   value={formData.metalColor}
//                   onChange={handleChange}
//                   className="border border-primary rounded p-2"
//                 >
//                   <option value="rose">Rose</option>
//                   <option value="white">White</option>
//                   <option value="yellow">Yellow</option>
//                 </select>
//               </div>
//             </div>

//             {/* Multi-Select for Categories */}
// <div className="flex flex-col gap-2">
//   <label>Select Categories:</label>
//   <div className="flex gap-3">
//     <label>
//       <input
//         type="checkbox"
//         value="gold"
//         onChange={(e) => handleMultiSelectChange(e, "categories")}
//       />{" "}
//       Gold
//     </label>
//     <label>
//       <input
//         type="checkbox"
//         value="silver"
//         onChange={(e) => handleMultiSelectChange(e, "categories")}
//       />{" "}
//       Silver
//     </label>
//     <label>
//       <input
//         type="checkbox"
//         value="platinum"
//         onChange={(e) => handleMultiSelectChange(e, "categories")}
//       />{" "}
//       Platinum
//     </label>
//   </div>
// </div>

//             <button className="bg-primary text-white py-2 px-4 my-1 rounded-md hover:bg-red-800">
//               Add Product
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
