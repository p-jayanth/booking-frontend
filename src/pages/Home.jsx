import React from 'react';
import '../styles/home.css';
import {Container, Row,Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from './../shared/Subtitle';
import experienceImg from "../assets/images/experience.png";
import Testimonial from '../components/Testimonial/Testimonial';


import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonaryImagesGallery from '../components/image-gallery/MasonaryImagesGallery';
import Newsletter from '../shared/Newsletter';



const Home = () => {

  return  <>  

  {/* ========== hero section start ========= */}
 <section>
   <Container>
     <Row>
       <Col lg='6'>
         <div className="hero__content">
            <div className="hero__subtitle d-flex align-items center ">
              <Subtitle subtitle={'Know before you Go'} />
              <img src={worldImg} alt="" />
            </div>
            <h1>Traveling opens the door to creating <span
             className="highlight">memories</span></h1>
            <p>
             Hearts thump with anticipation as unfamiliar landscapes unfurl.
             The world shrinks, becoming a tapestry of bustlingmarkets, ancient ruins,
             and sun-drenched beaches. We return, pockets lighter, souls richer,
             forever marked by the whispers of distant winds and the echo of laughter in unknown tongues.
            </p>
         </div>
       </Col>
       <Col lg='2'>
         <div className="hero__img-box">
           <img src={heroImg} alt="" />
         </div>
       </Col>
       <Col lg='2'>
          <div className="hero__img-box hero__video-box mt-4">
           <video autoPlay loop src={heroVideo} alt="" controls/>
         </div>
       </Col>
       <Col lg='2'>
        <div className="hero__img-box mt-5">
          <img src={heroImg02} alt=""  />
        </div>
       </Col>
       <SearchBar/>

     </Row>
   </Container>
  </section>
     {/* ========== hero section start ========= */}
     <section>
      <Container>
        <Row>
          <Col lg='3'>
          <h5 className="services__subtitle">what we serve</h5>
          <h2 className='service__title'>we offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
     </section>


     {/*=========== featured tour section start ===========*/}

      <section>
        <Container>
          <Row>
            <Col lg='12' mb-5>
              <Subtitle subtitle={'Explore'} />
              <h2 className="featured__tour-title">Our Featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

     {/*=========== featured tour section end ===========*/}

     
     {/*=========== experience section start  ===========*/}
     <section>
       <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
            <subtitle subtitle={'Experience'} />
            <h2>with ou all experience <br/> we will serve you</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br>
              </br>
              do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12K+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter__box">
                <span>2K+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>15+</span>
                <h6>Years Experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
       </Container>
     </section>
     {/*=========== experience section end  =============*/}
     {/*=========== gallery section start  =============*/}
     <section>
      <Container>
        <row>
          <Col lg='12'>
           <Subtitle  subtitle={'Gallery'}/>
           <h2 className='gallery__title'>Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonaryImagesGallery/>
          </Col>
        </row>
      </Container>
     </section>
     {/*=========== gallery section end  =============*/}
     {/*=========== testimonial section start  =============*/}
     <section>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Fans Love'} />
          <h2 className="testimonial__title">What our fans says about us</h2>
        </Col>
        <Col lg='12'>;
          <Testimonial/>
        </Col>
      </Row>
     </section>
     {/*=========== testimonial section end  =============*/}
     <Newsletter/>
  </>

  
};

export default Home
