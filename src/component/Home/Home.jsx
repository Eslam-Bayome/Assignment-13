import React from "react";
import myImg from "../../avataaars.svg";

export default function Home() {
  return (
    <>
      <section id="Home" className="text-white text-center">
        <div className="box ">
          <img src={myImg} alt="somethingwrong" className="w-75" />
          <h3 className="mt-4 fs-1">START FRAMEWORK</h3>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3 "></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3"> </div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
    </>
  );
}
