import Header from "../components/header/index";
import Banner from "../components/banner/index";
import { Container, Row, Column } from "../components/layout/index";
import Sidebar from "../components/sidebar/index";
import Card from "../components/card/index";

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
                      />
                    </Column>
                  ))}
                </Row>
              </Column>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}
