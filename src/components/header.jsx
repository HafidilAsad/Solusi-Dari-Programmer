import React from "react";
import { Helmet } from "react-helmet";

export const Header = (props) => {
  return (
    <header id="header">
       <Helmet>
        <title>{props.data ? props.data.title : "PT SOLUSI DARI PROGRAMMER"}</title>
        <meta
          name="description"
          content={
            props.data
              ? props.data.paragraph
              : "We specialize in IoT, Robotics, AI, Machine Learning, Web Development, Integration System, and Automation. Let us help you optimize operations, automate processes, and unlock new opportunities for growth."
          }
        />
        <meta
          name="keywords"
          content="IoT, Robotics, AI, Machine Learning, Web Development"
        />
      </Helmet>
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text d-none ">
                <h2>
                  {/* {props.data ? props.data.title : "Loading"} */}
                  <span></span>
                </h2>
                <p style={{ color: "transparent" }}>Mewujudkan Solusi Cerdas untuk Masa Depan Bisnis Anda</p>
                <p className="" style={{ color: "transparent" }}>{props.data ? props.data.paragraph : "Loading"}</p>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
