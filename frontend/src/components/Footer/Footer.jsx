import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <div id="footer-wrapper">
      <footer id="footer">

        <nav id="footer-menu">
          <ul id="menu-footer-menu" className="clearfix">
            <li id="menu-item-238"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-238">
              <a href="http://elegantia.inspirydemos.com/" aria-current="page">Home</a>
            </li>
            <li id="menu-item-237"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-237"><a
                href="http://elegantia.inspirydemos.com/blog/">MyRecipe</a></li>
            <li id="menu-item-253"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-253"><a
                href="http://elegantia.inspirydemos.com/our-team/">Add Recipe Food</a></li>
          </ul>
        </nav>

        <ul className="social-nav">
          <li className="twitter"><a target="_blank" href="#"></a></li>
          <li className="facebook"><a target="_blank" href="#"></a></li>
          <li className="pinterest"><a target="_blank" href="#"></a></li>
          <li className="vk"><a target="_blank" href="#"></a></li>
          <li className="instgram"><a target="_blank" href="#"></a></li>
          <li className="yahoo"><a target="_blank" href="#"></a></li>
          <li className="mail"><a target="_blank" href="#"></a></li>
          <li className="in"><a target="_blank" href="#"></a></li>
          <li className="rss"><a target="_blank" href="#"></a></li>
        </ul>

        <address>12300 Las Angeles Main Blvd, Las Angeles, AV 123456 - 123.456.7890</address>
        <p className="copyright">Copyright © 2012 Elegantia Restaurant &amp; Bar. All rights reserved.</p>

      </footer>
    </div>
  )
}

export default Footer
