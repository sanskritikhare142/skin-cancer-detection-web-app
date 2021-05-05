import { navigate } from "@reach/router";
import React from "react";
import "../assets/style/herolanding.css";
function HeroLanding() {
  return (
    <>
      <div className="row" style={{ paddingTop: "200px" }}>
        <div className="col">
          <div className="container d-flex align-items-center">
            <div className="col">
              <div className="text-center">
                <h1 className="display-4 heading1 pb-4">
                  Empowering you to maintain your skin health. An approach to
                  detecting Skin cancer 
                </h1>
                <p
                  className="py-5 mx-5"
                  style={{ color: "#002234", fontSize: "20px" }}
                >
                  The best protection is early detection. Spot the cancer you
                  can see when it is the easiest to treat.The world’s most
                  common cancer is a relentless disease that strikes one in five
                  people by age 70. But in order to stop skin cancer, we have to
                  spot it on time. That’s why skin exams, both at home and with
                  a dermatologist, are especially vital. We aim to focus on
                  providing care to potential patients and enhancing the general
                  welfare of millions of people around the world.
                </p>
                <button
                  className="button px-5 py-3 mb-5"
                  onClick={() => navigate("/test")}
                >
                  Take a test
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroLanding;
