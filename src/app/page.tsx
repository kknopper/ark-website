import Hero from "./components/hero";
import Services from "./components/services";
import Contact from "./components/contact";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      {/* <Contact /> */}
    </Fragment>
  );
}
