import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="text-white ">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <div className="text text-center">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icons">
                <h3>AROUND THE WEB</h3>
                <div className="iconContainer d-flex ">
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-solid fa-globe"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="freelance text-center">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="last text-center py-2">
          <p>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
