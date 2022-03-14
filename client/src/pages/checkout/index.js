import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import { Container, Row, Column } from "../../components/layout/index";
import Input from "../../components/input/index";
import { INPUT, SELECT } from "../../contants/index";

const country = [
  { label: "Nepal", value: "NP" },
  {
    label: "America",
    value: "USA",
  },
];

export default function Checkout() {
  return (
    <>
      <Header />
      <main>
        <section className="py-10">
          <Container>
            <Row>
              <Column classes="w-full">
                <h2 className="mb-2">Billing Info</h2>
                <p className="mb-4">Please enter your billing info</p>
              </Column>
              <Column classes="w-7/12">
                <form className="-mx-4 flex flex-wrap">
                  <Input
                    label="First name"
                    elementType={INPUT}
                    type="text"
                    classes="w-6/12 px-4 mb-4"
                    id="first-name"
                  />
                  <Input
                    label="Last Name"
                    elementType={INPUT}
                    type="text"
                    classes="w-6/12 px-4 mb-4"
                    id="last-name"
                  />
                  <Input
                    label="Email Address"
                    elementType={INPUT}
                    type="email"
                    classes="w-6/12 px-4 mb-4"
                    id="email-address"
                  />
                  <Input
                    label="Phone Number"
                    elementType={INPUT}
                    type="tel"
                    classes="w-6/12 px-4 mb-4"
                    id="phone-number"
                  />
                  <Input
                    label="Address"
                    elementType={INPUT}
                    type="text"
                    classes="w-6/12 px-4 mb-4"
                    id="address"
                  />
                  <Input
                    label="Town/City"
                    elementType={INPUT}
                    type="text"
                    classes="w-6/12 px-4 mb-4"
                    id="town-city"
                  />
                  <Input
                    label="State/Country"
                    elementType={SELECT}
                    type="text"
                    classes="w-6/12 px-4 mb-4"
                    id="town-city"
                    options={country}
                  />
                </form>
              </Column>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
