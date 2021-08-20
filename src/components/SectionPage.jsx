import React from "react";
import { Helmet } from "react-helmet-async";

import {capitalizeFirstLetter} from "../data/utils";

function SectionPage({sectionTitle, categoryName}) {
  return (
    <>
      <Helmet>
        <title>{capitalizeFirstLetter(categoryName)}</title>
      </Helmet>
      <h2 className="ps-3 fw-bold">{sectionTitle}</h2>
    </>
  );
}

export default SectionPage;
