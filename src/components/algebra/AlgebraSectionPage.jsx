import React from "react";
import { Helmet } from "react-helmet-async";

import {capitalizeFirstLetter} from "../../data/utils";
import { ALGEBRA_BG } from "../../data/constants";

function AlgebraSectionPage({title}) {
  return (
    <>
      <Helmet>
        <title>{capitalizeFirstLetter(ALGEBRA_BG)}</title>
      </Helmet>
      <h1>{capitalizeFirstLetter(ALGEBRA_BG)}</h1>
      <h2>{title}</h2>
    </>
  );
}

export default AlgebraSectionPage;
