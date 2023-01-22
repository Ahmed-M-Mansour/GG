import React from "react";
import "../styles/homPage.css";
function Carousal() {
  return (
    <div className="carousel w-full carousal_hieght">
      <div className="carousel-item w-full">
        <img
          className="w-full"
          src="https://www.beekeeper.io/wp-content/uploads/2021/02/Manufacturing-Goals-FI.jpg"
          alt="Burger"
        />
      </div>

      <div className="carousel-item w-full">
        <img
          className="w-full"
          src="https://www.cepal.org/sites/default/files/styles/1280x720/public/images/featured/18_0.jpg?itok=pukJ88_S"
          alt="Burger"
        />
      </div>

      <div className="carousel-item w-full">
        <img
          className="w-full"
          src="https://www.roxtec.com/optimized/share/contentassets/b076b4465fb041b181d278c17e6efde5/roxtec_owners.jpg"
          alt="Burger"
        />
      </div>
    </div>
  );
}
export default Carousal;
