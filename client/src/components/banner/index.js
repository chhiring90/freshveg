import PropTypes from "prop-types";

import BannerSlide from "./bannerSlide";
import Sidebar from "../sidebar/index";
import { Row, Column, Container } from "../layout/index";

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

export default function Banner() {
  return (
    <section className="py-10">
      <Container>
        <Row>
          <Column classes="w-3/12">
            <Sidebar
              btnChildren="More Categories"
              title="Category menu"
              menu={categories.slice(0, 5)}
            />
          </Column>
          <Column classes="w-9/12">
            <Row>
              <Column classes="w-6/12">
                <BannerSlide />
              </Column>
              <Column classes="w-6/12">
                <BannerSlide />
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
    </section>
  );
}

Banner.propTypes = {};
