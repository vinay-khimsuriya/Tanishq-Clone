import React, { useState, useEffect } from "react";

const CategoryDropdown = ({ categories }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategoryId(e.target.value);
  };

  return (
    <div>
      <label htmlFor="categoryDropdown">Select a Category:</label>
      <select
        id="categoryDropdown"
        value={selectedCategoryId}
        onChange={handleCategoryChange}
      >
        <option value="" disabled>
          Select a category
        </option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.categoryName}
          </option>
        ))}
      </select>

      {/* Display the selected category's ID */}
      {selectedCategoryId && <p>Selected Category ID: {selectedCategoryId}</p>}
    </div>
  );
};

export default CategoryDropdown;
