import React from 'react'
import Web from '../assets/images/web.png'
import Header from './Header'

export default function Home() {

    var status = true;

    return (
        <>
            <div class="main">

                {
                    status
                    ?
                    <Header/>
                    :
                    ''
                }
                
                {/* <!-- middle portion with  links, new , banner and course starts here --> */}
                <div class="middle-container con-height">
                    {/* <!-- left part of the middle portion starts here --> */}
                    <div class="middle-left">
                        <div class="menu-item-left"><a href="index.html">Home</a></div>
                        <div class="menu-item-left"><a href="about.html">About Us</a></div>
                        <div class="menu-item-left"><a href="course.html">Courses</a></div>
                        <div class="menu-item-left"><a href="gallery.html">Gallery</a></div>
                        <div class="menu-item-left"><a href="enquiry.html">Enquiry</a></div>
                        <div class="menu-item-left"><a href="contact.html">Contact Us</a></div>
                        <div class="middle-left-buttom">
                            <div class="middle-left-buttom-news">
                                News
                            </div>
                            <ul class="news-list">
                                <li><img src="images/dot.jpg"/> ipsum dolor sit amet, </li>
                                <li><img src="images/dot.jpg"/> ipsum dolor sit amet, </li>
                                <li><img src="images/dot.jpg"/> ipsum dolor sit amet, </li>
                                <li><img src="images/dot.jpg"/> ipsum dolor sit amet, </li>
                                <li><img src="images/dot.jpg"/> ipsum dolor sit amet, </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- left part of the middle portion ends here --> */}
                    {/* <!-- right part of the middle portion starts here --> */}
                    <div class="middle-right">
                        <div>
                            <img src="images/banners.png" class="banner-img" />
                            {/* <!-- banner images here --> */}
                        </div>
                        <div class="course-conatiner">
                            <div class="course-text">
                                Courses
                            </div>
                            <div class="course-box">
                                <div class="course-box-left">
                                    <div class="icon">
                                        <img src="images/courses/php.png" title="PHP" />
                                        <h3>PHP (Website Development) </h3>
                                    </div>
                                    <div class="icon adv-php">
                                        <img src="images/courses/adv-php.png" title="Advance PHP" />
                                        <h3>Advance PHP</h3>
                                    </div>
                                    <div class="icon py">
                                        <img src="images/courses/python.png" title="Python" />
                                        <h3>Python</h3>
                                    </div>
                                    <div class="icon android">
                                        <img src="images/courses/Android.png" title="Android" />
                                        <h3>Android App Development</h3>
                                    </div>

                                </div>
                                <div class="course-box-right">
                                    <div class="icon digi">
                                        <img src="images/courses/digi-marketing.png" title="digital-marketing" />
                                        <h3>Digital Marketing</h3>
                                    </div>
                                    <div class="icon graphics">
                                        <img src="images/courses/graphic-design.png" title="graphic-design" />
                                        <h3>Graphic Designing</h3>
                                    </div>
                                    <div class="icon seo">
                                        <img src="images/courses/seo.png" title="SEO" />
                                        <h3>Search Engine Optimization</h3>
                                    </div>
                                    <div class="icon wordpress">
                                        <img src="images/courses/Wordpress.png" title="Wordpress" />
                                        <h3>Wordpress</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- right part of the middle portion starts here --> */}
                </div>
                {/* <!-- middle portion with  links, new , banner and course ends here --> */}
                {/* <!-- HOW WE WORK STARTS HERE --> */}
                <div class="work-heading">How We Work </div>
                <div class="work-container">
                    <div class="how-img-box box-first">
                        <div class="how-img1">
                            <div class="how-img1-color">
                                We Listen <br /> To You
                            </div>
                        </div>
                    </div>
                    <div class="how-img-box">
                        <div class="how-img2">
                            <div class="how-img2-color">
                                We Plan <br /> Your Work
                            </div>
                        </div>
                    </div>
                    <div class="how-img-box">
                        <div class="how-img3">
                            <div class="how-img3-color">
                                We Design <br /> creativity
                            </div>
                        </div>
                    </div>
                    <div class="how-img-box">
                        <div class="how-img4">
                            <div class="how-img4-color">
                                We Execute, <br /> Publish & <br /> Maintain
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- HOW WE WORK ENDS HERE --> */}
                <div class="footer">
                    <div class="footer-top-container">
                        <div class="quick-links-container">
                            <h2>Quick Links</h2>
                            <ul>
                                <li><a href="index.html" title="Home">Home</a></li>
                                <li><a href="about.html" title="About Us">About Us</a></li>
                                <li><a href="course.html" title="Courses">Courses</a></li>
                                <li><a href="gallery.html" title="Gallery">Gallery</a></li>
                                <li><a href="enquiry.html" title="Enquiry">Enquiry</a></li>
                                <li><a href="contact.html" title="Contact Us">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="footer-train-container">
                            <h2>Training</h2>
                            <div class="train-cont">
                                <ul>
                                    <li><a href="#" title="PHP(Web Development)">PHP(Web Development)</a></li>
                                    <li><a href="#" title="Advance PHP">Advance PHP</a></li>
                                    <li><a href="#" title="Python">Python</a></li>
                                    <li><a href="#" title="Android APP Development">Android APP Development</a></li>
                                    <li><a href="#" title="Digital Marketing">Digital Marketing</a></li>

                                </ul>
                            </div>
                            <div class="train-cont">
                                <ul>
                                    <li><a href="#" title="Graphic Design">Graphic Design</a></li>
                                    <li><a href="#" title="Search Engine Optimization">Search Engine Optimization</a></li>
                                    <li><a href="#" title="Wordpress">Wordpress</a></li>
                                    <li><a href="#" title="Web design">Web design</a></li>
                                    <li><a href="#" title="Java">Java</a></li>

                                </ul>
                            </div>
                        </div>
                        <div class="footer-contact-container">
                            <h2>Contact Info:</h2>
                            <ul id="cont-details">
                                <li>Call At: 9269698122</li>
                                <li>1st floor, Laxmi Tower, Bhaskar Circle, Ratanda, Raj - Jodhpur(342001)</li>
                            </ul>
                            <ul id="social-links">
                                <li>
                                    <a href="https://www.instagram.com/wscubetechindia"><img src="images/instagram.png"/></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/wscube"><img src="images/twitter.png"/></a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/wscubetech.india"><img src="images/facebook.png"/></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/wscube-tech"><img src="images/linked-in.png"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="copy-right">
                        Copyright &copy; 2019
                    </div>
                </div>
            </div>
        </>


    )
}
