import React from 'react'
import Web from '../assets/images/web.png'

export default function Header() {
  return (
    <>
        <div class="top-contact">
            <div class="left-cont">
                <img src={ Web } class="top-left-img" />
                <div class="top-left-iip"><a href="http://www.iipacademy.com"
                    title="www.iipacademy.com">www.iipacademy.com </a></div>
            </div>
            <div class="right-cont">
                <img src="images/info.png" class="top-right-img" />
                <div class="top-right-info"><a href="mailto:info@iipacademy.com"
                    title="info@iipacademy.com">info@iipacademy.com</a></div>
            </div>
        </div>
        <div class="menu-container">
            <a href="index.html"><img src="images/logo.png" class="logo"/></a>
            <div class="menu-bar">
                <div class="active-menu-item"><a href="index.html" title="Home">Home</a></div>
                <div class="menu-items" title="About us"><a href="about.html" title="About us">About Us</a></div>
                <div class="menu-items"><a href="course.html">Courses</a></div>
                <div class="menu-items"><a href="gallery.html">Gallery</a></div>
                <div class="menu-items"><a href="enquiry.html">Enquiry</a></div>
                <div class="menu-items"><a href="contact.html">Contact Us</a></div>
            </div>
        </div>
    </>
  )
}
