import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Switch, Route, Redirect } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import AlgebraMainPage from "./algebra/AlgebraMainPage";
import AlgebraSectionPage from "./algebra/AlgebraSectionPage";
import GeometryMainPage from "./geometry/GeometryMainPage";
import GeometrySectionPage from "./geometry/GeometrySectionPage";
import { capitalizeFirstLetter, getPath, getSectionTitle } from "../data/utils";
import { ALGEBRA_BG, GEOMETRY_BG, ALGEBRA, GEOMETRY } from "../data/constants";

const App = () => (
  <Container className="bg-white h-100">
    <Nav>
      <LinkContainer to={getPath(ALGEBRA)}>
        <Nav.Link>{capitalizeFirstLetter(ALGEBRA_BG)}</Nav.Link>
      </LinkContainer>
      <LinkContainer to={getPath(GEOMETRY)}>
        <Nav.Link>{capitalizeFirstLetter(GEOMETRY_BG)}</Nav.Link>
      </LinkContainer>
    </Nav>
    <HelmetProvider>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to={getPath(ALGEBRA)} />}
        />
        <Route
          path={`${getPath(ALGEBRA)}/:sectionId`}
          render={({match: {params: {sectionId}}}) => <AlgebraSectionPage title={getSectionTitle({categoryName: ALGEBRA, sectionId})}/>}
        />
        <Route
          path={`${getPath(GEOMETRY)}/:sectionId`}
          render={({match: {params: {sectionId}}}) => <GeometrySectionPage title={getSectionTitle({categoryName: GEOMETRY, sectionId})}/>}
        />
        <Route path={getPath(ALGEBRA)} component={AlgebraMainPage} />
        <Route path={getPath(GEOMETRY)} component={GeometryMainPage} />
      </Switch>
    </HelmetProvider>
  </Container>
);

export default App;
