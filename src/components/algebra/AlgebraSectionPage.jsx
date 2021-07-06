import React from "react";
import { Helmet } from "react-helmet-async";
import { ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import {
  getCategories,
  capitalizeFirstLetter,
  getPath,
} from "../../data/utils";
import { ALGEBRA_BG, ALGEBRA } from "../../data/constants";

function AlgebraMainPage() {
  const { sectionId } = useParams();

  console.log(sectionId);

  return (
    <>
      <Helmet>
        <title>{capitalizeFirstLetter(ALGEBRA_BG)}</title>
      </Helmet>
      <h1>{capitalizeFirstLetter(ALGEBRA_BG)}</h1>
      <ListGroup variant="flush">
        {getCategories({ categoryName: ALGEBRA }).map((page) => (
          <ListGroup.Item key={page.id}>
            <Link to={{ pathname: `${getPath(ALGEBRA)}/${page.id}` }}>
              {page.title}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default AlgebraMainPage;
