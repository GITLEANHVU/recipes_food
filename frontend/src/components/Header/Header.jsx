import React from 'react'
import Timer from './Timer'
import Nav from './Nav'
import './Header.css'
import Typewriter from 'typewriter-effect'
function Header() {
  return (
    <header>
      <div className="container" style={{padding: "20px"}}>
        <div className="d-flex justify-content-between">
          <h1 className="text-center text-danger flex-first">
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
      <Nav />
    </header>
  )
}

export default Header
