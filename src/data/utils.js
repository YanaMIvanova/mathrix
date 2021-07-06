import categories from "./categories";

export const getCategories = ({ categoryName }) =>
  categories.algebra ?? categories[categoryName];

export const getSectionDetails = ({ categoryName, sectionId }) =>
  getCategories({ categoryName }).find((section) => section.id === sectionId);

export const getPath = (sectionName) => `/${sectionName}`;

export const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);
