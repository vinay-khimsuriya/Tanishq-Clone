export const addCategory = async ({ data }) => {
  const response = await fetch(
    "http://localhost:4500/api/admin/managecategory/category",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const jsonData = await response.json();
  console.log(jsonData);
  if (!response.ok) {
    return jsonData.message;
  }
  return jsonData.category.categoryName + " " + jsonData.message;
};

export const addSubCategory = async ({ data }) => {
  const response = await fetch(
    "http://localhost:4500/api/admin/managecategory/subcategory",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const jsonData = await response.json();
  console.log(jsonData);
  if (!response.ok) {
    return jsonData.message;
  }

  return jsonData.subcategory.subcategoryName + " " + jsonData.message;
};

export const addSubCategoryData = async ({ data }) => {
  const response = await fetch(
    "http://localhost:4500/api/admin/managecategory/subcategorydata",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const jsonData = await response.json();
  console.log(jsonData);
  if (!response.ok) {
    return jsonData.message;
  }

  return jsonData.subcategorydata.subcategoryDataName + " " + jsonData.message;
};
