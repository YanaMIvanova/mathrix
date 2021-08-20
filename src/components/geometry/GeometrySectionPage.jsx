import React from "react";
import { Helmet } from "react-helmet-async";

import {capitalizeFirstLetter} from "../../data/utils";
import { GEOMETRY_BG } from "../../data/constants";

function GeometrySectionPage({title}) {

  return (
    <>
      <Helmet>
        <title>{capitalizeFirstLetter(GEOMETRY_BG)}</title>
      </Helmet>
      <h1>{capitalizeFirstLetter(GEOMETRY_BG)}</h1>
      <h2>{title}</h2>
    </>
  );
}

export default GeometrySectionPage;
