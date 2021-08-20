import React from "react";
import { Helmet } from "react-helmet-async";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  getCategories,
  capitalizeFirstLetter,
  getPath,
} from "../data/utils";

function MainPage({categoryBulgarianName, categoryName}) {
  return (
    <>
      <Helmet>
        <title>{capitalizeFirstLetter(categoryBulgarianName)}</title>
      </Helmet>
      <h1>{capitalizeFirstLetter(categoryBulgarianName)}</h1>
      <ListGroup variant="flush">
        {getCategories({ categoryName }).map((page) => (
          <ListGroup.Item key={page.id}>
            <Link to={{ pathname: `${getPath(categoryName)}/${page.id}` }}>
              {page.title}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default MainPage;
