import { Image } from "./image";
import React, { useState } from "react";
import { Helmet } from "react-helmet";

export const Gallery = (props) => {
  // State untuk mengontrol modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fungsi untuk membuka modal
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

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
          <p>Our Project Experience</p>
        </div>
        
        <div className="row">
          {props.data
            ? props.data.map((item, index) => (
                <div
                  key={index}
                  className="col-lg-4 col-md-4 col-sm-6 col-xs-12"
                >
                  <div 
                    className="card shadow-sm gallery-card"
                    onClick={() => openModal(item)}
                    style={{ cursor: 'pointer' }}
                  >
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

      {/* Modal untuk menampilkan card yang diperbesar */}
      {isModalOpen && selectedItem && (
        <div 
          className="modal-overlay"
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
          }}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup ketika mengklik konten
            style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              overflow: 'hidden',
              maxWidth: '80%',
              maxHeight: '80%',
              position: 'relative',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Tombol Close */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                background: 'rgba(255, 0, 0, 1)',
                color: 'white',
                border: 'none',
                borderRadius: '20%',
                width: '30px',
                height: '30px',
                fontSize: '18px',
                cursor: 'pointer',
                zIndex: 10000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ×
            </button>
            
            {/* Konten Card yang Diperbesar */}
            <div className="enlarged-card">
              <img
                src={selectedItem.largeImage || selectedItem.smallImage}
                alt={selectedItem.title}
                style={{
                  width: '100%',
                  maxHeight: '400px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '20px' }}>
                <h3 style={{ marginBottom: '15px', color: '#333' }}>
                  {selectedItem.title}
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  lineHeight: '1.6', 
                  color: '#666',
                  textAlign: 'left' 
                }}>
                  {selectedItem.description}
                </p>
                {/* Tambahan informasi jika tersedia */}
                {selectedItem.details && (
                  <div style={{ marginTop: '15px' }}>
                    <h5 style={{ color: '#333' }}>Detail:</h5>
                    <p style={{ 
                      fontSize: '14px', 
                      color: '#777',
                      textAlign: 'left' 
                    }}>
                      {selectedItem.details}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .gallery-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
        }
        
        .modal-overlay {
          animation: fadeIn 0.3s ease-out;
        }
        
        .modal-content {
          animation: slideIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideIn {
          from {
            transform: scale(0.7);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};