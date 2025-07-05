import React from "react";
import { Helmet } from "react-helmet";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <Helmet>
        <title>{props.data ? props.data.title : "PT SOLUSI DARI PROGRAMMER"}</title>
        <meta
          name="description"
          content={
            
            props.data
              ? props.data
              : "Loading..."
          }
        />
        <meta
          name="keywords"
          content="IoT, Robotics, AI, Machine Learning, Web Development, Integration System, Automation, PLCs, CCTV, Web Security, Firewall, Sistem Integrasi, Building Management System"
        />
      </Helmet>
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
           Our Focus Services
          </p>
        </div>
        <div className="row">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4 text-center mb-4">
                <img
                  src={d.icon}
                  alt={d.name}
                  className="img-fluid mb-3"
                  style={{
                      maxHeight: "100px",
                      objectFit: "contain",
                      border: "2px solid #ccc", 
                      borderRadius: "8px",      
                      padding: "4px"            
                    }}
                  />
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </div>
  );
};
