import React from 'react'
import Timer from './Timer'
import Nav from './Nav'
import './Header.css'
import Typewriter from 'typewriter-effect'
function Header() {
  return (
    <React.Fragment>
      <header style={headerStyle}>
      <div className="container" style={{padding: "20px"}}>
        <div className="d-flex justify-content-between">
          <h1 className="text-center text-light">
            <Typewriter
              onInit={(typewriter) => {

                setInterval(() => {
                  typewriter.typeString("Nhóm 7")
                    .deleteAll()
                    .pauseFor(1000)
                  typewriter.typeString("Project Front End 2")
                    .deleteAll()
                    .pauseFor(1000)
                    .start()
                }, 1500);
              }}
            />
          </h1>
          <Timer />
        </div>
      </div>
      </header>
      <Nav />
    </React.Fragment>
    
  )
}

export default Header
const headerStyle = {"background":"linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(36,188,218,1) 100%)"}