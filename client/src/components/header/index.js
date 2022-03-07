import React from "react";
import PropTypes from "prop-types";
import { UserIcon, ShoppingBagIcon } from "@heroicons/react/outline";

import TopNav from "./topNav";
import SearchFrom from "./searchFrom";
import Brand from "./brand";
import Nav from "../nav/index";
import { Container, Row, Column } from "../layout/index";

export default function Header() {
  return (
    <header>
      <Container>
        <TopNav />
        <Row classes="items-center py-4">
          <Column classes="w-3/12">
            <Brand />
          </Column>
          <Column classes="w-6/12">
            <SearchFrom />
          </Column>
          <Column classes="w-3/12 flex justify-end">
            <button type="button" className="p-3">
              <UserIcon className="w-5 h-5" />
            </button>
            <button type="button" className="p-3">
              <ShoppingBagIcon className="w-5 h-5" />
            </button>
          </Column>
        </Row>
        <Nav />
      </Container>
    </header>
  );
}

Header.propTypes = {};
