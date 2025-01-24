import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h2>ติดต่อเรา</h2>
      <div className="contact-info">
        <div className="contact-item">
          <img 
            src="https://via.placeholder.com/50" 
            alt="Location Icon" 
            className="contact-icon" 
          />
          <h3>ที่อยู่</h3>
          <p>วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่</p>
        </div>
        <div className="contact-item">
          <img 
            src="https://via.placeholder.com/50" 
            alt="Phone Icon" 
            className="contact-icon" 
          />
          <h3>เบอร์โทรศัพท์</h3>
          <p>053 213 061</p>
        </div>
        <div className="contact-item">
          <img 
            src="https://via.placeholder.com/50" 
            alt="Email Icon" 
            className="contact-icon" 
          />
          <h3>อีเมล</h3>
          <p>lannapoly@lannapoly.ac.th</p>
        </div>
        <div className="contact-item">
          <img 
            src="https://qr-official.line.me/gs/M_665smktc_GW.png" 
            alt="QR Code" 
            className="contact-icon" 
          />
          <h3>QR Code</h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;
