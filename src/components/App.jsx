import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Switch, Route, Redirect } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import SectionPage from "./SectionPage";
import MainPage from "./MainPage";
import { capitalizeFirstLetter, getPath, getSectionTitle } from "../data/utils";
import { ALGEBRA_BG, GEOMETRY_BG, ALGEBRA, GEOMETRY } from "../data/constants";

const App = () => (
  <Container className="bg-white h-100">
    <Nav>
      <LinkContainer to={getPath(ALGEBRA)} className="link">
        <Nav.Link>{capitalizeFirstLetter(ALGEBRA_BG)}</Nav.Link>
      </LinkContainer>
      <LinkContainer to={getPath(GEOMETRY)} className="link">
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
          render={({match: {params: {sectionId}}}) => <SectionPage categoryName={ALGEBRA_BG} sectionTitle={getSectionTitle({categoryName: ALGEBRA, sectionId})}/>}
        />
        <Route
          path={`${getPath(GEOMETRY)}/:sectionId`}
          render={({match: {params: {sectionId}}}) => <SectionPage categoryName={GEOMETRY_BG} sectionTitle={getSectionTitle({categoryName: GEOMETRY, sectionId})}/>}
        />
        <Route path={getPath(ALGEBRA)} render={() => <MainPage categoryBulgarianName={ALGEBRA_BG} categoryName={ALGEBRA} />} />
        <Route path={getPath(GEOMETRY)} render={() => <MainPage categoryBulgarianName={GEOMETRY_BG} categoryName={GEOMETRY} />} />
      </Switch>
    </HelmetProvider>
  </Container>
);

export default App;
