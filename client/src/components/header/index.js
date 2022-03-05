import React from "react";
import PropTypes from "prop-types";
import { UserIcon, ShoppingBagIcon } from "@heroicons/react/outline";

import TopNav from "./topNav";
import SearchFrom from "./searchFrom";
import Brand from "./brand";
import { Container, Row, Column } from "../layout/index";

export default function Header() {
  return (
    <header>
      <Container>
        <TopNav />
        <Row classes="items-center">
          <Column classes="w-4/12">
            <Brand />
          </Column>
          <Column classes="w-4/12">
            <SearchFrom />
          </Column>
          <Column classes="w-4/12 flex justify-end">
            <button type="button" className="p-3">
              <UserIcon className="w-5 h-5" />
            </button>
            <button type="button" className="p-3">
              <ShoppingBagIcon className="w-5 h-5" />
            </button>
          </Column>
        </Row>
      </Container>
    </header>
  );
}

Header.propTypes = {};
