import React from "react";
import { ViewGridIcon, ViewListIcon } from "@heroicons/react/outline";

import { Container, Row, Column } from "../components/layout/index";
import Chip from "../components/chip/index";
import Header from "../components/header/index";
import Footer from "../components/footer/index";

export default function Product() {
  return (
    <>
      <Header />
      <main>
        <section className="py-10">
          <Container>
            <Row classes="items-center">
              <Column classes="w-1/2">
                <h1 className="mb-5">Fruit And Vegetables</h1>
              </Column>
              <Column classes="w-1/2 justify-end flex items-center">
                <button className="px-2 py-1 hover:text-emerald-600 transition-colors">
                  <ViewGridIcon className="w-5 h-5 inline-block mr-2" />
                  Grid View
                </button>
                <button className="px-2 py-1 hover:text-emerald-600 transition-colors">
                  <ViewListIcon className="w-5 h-5 inline-block mr-2" />
                  List View
                </button>
                <Chip classes="text-sm mx-2">117</Chip> Products
              </Column>
              <Column>
                <div className="flex">
                  <div className="flex items-center px-2">
                    <input type="radio" id="filter-one" name="filter" />
                    <label className="ml-2" htmlFor="filter-one">
                      Filter Text
                    </label>
                  </div>
                  <div className="flex items-center px-2">
                    <input type="radio" id="filter-two" name="filter" />
                    <label htmlFor="filter-two" className="ml-2">
                      Filter Text
                    </label>
                  </div>
                  <div className="flex items-center px-2">
                    <input type="checkbox" id="check-one" name="check-one" />
                    <label htmlFor="check-one" className="ml-2">
                      Check one
                    </label>
                  </div>
                  <div className="flex items-center px-2">
                    <input type="checkbox" id="check-two" name="check-two" />
                    <label htmlFor="check-two" className="ml-2">
                      Check Two
                    </label>
                  </div>
                </div>
              </Column>
            </Row>
            <Row></Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
