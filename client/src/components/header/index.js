import React from "react";
import PropTypes from "prop-types";
import TopNav from "./topNav";
import { Container } from "../layout/index";

export default function Header() {
  return (
    <header>
      <Container>
        <TopNav />
      </Container>
    </header>
  );
}

Header.propTypes = {};
