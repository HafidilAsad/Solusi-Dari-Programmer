import { Image } from "./image";
import React from "react";
import { Helmet } from "react-helmet";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <Helmet>
        <title>{props.data ? props.data.title : "PT SOLUSI DARI PROGRAMMER"}</title>
        <meta
          name="description"
          content={
            props.data
              ? props.data.description
              : "PT SOLUSI DARI PROGRAMMER"

          }
        />
        <meta
          name="keywords"
          content="IoT, Robotics, AI, Machine Learning, Web Development, Integration System, Automation, PLCs, CCTV, Web Security, Firewall, Sistem Integrasi, Building Management System, Management Energy, interlock System, Gas, Electricity, AGV, AMR, SPM"
        />
      </Helmet>
      <div className="container">
        <div className="section-title">
          <h2>Experience</h2>
          <p>
            Our Project Experience
          </p>
        </div>
        <div className="row">
            {props.data
              ? props.data.map((item, index) => (
                  <div
                    key={index}
                    className="col-lg-4 col-md-4 col-sm-6 col-xs-12 "
                  >
                    <div className="card shadow-sm">
                      <img
                        src={item.smallImage}
                        alt={item.title}
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
   
      </div>
    </div>
  );
};
