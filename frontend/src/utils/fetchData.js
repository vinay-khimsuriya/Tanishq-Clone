export const fetchcategory1 = async () => {
  try {
    const response = await fetch(
      "http://localhost:4500/api/admin/managecategory/category"
    );
    const jsonData = await response.json();

    if (!response.ok) {
      return "something is wrong";
    }
    return jsonData;
  } catch (error) {
    return error;
  }
};

export const fetchSubcategory1 = async () => {
  try {
    const response = await fetch(
      "http://localhost:4500/api/admin/managecategory/subcategory"
    );
    const jsonData = await response.json();

    if (!response.ok) {
      return "Somthing is wrong";
    }
    return jsonData;
  } catch (error) {
    return error;
  }
};
