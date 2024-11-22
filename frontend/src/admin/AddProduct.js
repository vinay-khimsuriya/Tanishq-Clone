import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";

const AddProduct = () => {
  const [firstFiveData, setFirstFiveData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subcategory, setSubcategory] = useState([]);
  const [collection, setCollection] = useState([]);
  const [occation, setOccation] = useState([
    "casual wear",
    "daily wear",
    "party wear",
    "traditional",
    "morder",
    "wedding",
    "work wear",
  ]);
  const [isDiamond, setIsDiamond] = useState(null);

  const [formData, setFormData] = useState({
    productName: "",
    productSlug: "",
    originalPrice: "",
    discountPrice: "",
    discount: "",
    primaryImage: null,
    secondaryImage: null,
    multipleImages: [],
    metalType: "gold",
    metalColor: "rose",
    karat: "18k",
    clarity: "",
    shape: "",
    noOfDiamond: "",
    color: "",
    productType: "a",
    jewelleryType: "Gold Jewellery",
    gender: "women",
    brand: "tanishq",
    collection: "nav-raani",
    occasion: "",
    categories: [],
    subcategories: [],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:4500/api/primarycategory");

    if (response.ok) {
      const jsonData = await response.json();
      const firstFive = jsonData?.category.slice(0, 5);
      setFirstFiveData(firstFive);

      const collectionCategory = jsonData.category.find(
        (obj) => obj.name.toLowerCase() === "collections"
      );

      if (collectionCategory) {
        const collections = collectionCategory?.subcategoryIds;
        setCollection(collections);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "metalType" && value === "diamond") {
      setIsDiamond(false);
    } else {
      setIsDiamond(true);
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e, imageType) => {
    const file = e.target.files[0].name;
    setFormData((prev) => ({
      ...prev,
      [imageType]: file,
    }));
  };

  const handleMultiSelectChange = (e) => {
    const fileNames = Array.from(e.target.files).map((file) => file.name);
    setFormData((prev) => ({
      ...prev,
      multipleImages: fileNames,
    }));
  };

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prev) => {
      const updatedCategories = prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category];

      if (!selectedCategory) {
        setSelectedCategory(category);
        setSubcategory(category.subcategoryIds);
      }

      if (!selectedCategory || !updatedCategories.includes(selectedCategory)) {
        const newSelectedCategory = updatedCategories[0] || null;
        setSelectedCategory(newSelectedCategory);
        setSubcategory(
          newSelectedCategory ? newSelectedCategory.subcategoryIds : []
        );
      }

      const categorySlugs = updatedCategories.map((cat) => cat.slug);

      setFormData((prevFormData) => ({
        ...prevFormData,
        categories: categorySlugs,
      }));
      return updatedCategories;
    });
  };

  const handleSubcategory = (e) => {
    const slug = e.target.value;
    const category = firstFiveData.find((obj) => obj.slug === slug);

    if (category) {
      setSelectedCategory(category);
      setSubcategory(category.subcategoryIds);
    } else {
      console.warn("Category not found for slug:", slug);
      setSubcategory([]);
    }
  };

  const handleSubcategoryChange = (e) => {
    const slug = e.target.value;
    const subcategory = selectedCategory.subcategoryIds.find(
      (subcat) => subcat.slug === slug
    );

    setSelectedSubcategory((prev) => {
      const updatedSubcategories = prev.includes(subcategory)
        ? prev.filter((item) => item.slug !== subcategory.slug)
        : [...prev, subcategory];

      const subcategorySlugs = updatedSubcategories.map(
        (subcat) => subcat.slug
      );

      setFormData((prevFormData) => ({
        ...prevFormData,
        subcategories: subcategorySlugs,
      }));

      return updatedSubcategories;
    });
  };

  // const handleSubcategoryChange = (e) => {
  //   setSelectedSubcategory((prev) => {
  //     const updatedSubcategories = prev.includes(e.target.value)
  //       ? prev.filter((item) => item !== e.target.value)
  //       : [...prev, e.target.value];

  //     const SubcategorySlugs = updatedSubcategories.map(
  //       (subcat) => subcat.slug
  //     );

  //     setFormData((prevFormData) => ({
  //       ...prevFormData,
  //       subcategories: SubcategorySlugs,
  //     }));
  //     return updatedSubcategories;
  //   });
  // };

  const handleRemoveSubcategory = (subcategoryToRemove) => {
    setSelectedSubcategory((prev) =>
      prev.filter((subcategory) => subcategory !== subcategoryToRemove)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data>>>>>>>>", formData);
  };
  useEffect(() => {
    console.log("fomr Data >>>>>>", selectedCategories, formData);
  }, [selectedCategories]);

  return (
    <div className="w-full h-screen flex justify-center items-center fixed top-0 left-0 bg-black bg-opacity-25 z-20 p-4">
      <div className="w-full max-w-2xl h-5/6 bg-white rounded-lg overflow-y-auto p-5">
        <form className="w-full overflow-auto" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row gap-1 border p-1 rounded">
              <div className="flex flex-col">
                <label>Product Name:</label>
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  className="border border-primary rounded p-1"
                  placeholder="Product name"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label>Product Slug:</label>
                <input
                  type="text"
                  name="productSlug"
                  value={formData.productSlug}
                  onChange={handleChange}
                  className="border border-primary rounded p-1"
                  placeholder="Product slug"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-1 border rounded p-1">
              <div className="flex flex-col">
                <label>Original Price:</label>
                <input
                  type="number"
                  name="originalPrice"
                  value={formData.originalPrice}
                  onChange={handleChange}
                  className="border border-primary rounded p-1"
                  placeholder="Original Price"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label>Discount Price:</label>
                <input
                  type="number"
                  name="discountPrice"
                  value={formData.discountPrice}
                  onChange={handleChange}
                  className="border border-primary rounded p-1"
                  placeholder="Discount Price"
                />
              </div>
              <div className="flex flex-col">
                <label>Discount:</label>
                <input
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  className="border border-primary rounded p-1"
                  placeholder="Discount"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 border rounded p-1">
              <label>Primary Image:</label>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "primaryImage")}
                className="border border-primary rounded p-1"
              />
              <label>Secondary Image:</label>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "secondaryImage")}
                className="border border-primary rounded p-1"
              />
              <label>Select Multiple Images:</label>
              <input
                className="border border-primary rounded p-1"
                type="file"
                multiple
                accept="image/*"
                onChange={handleMultiSelectChange}
              ></input>
            </div>
            <div className="flex flex-col sm:flex-row gap-1 justify-evenly border rounded p-1">
              <div className="flex flex-col">
                <label>Metal Type:</label>
                <select
                  name="metalType"
                  value={formData.metalType}
                  onChange={handleChange}
                  className="border border-primary rounded p-1"
                  required
                >
                  <option value="gold">Gold</option>
                  <option value="platinum">Platinum</option>
                  <option value="diamond">Diamond</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label>Metal Color:</label>
                <select
                  name="metalColor"
                  value={formData.metalColor}
                  onChange={handleChange}
                  className="border border-primary rounded p-1"
                  required
                >
                  <option value="rose">Rose</option>
                  <option value="white">White</option>
                  <option value="yellow">Yellow</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label for="karat">Karat:</label>

                <select
                  name="karat"
                  value={formData.karat}
                  className="border border-primary rounded p-1"
                  onChange={handleChange}
                  required
                >
                  <option value="18k">18k</option>
                  <option value="22k">22k</option>
                  <option value="24k">24k</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label for="gender">Gender:</label>

                <select
                  name="gender"
                  value={formData.gender}
                  className="border border-primary rounded p-1"
                  onChange={handleChange}
                >
                  <option value="women">Women</option>
                  <option value="men">Men</option>
                  <option value="kids">Kids</option>
                  <option value="teens">Teens</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label for="brand">Brand:</label>

                <select
                  name="brand"
                  value={formData.brand}
                  className="border border-primary rounded p-1"
                  onChange={handleChange}
                  required
                >
                  <option value="tanishq">Tanishq</option>
                  <option value="mia">Mia</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap justify-between gap-2 border border-primary rounded p-1">
              <p className="w-full border p-1 rounded">Dimond Property:</p>
              <div className="flex flex-wrap justify-between gap-2">
                <div className="flex flex-col">
                  <label for="clarity">Clarity:</label>
                  <input
                    disabled={isDiamond}
                    className="border border-primary rounded p-1"
                    type="text"
                    name="clarity"
                    placeholder="Enter Diamond clarity"
                  />
                </div>
                <div className="flex flex-col">
                  <label for="shape">Shape:</label>
                  <input
                    disabled={isDiamond}
                    className="border border-primary rounded p-1"
                    type="text"
                    name="shape"
                    placeholder="Enter Diamond shape"
                  />
                </div>
                <div className="flex flex-col">
                  <label for="NoOfDiamond">No of Diamond:</label>
                  <input
                    disabled={isDiamond}
                    className="border border-primary rounded p-1"
                    type="text"
                    name="NoOfDiamond"
                    placeholder="Enter Diamond color"
                  />
                </div>
                <div className="flex flex-col">
                  <label for="color gap-1">Color:</label>
                  <input
                    disabled={isDiamond}
                    className="border border-primary rounded p-1"
                    type="text"
                    name="color"
                    placeholder="Enter Diamond color"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-5 border">
              <div className="flex flex-col">
                <label htmlFor="productType">Product Type:</label>

                <select
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                  className="border border-primary rounded p-1"
                  required
                >
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label for="jewelleryType">Jewellery Type:</label>

                <select
                  name="jewelleryType"
                  value={formData.jewelleryType}
                  onChange={handleChange}
                  className="border border-primary rounded p-1"
                  required
                >
                  <option value="Gold Jewellery">Gold Jewellery</option>
                  <option value="Diamond Jewellery">Diamond Jewellery</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label for="collection">Collection:</label>

                <select
                  value={formData.collection}
                  className="border border-primary rounded p-1"
                  name="collection"
                  onChange={handleChange}
                  required
                >
                  {collection &&
                    collection.map((collection, index) => (
                      <option value={collection.slug} key={collection._id}>
                        {collection.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label for="occation">Occastion:</label>

                <select
                  value={formData.occasion}
                  name="occcation"
                  className="border border-primary rounded p-1"
                  onChange={handleChange}
                  required
                >
                  {occation.map((occation, index) => (
                    <option key={index} value={occation}>
                      {occation}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex w-full gap-1">
              <div className="w-full border p-2 rounded space-y-1">
                <p>Select Categories:</p>
                <div className=" flex flex-wrap gap-2">
                  {firstFiveData.map((category, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCheckboxChange(category)}
                      />
                      <label>{category.name}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex gap-1">
                <label htmlFor="subcategory">Category:</label>
                <select
                  onChange={handleSubcategory}
                  className="min-w-32 border border-primary rounded p-1"
                  required
                >
                  {selectedCategories &&
                    selectedCategories.map((category, index) => (
                      <option value={category.slug} key={category._id}>
                        {category.name}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label htmlFor="subcategory">Sub Category:</label>
                <select onChange={handleSubcategoryChange} required>
                  {subcategory &&
                    subcategory.map((category, index) => (
                      <option value={category.slug} key={category._id}>
                        {category.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="w-full flex gap-1 flex-wrap">
              {selectedSubcategory &&
                selectedSubcategory.map((subcategory, index) => (
                  <div
                    key={index}
                    className="border p-1 rounded flex items-center justify-between"
                  >
                    {subcategory.name}
                    <button
                      onClick={() => handleRemoveSubcategory(subcategory)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      &times;
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <div className="w-full flex p-2 justify-center">
            <button className="w-96 bg-primary text-white py-2 px-4 my-1 rounded-md hover:bg-red-800">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

// const map = {};
// const allSubcategories = [];

// firstFive.forEach((category) => {
//   map[category.name] = category.subcategoryIds.map((subcat) => ({
//     id: subcat._id,
//     name: subcat.name,
//   }));

//   allSubcategories.push(...map[category.name]);
// });
// setCategorySubcategoryMap(map);
// setSubcategory(allSubcategories);

// <div className="flex flex-col gap-2">
//               <label>Select Categories:</label>
//               <div className="flex gap-3">
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="gold"
//                     onChange={(e) => handleMultiSelectChange(e, "categories")}
//                   />{" "}
//                   Gold
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="silver"
//                     onChange={(e) => handleMultiSelectChange(e, "categories")}
//                   />{" "}
//                   Silver
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="platinum"
//                     onChange={(e) => handleMultiSelectChange(e, "categories")}
//                   />{" "}
//                   Platinum
//                 </label>
//               </div>
//             </div>

// import React, { useEffect, useReducer, useRef, useState } from "react";
// import { RxCross1 } from "react-icons/rx";

// import { fetchcategory1, fetchSubcategory1 } from "../utils/fetchData";
// import axios from "axios";

// const AddProduct = ({ setIsShow }) => {
//   const nameRef = useRef();
//   const priceRef = useRef();
//   const weightRef = useRef();
//   const karatRef = useRef();
//   const diamondCTRef = useRef();

//   const [categoryName, setCategoryName] = useState();
//   const [subcategoryName, setSubategoryName] = useState();
//   const [selectedImages, setSelectedImages] = useState([]);

//   const [category, setCategory] = useState();
//   const [isCategory, setIsCategory] = useState();
//   const [subCategory, setSubCategory] = useState();
//   const [isSubCategory, setIsSubCategory] = useState();

//   const [subcategoryType, setsubcategoryType] = useState();
//   const [error, setError] = useState();
//   const [selectedCategoryId, setSelectedCategoryId] = useState();
//   const [selectedSubCategoryId, setSelectedSubCategoryId] = useState();
//   const [selectedSubCategoryType, setSelectedSubCategoryType] = useState();

//   const [imagePreview, setImagePreview] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const subcategoryData = await fetchSubcategory1();
//         setSubCategory(subcategoryData?.subcategories);
//         setIsSubCategory(true);

//         const categoryData = await fetchcategory1();
//         setCategory(categoryData?.categories);
//         setIsCategory(true);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError(error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (selectedCategoryId) {
//       fetchSubcategory();
//     }
//   }, [selectedCategoryId]);

//   const fetchSubcategory = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:4500/api/admin/managecategory/subcategory/${selectedCategoryId}`
//       );
//       if (response && response.data) {
//         setSubCategory(response.data.subcategory);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     if (selectedSubCategoryId) {
//       fetchsubcategorydata();
//     }
//   }, [selectedSubCategoryId]);

//   const fetchsubcategorydata = async () => {
//     try {
//       const data = {
//         categoryId: selectedCategoryId,
//         subcategoryId: selectedSubCategoryId,
//       };

//       const response = await fetch(
//         "http://localhost:4500/api/admin/managecategory/subcategorydata/ids",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         }
//       );
//       if (response.ok) {
//         const jsonData = await response.json();
//         setsubcategoryType(jsonData.subcategorydata);
//       }
//     } catch (error) {
//       console.error("Error fetching subcategory data:", error);
//     }
//   };

//   //   useEffect(() => {
//   //     console.log("category >>>>>>>", category);
//   //     console.log("sub category >>>>>>", subCategory);
//   //     console.log("sub category type>>>>>>", selectedImages);
//   //     console.log("category name>>>>>>", categoryName);
//   //     console.log("sub category name>>>>>>", subcategoryName);
//   //   }, [categoryName, subcategoryName]);

//   const handleCategoryChange = (e) => {
//     const selectedOption = e.target.options[e.target.selectedIndex];
//     setSelectedCategoryId(e.target.value);
//     setCategoryName(selectedOption.text);
//   };

//   const handleSubCategoryChange = (e) => {
//     const selectedOption = e.target.options[e.target.selectedIndex];
//     setSelectedSubCategoryId(e.target.value);
//     setSubategoryName(selectedOption.text);
//   };
//   const handleSubCategorytypeChange = (e) => {
//     setSelectedSubCategoryType(e.target.value);
//     alert(e.target.value);
//   };
//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setSelectedImages(files);

//     const imagePreviews = files.map((file) => file.name);
//     setImagePreview(imagePreviews);
//   };

//   const handleRemoveImage = (index) => {
//     setSelectedImages((prev) => prev.filter((_, i) => i !== index));
//     setImagePreview((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       nameRef.current.value &&
//       priceRef.current.value &&
//       weightRef.current.value &&
//       categoryName &&
//       subcategoryName &&
//       selectedSubCategoryType &&
//       selectedImages
//     ) {
//       const productData = {
//         name: nameRef.current.value,
//         price: priceRef.current.value,
//         weight: weightRef.current.value,
//         karat: karatRef.current.value,
//         diamondCT: diamondCTRef.current.value,
//         category: categoryName,
//         subcategory: subcategoryName,
//         subcategoryType: selectedSubCategoryType,
//         images: selectedImages,
//       };
//       console.log("Product Data: ", productData);
//     } else {
//       console.log("missing data");
//     }
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-25">
//       <div className="bg-transparent flex justify-center items-center w-full h-screen relative">
//         <span
//           className="absolute top-3 right-3 text-xl cursor-pointer"
//           onClick={() => setIsShow(false)}
//         >
//           <RxCross1 />
//         </span>
//         <form className="bg-white rounded-lg p-2 py-5" onSubmit={handleSubmit}>
//           <div className="flex flex-col gap-2">
//             <div className="flex gap-1">
//               <label className="w-40 text-nowrap p-1">Product Name:</label>
//               <input
//                 ref={nameRef}
//                 className="w-full p-1 border rounded focus:ring-1 focus:ring-primary outline-none"
//                 type="text"
//                 placeholder="please write product name"
//               />
//             </div>
//             <div className="flex gap-1">
//               <label className="w-40 text-nowrap p-1">Product Price:</label>
//               <input
//                 ref={priceRef}
//                 className="w-full p-1 border rounded focus:ring-1 focus:ring-primary outline-none"
//                 type="text"
//                 placeholder="Enter Price"
//               />
//             </div>
//             <div className="flex gap-1">
//               <label className="w-40 text-nowrap p-1">Product Weight:</label>
//               <input
//                 ref={weightRef}
//                 className="w-full p-1 border rounded focus:ring-1 focus:ring-primary outline-none"
//                 type="text"
//                 placeholder="Enter Weight"
//               />
//             </div>
//           </div>

//           <div className="flex justify-between py-3 gap-2 border pe-2">
//             <div className="flex flex-col gap-1 items-center text-center">
//               <lebel className="text-nowrap ">Select Category</lebel>
//               <select
//                 disabled={!isCategory}
//                 className="text-center bg-slate-700 text-white rounded mx-2 py-1"
//                 value={selectedCategoryId}
//                 onChange={handleCategoryChange}
//               >
//                 <option value=""></option>
//                 {category &&
//                   category.map((category, index) => (
//                     <option key={category._id} value={category._id}>
//                       {category.categoryName}
//                     </option>
//                   ))}
//               </select>
//             </div>
//             <div className="flex flex-col gap-1 items-center justify-center">
//               <lebel className="text-nowrap">Select Subcategory</lebel>
//               <select
//                 className="text-center bg-slate-700 text-white rounded mx-2 py-1"
//                 disabled={!isSubCategory}
//                 value={selectedSubCategoryId}
//                 onChange={handleSubCategoryChange}
//               >
//                 <option value=""></option>
//                 {subCategory &&
//                   subCategory.map((subcategory, index) => (
//                     <option key={subcategory._id} value={subcategory._id}>
//                       {subcategory.subcategoryName}
//                     </option>
//                   ))}
//               </select>
//             </div>
//             <div className="flex flex-col gap-1 items-center justify-center">
//               <lebel className=" text-nowrap">Select Subcategory type</lebel>
//               <select
//                 className="text-center w-full  bg-slate-700 text-white rounded mx-2 py-1"
//                 disabled={!isSubCategory}
//                 value={selectedSubCategoryType}
//                 onChange={handleSubCategorytypeChange}
//               >
//                 <option value=""></option>
//                 {subcategoryType &&
//                   subcategoryType.map((subcategorytype, index) => (
//                     <option
//                       key={subcategorytype._id}
//                       value={subcategorytype.subcategoryDataName}
//                     >
//                       {subcategorytype.subcategoryDataName}
//                     </option>
//                   ))}
//               </select>
//             </div>
//           </div>
//           <div className="flex gap-2 justify-between p-1">
//             <div className="">
//               <lable className="p-1">Gold Karat:</lable>
//               <input
//                 ref={karatRef}
//                 className="p-1 ms-1 border rounded"
//                 type="number"
//                 placeholder="Enter number"
//               />
//             </div>
//             <div className="">
//               <lable className="p-1">Diamond ct:</lable>
//               <input
//                 ref={diamondCTRef}
//                 className="p-1 ms-1 border rounded"
//                 type="number"
//                 placeholder="Enter number"
//               />
//             </div>
//           </div>

//           <div className="flex gap-2 my-2">
// <input
//   className="my-2 pt-1 w-[105px] rounded"
//   type="file"
//   multiple
//   accept="image/*"
//   files="vinay"
//   onChange={handleImageChange}
// ></input>
//             <div className="flex flex-col gap-2 mt-2">
//               {imagePreview.map((file, index) => (
//                 <div className="flex items-center gap-2 flex-wrap">
//                   <h1 className="w-[440px]">{file}</h1>
//                   <RxCross1
//                     className="cursor-pointer"
//                     onClick={() => handleRemoveImage(index)}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//           <button className="btn-primary p-2 w-full hover:bg-orange-800">
//             Add Product
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;
