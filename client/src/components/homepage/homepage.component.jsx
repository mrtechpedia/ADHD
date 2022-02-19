import React from "react";
import Navbarr from "../navbar/navbar.component";
import Hero from "../hero/hero.component";
import Footer from "../footer/footer.component";
import CardRow from "../cardrow/cardrow.component";
import { useLocation } from "react-router-dom";

function Homepage() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbarr />
      <Hero />
      <CardRow email={location.state} />
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default Homepage;
