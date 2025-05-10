import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export const Header = (props) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
      <div className="intro" style={{ position: 'relative' }}>

        {/* Tanggal dan waktu*/}
      <div className="date-time-container">
        <div className="date">{currentTime.getDate()}</div>
        <div className="month-year">
          {currentTime.toLocaleString("en-GB", {
            month: "short",
            year: "numeric",
          })}
        </div>
        <div className="time">
          {currentTime.toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}{" "}
          Wib
        </div>
      </div>


        {/* Overlay */}
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text d-none col-sm-offset-0">
                <h2><span></span></h2>
                <p style={{ color: "transparent" }}>Mewujudkan Solusi Cerdas untuk Masa Depan Bisnis Anda</p>
                <p className="" style={{ color: "transparent" }}>
                  {props.data ? props.data.paragraph : "Loading"}
                </p>

                {/*YOUR PARTNER IN MODERN TECHNOLOGY AND AUTOMATION*/}
                <div
                  className="partner-text"
                >
                  "YOUR PARTNER IN MODERN TECHNOLOGY AND AUTOMATION"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
