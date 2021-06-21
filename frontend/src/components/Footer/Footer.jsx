import React from 'react'
import wave from './wave.png'
import './Footer.css';
const Footer = () => {
  return (
    <footer className="main-footer">
        <div className="z100000 pt-3 pb-3">
          <div>TEAM MEMBERS</div>
          <ul className="pt-3 pb-3">
            <li>Nguyễn Ngọc Trường</li>
            <li>Lê Anh Vũ</li>
            <li>Thái Thị Mỹ Tiên</li>
            <li>Trần Thị Hoài Trang</li>
          </ul>
        </div>
      <section className="section-wave">

        <div className="wave wave1" style={{ backgroundImage: `url(${wave})` }}></div>
        <div className="wave wave2" style={{ backgroundImage: `url(${wave})` }}></div>
        <div className="wave wave3" style={{ backgroundImage: `url(${wave})` }}></div>
        <div className="wave wave4" style={{ backgroundImage: `url(${wave})` }}></div>
      </section>
    </footer>
  );
}

export default Footer
