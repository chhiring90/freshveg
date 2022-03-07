import PropTypes from "prop-types";

import Button from "../button/index";
import { BannerSM } from "../../assets/images";

export default function BannerSlide({ title, subTitle }) {
  return (
    <div
      className="rounded-lg overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${BannerSM})`,
      }}
    >
      <article className="flex flex-wrap py-16 px-10 min-h-[350px] w-full bg-gray-300 bg-opacity-40">
        <header className="w-full pb-6">
          <h1 className="mb-auto font-serif font-bold">
            <small className="text-sm uppercase block tracking-wider font-sans">
              Banner Subheading
            </small>
            Space for Heading
          </h1>
        </header>
        <footer className="w-full mt-auto">
          <Button type="primary">Read Recipies</Button>
        </footer>
      </article>
    </div>
  );
}

BannerSlide.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
