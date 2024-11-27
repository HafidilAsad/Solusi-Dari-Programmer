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
          <h2>Gallery</h2>
          <p>
            Our Project Experience
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
