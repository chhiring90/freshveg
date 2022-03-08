import { Container, Row, Column } from "../layout/index";
import FooterNav from "./footerNav";

const getInTouch = [
  { label: "About Us" },
  { label: "Careers" },
  { label: "Press Release" },
  { label: "Blog" },
];

const connections = [
  { label: "Facebook" },
  { label: "Instagram" },
  { label: "Twitter" },
  { label: "Linkedin" },
];

const earnings = [
  { label: "Become an Affillate" },
  { label: "Advertise your product" },
  { label: "Sell on Market" },
];

const accounts = [
  { label: "Your Account" },
  { label: "Returns Center" },
  { label: "100% purchase protection" },
  { label: "Chat with us" },
  { label: "Help" },
];

export default function Footer() {
  return (
    <footer className="py-10">
      <Container>
        <Row>
          <Column classes="w-3/12">
            <FooterNav title="Get In Touch" menu={getInTouch} />
          </Column>
          <Column classes="w-3/12">
            <FooterNav title="Connections" menu={connections} />
          </Column>
          <Column classes="w-3/12">
            <FooterNav title="Earnings" menu={earnings} />
          </Column>
          <Column classes="w-3/12">
            <FooterNav title="Accounts" menu={accounts} />
          </Column>
        </Row>
        <Row>
          <Column classes="pt-6 w-full">
            <p>
              Design Inspired By petrbilek.com, Developed By Chhiring Tamang
              &copy; {new Date().getFullYear()}
            </p>
          </Column>
        </Row>
      </Container>
    </footer>
  );
}
