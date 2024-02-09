import React from "react";

export default function About() {
  return (
    <>
      <section id="About">
        <div className="box ">
          <h3 className="mt-4 fs-1">ABOUT COMPONENT</h3>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3 "></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3"> </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
