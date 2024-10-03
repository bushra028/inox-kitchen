import React, { useRef } from "react";
import { Link } from "react-router-dom";
import welcome from "../assets/welcome-bg.png";
import "./Home.css";
import "./parallax.css";
import "./BlogPost.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import Image1 from "../assets/hm/H1.jpg";
import Image2 from '../assets/hm/H2.jpg' ;
import Image3 from '../assets/hm/h3.jpg' ;
import Image4 from '../assets/hm/H4.jpg' ;
import Image5 from '../assets/hm/H5.jpg' ;

import wwd1 from "../assets/hm/1.jpeg";
import wwd2 from "../assets/hm/2.jpg";
import wwd3 from "../assets/hm/3.jpg";
import team1 from "../assets/hm/1t.jpeg";
import team2 from "../assets/hm/2t.jpeg";
import team3 from "../assets/hm/3t.jpeg";

import blogp1 from "../assets/hm/blog1.jpeg";
import blogp2 from "../assets/hm/blog2.jpeg";
import blogp3 from "../assets/hm/blog3.jpeg";

const Home = () => {
  const carouselRef = useRef(); // Create a ref for the carousel

  return (
    <>
      <div className="welcome">
        <div className="welcome-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="welcome-text">
                  <h1>Luxury Faucets <br /> Collections</h1>
                  <p>Quisque ullamcorper volutpat dolor, sit amet<br /> egestas risus elementum id. Duis luctus augue<br /> vestibulum sem.</p>
                  <a className="dark-btn" href="project-grid.html">
                    <span className="show-btn">EXPLORE KITCHEN</span>
                    <span className="hide-btn">EXPLORE KITCHEN</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
       
  

              {/* Slider Column */}
              <div className="col-lg-8" >
                <div className="slider-position">&nbsp;</div>
                <div className="slider-wrapper">
                  <div className="base">
                    <div className="prev" onClick={() => carouselRef.current.prev()}>
                      <i className="fa fa-angle-left"></i>
                    </div>
                    <div className="next" onClick={() => carouselRef.current.next()}>
                      <i className="fa fa-angle-right"></i>
                    </div>
                  </div>

                  <OwlCarousel
                    className="owl-theme"
                  
                   loop={true}
                    margin={0} // Set margin to 20 to create space between items
                    nav={false} // Disable default nav
                    responsive={{
                      0: { items: 1 }, // Adjust for smaller screens
                      600: { items: 2 }, // Adjust for medium screens
                      1000: { items: 2.5 } // Adjust for larger screens
                    }}
                    ref={carouselRef} // Use ref to control carousel
                  >
                    <div className="item">
                      <div className="img">
                        <img src={Image1} alt="Kitchen Units" />
                      </div>
                      <div className="text">
                        <h5>Kitchen Units</h5>
                        <p>Mauris sagittis feugiat dui vel varius.</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="img">
                        <img src={Image2} alt="High Gloss Lacquer" />
                      </div>
                      <div className="text">
                        <h5>High Gloss Lacquer</h5>
                        <p>Mauris sagittis feugiat dui vel varius.</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="img">
                        <img src={Image3} alt="Veneer Kitchen" />
                      </div>
                      <div className="text">
                        <h5>Veneer Kitchen</h5>
                        <p>Mauris sagittis feugiat dui vel varius.</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="img">
                        <img src={Image4} alt="Driftwood" />
                      </div>
                      <div className="text">
                        <h5>Driftwood</h5>
                        <p>Mauris sagittis feugiat dui vel varius.</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="img">
                        <img src={Image5} alt="Sawn Oak" />
                      </div>
                      <div className="text">
                        <h5>Sawn Oak</h5>
                        <p>Mauris sagittis feugiat dui vel varius.</p>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
      
    {/* half parallax */}
    <section className="half-parallax">
      <div className="parallax-image" ></div>
      <div className="parallax-items">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="parallax-item">
                <i className="fa fa-hourglass-o"></i>
                <h5 className="feature-title">PLANNING</h5>
                <p>Proin luctus odio et purus iaculis, et porta ex molestie. Curabitur euismod nulla enim.</p>
                <a className="dark-btn" href="gallery.html">
                  <span className="show-btn">READ MORE</span>
                  <span className="hide-btn">READ MORE</span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="parallax-item">
                <i className="fa fa-connectdevelop"></i>
                <h5 className="feature-title">INTERIOR</h5>
                <p>Vestibulum justo odio, auctor sed elit vitae, sollicitudin varius metus. Maecenas diam.</p>
                <a className="dark-btn" href="gallery.html">
                  <span className="show-btn">READ MORE</span>
                  <span className="hide-btn">READ MORE</span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="parallax-item">
                <i className="fa fa-flag-o"></i>
                <h5 className="feature-title">EXTERIOR</h5>
                <p>Integer tincidunt aliquam nibh. Sed sed velit tristique, egestas lorem eu, fermentum diam.</p>
                <a className="dark-btn" href="gallery.html">
                  <span className="show-btn">READ MORE</span>
                  <span className="hide-btn">READ MORE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* parallax new section */}
    <section className="section padding-bottom-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                        <div className="left-heading">
                            <h2 className="section-title dotted">What We Do</h2>
                        </div>
                        <div className="left-text">
                            <p className="dark">Etiam eu felis condimentum, lacinia lorem eget, dictum <br/>nisl. Vestibulum lacinia erat at.</p>
                            <p className="margin-bottom-40">Magnis dis parturient montes, nascetur ridiculus mus.<br/> Nunc et mauris quis urna fringilla dapibus a at mauris.<br/> Vivamus mattis est.</p>
                            <ul className="margin-bottom-40">
                                <li>
                                  Parturient montes, nascetur.</li>
                                <li>Ridiculus mus. Nunc et mauris.</li>
                                <li>Quis urna fringilla dapibus a at mauris.</li>
                            </ul>

                            <div className="row page-gallery-wrapper">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <a href="assets/images/photos/home/1.jpg" className="page-gallery imgfix_top_container">
                                        <div className="imgfix_wrapper_layer">
                                            <img src={wwd1} alt="Description of image 1" className="imgfix_src_img" />
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <a href="assets/images/photos/home/2.jpg" className="page-gallery imgfix_top_container">
                                        <div className="imgfix_wrapper_layer">
                                            <img src={wwd2} alt="Description of image 2" className="imgfix_src_img" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center">
                        <img src={wwd3}className="img-fluid float-right" alt="Description of image 3" />
                    </div>
                </div>
            </div>
        </section>
      {/* counter section */}
        
        <div className="parallax-counter">
      <div className="parallax-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="count-item">
                <strong>0</strong>
                <span>Active<br />Customers</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="count-item">
                <strong>0</strong>
                <span>Specialist<br />Staff</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="count-item">
                <strong>0</strong>
                <span>Completed<br />Projects</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="count-item">
                <strong>0</strong>
                <span>Ongoing<br />Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        
        
        <section className="section">
      <div className="container">
        {/* Section Title Start */}
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Our Team</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna <br/>quis arcu elementum, quis congue risus.</p>
            </div>
          </div>
        </div>
        {/* Section Title End */}

        <div className="row">
          {/* Team Item Start */}
          <div className="col-lg-4 col-md-6 col-sm-12 position-relative">
            <div className="person-item">
              <div className="img">
                <img src={team1} alt="Fletch Skinner" />
              </div>
              <div className="content">
                <div className="text">
                  <h5 className="user-name">Fletch Skinner</h5>
                  <span>DESIGNER</span>
                  <ul className="social">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fa fa-github"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Team Item End */}

          {/* Team Item Start */}
          <div className="col-lg-4 col-md-6 col-sm-12 position-relative">
            <div className="person-item active">
              <div className="img">
                <img src={team2} alt="Hanson Deck" />
              </div>
              <div className="content">
                <div className="text">
                  <h5 className="user-name">Hanson Deck</h5>
                  <span>ARCHITECT</span>
                  <ul className="social">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fa fa-github"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Team Item End */}

          {/* Team Item Start */}
          <div className="col-lg-4 col-md-6 col-sm-12 position-relative">
            <div className="person-item">
              <div className="img">
                <img src={team3} alt="Natalya Under" />
              </div>
              <div className="content">
                <div className="text">
                  <h5 className="user-name">Natalya Under</h5>
                  <span>ART DIRECTOR</span>
                  <ul className="social">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fa fa-github"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Team Item End */}
        </div>
      </div>
    </section>
    <section className="section white">
      <div className="container">
        {/* ***** Section Title Start ***** */}
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Latest Blog Posts</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>
                Donec vulputate urna sed rutrum venenatis. Cras consequat magna
                quis arcu elementum, quis congue risus.
              </p>
            </div>
          </div>
        </div>
        {/* ***** Section Title End ***** */}

        <div className="row">
          {/* ***** Blog Item Start ***** */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <a href="blog-single.html" className="blog-post-grid imgfix_top_container" style={{ overflow: 'hidden' }}>
              <div id="imgfix_wrapper_layer_0_0" className="imgfix_wrapper_layer" style={{ position: 'relative', padding: 0, margin: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
                <img src={blogp1} alt="" className="imgfix_src_img" style={{ opacity: 1 }} />
                <div className="content">
                  <h3>Chief clubhouse for female executives opens in Boston</h3>
                  <div className="date">APR 09</div>
                </div>
              </div>
            </a>
          </div>
          {/* ***** Blog Item End ***** */}

          {/* ***** Blog Item Start ***** */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <a href="blog-single.html" className="blog-post-grid imgfix_top_container" style={{ overflow: 'hidden' }}>
              <div id="imgfix_wrapper_layer_0_1" className="imgfix_wrapper_layer" style={{ position: 'relative', padding: 0, margin: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
                <img src={blogp2} alt="" className="imgfix_src_img" style={{ opacity: 1 }} />
                <div className="content">
                  <h3>A hotel in the heart of Copenhagen’s Latin Quarter</h3>
                  <div className="date">APR 09</div>
                </div>
              </div>
            </a>
          </div>
          {/* ***** Blog Item End ***** */}

          {/* ***** Blog Item Start ***** */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <a href="blog-single.html" className="blog-post-grid imgfix_top_container" style={{ overflow: 'hidden' }}>
              <div id="imgfix_wrapper_layer_0_2" className="imgfix_wrapper_layer" style={{ position: 'relative', padding: 0, margin: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
                <img src={blogp3} alt="" className="imgfix_src_img" style={{ opacity: 1 }} />
                <div className="content">
                  <h3>Skandium’s eco townhouse for LDF18 with Montana</h3>
                  <div className="date">APR 09</div>
                </div>
              </div>
            </a>
          </div>
          {/* ***** Blog Item End ***** */}
        </div>
      </div>
    </section>
          
          </>
        );
      };
      
      export default Home;
      
    
   
      
     
     
              

