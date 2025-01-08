import React, { useState } from 'react'
import Web from '../assets/images/web.png'

export default function Header() {

    var email = 'info@iipacademyy.com';
    var status = true;

    var [count, setCount] = useState(15);

    const minus = () => {
        count--;
        setCount(count);
        console.log(count);
    }

    const plus = () => {
        count++;
        setCount(count);
        console.log(count);
    }


  return (
    <>
        <div style={{ textAlign : 'center', padding : '15px 0px' }}>
            
            <button style={{ marginRight: '15px', padding : '15px' }} onClick={ minus }>-</button> 

            { count }
            
            <button style={{ marginLeft: '15px', padding : '15px' }} onClick={ plus }>+</button>
        </div>

        { 
                (status) 
            ? 
                <div class="top-contact">
                    <div class="left-cont">
                        <img src={ Web } class="top-left-img" />
                        <div class="top-left-iip"><a href="http://www.iipacademy.com"
                            title="www.iipacademy.com">www.iipacademy.com </a></div>
                    </div>
                    <div class="right-cont">
                        <img src="images/info.png" class="top-right-img" />
                        <div class="top-right-info"><a href={ email }
                            title={ email }>{ email }</a></div>
                    </div>
                </div>
            : 
            '' 
        }


        
        <div class="menu-container" style={{ display : `${ (!status) ? '' : 'none'  }`  }}>
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
