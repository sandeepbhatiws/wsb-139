import React from 'react'
import Header from './Header'

export default function About() {
    return (
        <>
            <div class="main">
                <header>
                    <Header/>
                </header>
                {/* <!-- middle portion with  links, new , banner and course starts here --> */}
                <div class="middle-container">
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
                        <div class="page-status">
                            <h1>About Us:</h1>
                            <h2><i onclick='window.location.href = "index.html" '> Home /</i> About Us:</h2>
                        </div>
                        <div class="about-content">
                            <p>At IIP Academy, students always had the access to Major & Minor Projects in Website Development (PHP / MySQL)</p>

                            <p> IIP Academy Provide best training in .NET & PHP. So that students themselves can be able to develop projects and launch them LIVE on IIP Academy Online Servers. Our Students had developed several projects like wscubetech.com. Many students get easy job placements due to their online Projects on the IIP Academy. We are only institute in Jodhpur which provides free Web Hosting to our students on our servers.  </p>

                            <p>Engineering & MCA students can develop any small minor projects in .NET or PHP and could extend as their Major Projects in further years. </p>

                            <p> Minor Projects are really not hard to develop, as also the colleges generally are not strict in accepting the minor projects.Minor Projects can be small but it must be remarkable. Because details of Minor Projects are required to put in your Resume. And students with good minor projects can be easily placed in good companies during Campus Placements.  </p>

                            <p>IIP Academy Provides 45 Days Industrial Training for Engineering (B.E. / B.TECH.) Students</p>

                            <p>
                                <h3 class="margin-bottom">Why IIP Adacemy</h3>
                                <div>1. Live industrial projects</div>
                                <div>2. Expert Developers</div>
                                <div>3. Placement assistance.</div>
                                <div>4. 100% Practical</div>
                                <div>5. Interview preparation sessions.</div>
                            </p>
                        </div>
                    </div>
                    {/* <!-- right part of the middle portion starts here --> */}
                    <div class="clear"></div>
                </div>
                {/* <!-- middle portion with  links, new , banner and course ends here --> */}

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
                                <li><a href="https://www.instagram.com/wscubetechindia"><img src="images/instagram.png"/></a></li>
                                <li><a href="https://twitter.com/wscube"><img src="images/twitter.png"/></a></li>
                                <li><a href="https://www.facebook.com/wscubetech.india"><img src="images/facebook.png"/></a></li>
                                <li><a href="https://www.linkedin.com/company/wscube-tech"><img src="images/linked-in.png"/></a></li>
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
