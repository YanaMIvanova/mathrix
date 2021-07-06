import React from "react";
import { Helmet } from "react-helmet-async";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  getCategories,
  capitalizeFirstLetter,
  getPath,
} from "../../data/utils";
import { GEOMETRY, GEOMETRY_BG } from "../../data/constants";

function GeometryMainPage() {
  return (
    <>
      <Helmet>
        <title>{capitalizeFirstLetter(GEOMETRY_BG)}</title>
      </Helmet>
      <h1>{capitalizeFirstLetter(GEOMETRY_BG)}</h1>
      <ListGroup variant="flush">
        {getCategories({ categoryName: GEOMETRY }).map((page) => (
          <ListGroup.Item key={page.id}>
            <Link
              to={{
                pathname: `${getPath(GEOMETRY)}/${page.id}`,
              }}
            >
              {page.title}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default GeometryMainPage;
