import React from "react";
import { ViewGridIcon, ViewListIcon, StarIcon } from "@heroicons/react/outline";

import { Container, Row, Column } from "../components/layout/index";
import Chip from "../components/chip/index";
import Header from "../components/header/index";
import Footer from "../components/footer/index";
import Button from "../components/button/index";
import Card from "../components/card";
import Pagination from "../components/pagination/index";

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
              <Column classes="w-full">
                <div className="flex py-2 font-semibold tracking-wide">
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
              <Column classes="flex w-full py-4 items-center">
                <h6>Applied Filters:</h6>
                <ul className="flex ml-4">
                  {[...new Array(4)].map((_, idx) => (
                    <li key={idx} className="pr-2">
                      <Chip
                        clicked={() => console.log("clicked")}
                        classes="text-sm"
                        size="sm"
                      >
                        Selected Filter
                      </Chip>
                    </li>
                  ))}
                </ul>
              </Column>
            </Row>
            <Row>
              <Column classes="w-3/12">
                <aside>
                  <h4 className="mb-3">Categories</h4>
                  <div className="mb-4">
                    <ul className="font-semibold">
                      {[...new Array(4)].map((_, idx) => (
                        <li key={idx} className="mb-2 flex items-center">
                          Category name
                          <Chip classes="ml-auto font-normal text-sm" size="sm">
                            {Math.floor(Math.random() * 300 + 1)}
                          </Chip>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="mb-3">Brands</h4>
                    <ul className="font-semibold">
                      {[...new Array(4)].map((_, idx) => (
                        <li key={idx} className="mb-2 flex items-center">
                          <input
                            type="checkbox"
                            name={`filter-one`}
                            id={`filter-${idx}`}
                          />
                          <label htmlFor={`filter-${idx}`} className="ml-3">
                            Filter By Brand Item
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="mb-3">Ratings</h4>
                    <ul className="font-semibold">
                      {[...new Array(5)].map((_, idx) => (
                        <li key={idx} className="mb-2 flex items-center">
                          <input type="checkbox" id={`filter-f-${idx}`} />
                          <label htmlFor={`filter-f-${idx}`} className="ml-3">
                            {[...new Array(5)].map((_, idx) => (
                              <StarIcon
                                key={idx}
                                className={
                                  "w-4 h-4 text-slate-400 inline m-0.5"
                                }
                              />
                            ))}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="mb-3">Price</h4>
                    <input mix="100" min="10" type="range" />
                    <div className="flex w-full space-between">
                      <Button type="primary">Apply</Button>
                      <Button type="secondary">Reset</Button>
                    </div>
                  </div>
                </aside>
              </Column>
              <Column classes="w-9/12">
                <Row>
                  {[...new Array(9)].map((_, idx) => (
                    <Column key={idx} classes="mb-8 w-4/12">
                      <Card
                        title="Product Title"
                        desc="Lorem ipsum cup cake danish lasania"
                        price="400"
                        discount="24%"
                      />
                    </Column>
                  ))}
                </Row>
              </Column>
            </Row>
            <Pagination />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
