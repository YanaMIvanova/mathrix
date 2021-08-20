import categories from "./categories";

export const getCategories = ({ categoryName }) => categories[categoryName];

export const getSectionTitle = ({ categoryName, sectionId }) =>
  getCategories({ categoryName }).find((section) => section.id === sectionId)['title'];

export const getPath = (sectionName) => `/${sectionName}`;

export const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);
