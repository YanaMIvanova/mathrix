import React from "react";
import { Helmet } from "react-helmet-async";

import {capitalizeFirstLetter} from "../data/utils";

function SectionPage({sectionTitle, categoryName}) {
  return (
    <>
      <Helmet>
        <title>{capitalizeFirstLetter(categoryName)}</title>
      </Helmet>
      <h1>{capitalizeFirstLetter(categoryName)}</h1>
      <h2>{sectionTitle}</h2>
    </>
  );
}

export default SectionPage;
