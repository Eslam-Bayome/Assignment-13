import React from "react";
import port1 from "../../poert1.png";
import port2 from "../../port2.png";
import port3 from "../../port3.png";
export default function Portfolio() {
  return (
    <>
      <section id="Portfolio">
        <div className="firstLine ">
          <h2>PORTFOLIO COMPONENT</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3  "></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3"> </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-md-4  ">
              <div className="img-container position-relative ">
                <img src={port1} alt="" className="w-100 rounded-2" />
                <div className="overlay">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="img-container position-relative">
                <img src={port2} alt="" className="w-100 rounded-2" />
                <div className="overlay">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="img-container position-relative ">
                <img src={port3} alt="" className="w-100 rounded-2" />
                <div className="overlay">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4  ">
              <div className="img-container position-relative ">
                <img src={port1} alt="" className="w-100 rounded-2" />
                <div className="overlay">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="img-container position-relative">
                <img src={port2} alt="" className="w-100 rounded-2" />
                <div className="overlay">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="img-container position-relative ">
                <img src={port3} alt="" className="w-100 rounded-2" />
                <div className="overlay">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
