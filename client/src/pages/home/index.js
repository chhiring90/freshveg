import Header from "../../components/header/index";
import Banner from "../../components/banner/index";
import { Container, Row, Column } from "../../components/layout/index";
import { BlogTwo, Profile, BlogOne, Veggie } from "../../assets/images";
import Sidebar from "../../components/sidebar/index";
import Card from "../../components/card/index";
import Button from "../../components/button/index";
import Testimonial from "../../components/testimonial/index";
import Footer from "../../components/footer/index";

import { srcToAlt } from "../../helper/index";

const categories = [
  { label: "Bakery" },
  { label: "Fruit And Vegeables" },
  { label: "Meat and Fish" },
  { label: "Drinks" },
  { label: "Kitchen" },
  { label: "Special Nutrition" },
  { label: "Baby" },
  { label: "Pharmacy" },
];

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <section className="py-10">
          <Container>
            <Row>
              <Column classes="w-3/12">
                <Sidebar
                  title="Best Selling Products"
                  menu={categories.slice(2, 7)}
                  btnChildren="More Products"
                />
              </Column>
              <Column classes="w-9/12">
                <Row>
                  {[...new Array(3)].map((_, idx) => (
                    <Column key={idx} classes="w-4/12">
                      <Card
                        title="Product Title"
                        desc="lorem ipsum cake cup denish biscuits italic pizza and pasta"
                        price="300"
                        discount="34%"
                      />
                    </Column>
                  ))}
                </Row>
              </Column>
            </Row>
          </Container>
        </section>
        <section className="py-10">
          <Container>
            <Row>
              <Column classes="w-3/12">
                <Sidebar
                  title="Best From Farmers"
                  menu={categories.slice(1, 6)}
                  btnChildren="More Products"
                />
              </Column>
              <Column classes="w-9/12">
                <Row>
                  {[...new Array(3)].map((_, idx) => (
                    <Column key={idx} classes="w-4/12">
                      <Card
                        title="Product Title"
                        desc="lorem ipsum cake cup denish biscuits italic pizza and pasta"
                        price="300"
                        discount="24%"
                      />
                    </Column>
                  ))}
                </Row>
              </Column>
            </Row>
          </Container>
        </section>
        <section className="py-10">
          <Container>
            <div className="flex">
              <h2 className="mb-8">Our Customer Says</h2>
            </div>
            <Testimonial />
          </Container>
        </section>
        <section className="py-10">
          <Container>
            <div className="flex">
              <h2 className="mb-8">Week's Popular</h2>
            </div>
            <Row>
              {[...new Array(4)].map((_, idx) => (
                <Column key={idx} classes="w-3/12">
                  <Card
                    title="Product Title"
                    desc="lorem ipsum cake cup denish biscuits italic pizza and pasta"
                    price="300"
                    discount="24%"
                  />
                </Column>
              ))}
            </Row>
          </Container>
        </section>
        <section className="py-10">
          <Container>
            <div className="flex">
              <h2 className="mb-8">Read Our Blog Posts</h2>
            </div>
            <Row>
              <Column classes="w-6/12">
                <article
                  className="bg-cover flex flex-wrap bg-center rounded-lg min-h-[500px] relative"
                  style={{
                    backgroundImage: `url(${BlogTwo})`,
                  }}
                >
                  <span className="absolute font-mono bg-emerald-600/70 tracking-wide px-2 py-1 rounded-lg text-white left-8 top-8">
                    Dinner tips
                  </span>
                  <div className="mt-auto text-white py-8 px-8 bg-gradient-to-tl from-emerald-300/50 to-emerald-800/50 rounded-b-lg">
                    <h3 className="mb-4">
                      Candy canes macaroon cake sesame snaps tiramisu tart
                      carrot cake donut
                    </h3>
                    <figure className="flex items-center font-semibold tracking-widest">
                      <img
                        className="w-12 h-12 mr-4 object-cover object-center rounded-full"
                        src={Profile}
                        alt={srcToAlt(Profile)}
                      />
                      <figcaption className="mx-4">Author</figcaption>
                      <span className="mx-4">3.8.2022</span>
                    </figure>
                  </div>
                </article>
              </Column>
              <Column classes="w-6/12">
                <Row>
                  <Column classes="w-6/12">
                    <article>
                      <figure className="overflow-hidden rounded-lg mb-4">
                        <img
                          className="h-60 object-cover object-center w-full"
                          src={BlogOne}
                          alt={srcToAlt(BlogOne)}
                        />
                      </figure>
                      <div>
                        <span className="font-mono bg-emerald-600/70 tracking-wide px-2 py-1 rounded-lg text-white mb-4 inline-block">
                          Vegeables
                        </span>
                        <h4 className="mb-4">
                          Powder chocolate bar icing dessert drag??e apple pie
                          donut chocolate cake
                        </h4>
                      </div>
                      <footer className="flex font-semibold tracking-widest flex-wrap">
                        <h5>Author</h5>
                        <span className="mx-4">3.8.2022</span>
                      </footer>
                    </article>
                  </Column>
                  <Column classes="w-6/12">
                    {[...new Array(3)].map((_, idx) => (
                      <article key={idx} className="flex flex-wrap mb-8">
                        <div className="w-8/12 flex flex-wrap">
                          <h4 className="text-base">
                            Marshmallow toffee jelly beans dessert fruitcake .
                          </h4>
                          <h5>Author</h5>
                          <span className="mx-4 font-semibold">3.8.2022</span>
                        </div>
                        <figure className="w-28 h-28 overflow-hidden rounded-lg">
                          <img
                            className="object-center object-cover"
                            src={Veggie}
                            alt={srcToAlt(Veggie)}
                          />
                        </figure>
                      </article>
                    ))}
                  </Column>
                </Row>
              </Column>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
