import React, { useState } from 'react'
import wave from './wave.png'
import './Footer.css';
const Footer = () => {
  const [checkHover, setCheckHover] = useState({
    member: "",
    check: false
  });
  const handleHover = e => {
    setCheckHover({
      member: e.target.dataset.member,
      check: true,
    })
  }
  const handleLeave = e => {
    setCheckHover({
      member: "",
      check: false,
    })
  }
  return (
    <footer className="main-footer">
      <div className="z100000 pt-3 pb-3">
        <div className="footer-title"></div>
        <div className="pt-3 pb-3 ul">
          <div className="li"
            data-member={1}
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}>
            {
              checkHover.member === "1" && checkHover.check === true ?
                <div className="member hover-icon">👦 </div> : <div className="member">👦 </div>
            }

            Nguyễn Ngọc Trường
          </div>
          <div className="li"
            data-member={2}
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}>
            {
              checkHover.member === "2" && checkHover.check === true ?
                <div className="member hover-icon">👦 </div> : <div className="member">👦 </div>
            }
            Lê Anh Vũ
          </div>
          <div className="li"
            data-member={3}
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}>
            {
              checkHover.member === "3" && checkHover.check === true ?
                <div className="member hover-icon">👧 </div> : <div className="member">👧 </div>
            }
            Thái Thị Mỹ Tiên
          </div>
          <div className="li"
            data-member={4}
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}>
            {
              checkHover.member === "4" && checkHover.check === true ?
                <div className="member hover-icon">👧 </div> : <div className="member">👧 </div>
            }
            Trần Thị Hoài Trang
          </div>
        </div>
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
