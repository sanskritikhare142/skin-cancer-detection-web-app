import React from "react";
import "../assets/style/herolanding.css";
function HeroLanding() {
  return (
    <>
      <div className="wrapper">
        <div className="carousel-caption">
          <h1 className="display-4 heading1 pb-4">About</h1>
          <p className="py-5 mx-5"style={{ color: "#002234" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="button px-5 py-3 mb-5">Take a test</button>
        </div>
      </div>
    </>
  );
}
export default HeroLanding;
