import React from "react";

export default function Contact() {
  return (
    <>
      <section id="Contact">
        <div className="firstLine ">
          <h2>CONATCT SECTION</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3  "></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3"> </div>
          </div>
        </div>
        <div className="container">
          <form action="">
            <input
              type="text"
              placeholder="userName"
              name=""
              id=""
              className="form-control"
            />
            <input
              type="number"
              placeholder="userAge"
              name=""
              id=""
              className="form-control"
            />
            <input
              type="email"
              placeholder="userEmail"
              name=""
              id=""
              className="form-control"
            />
            <input
              type="password"
              placeholder="userPassword"
              name=""
              id=""
              className="form-control"
            />
            <button className="btn btn-success ">Send Massage</button>
          </form>
        </div>
      </section>
    </>
  );
}
