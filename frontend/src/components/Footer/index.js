import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="clear-fix mt-3"></div>
      <footer className="container">
        <div className="d-flex justify-content-between align-items-center">
          <p>© 2019–2022 LAV, Inc.</p>
          <p><a href="#header-main"
            style={{ display: 'inline-block' }}>Back to top</a></p>
        </div>
      </footer>
    </>
  )
}
