import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import card1 from "../../assets/images/about-us-card-1.png";
import card2 from "../../assets/images/about-us-card-2.png";
import card3 from "../../assets/images/about-us-card-3.png";
import videoView from "../../assets/video.mp4";
import "./about-us.css";

function AboutUs() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="about_us_page">
      <div className="about_us_header">
        <div className="container">
          <video autoPlay loop muted>
            <source src={videoView} type="video/mp4" />
          </video>
          <p>Our Mission</p>
          <h1>
            Empower <br /> individuals to <br /> embark on <br /> a
            transformative <br /> journey towards <br /> holistic well-being.
          </h1>
        </div>
      </div>
      <div className="about_us_page_cards ">
        <div
          className="about_us_page_desc"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p>
            We're dedicated to transforming health and wellness, ensuring
            fitness is accessible and rewarding for all. Whether you're a
            beginner or a seasoned enthusiast, we're not just an app; we're your
            reliable companion, offering motivation, personalized insights, and
            a sense of community. Your wellness journey is our priority. Let's
            move, achieve, and thrive together."
          </p>
        </div>
        <div className="about_us_page_card">
          <div className="about_us_page_card_left last">
            <div
              className="about_us_page_card_text"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3>Our Culture</h3>
              <p>
                Our culture is to nurture and built a community that celebrates
                health and well-being. Strong, passionate and a supportive
                community that praises for step taken to a healthier lifestyle.
                It guides everyone to encourage and embrace a shared journey
                towards well-being. It includes the creation and support ofa
                friendly environment that gathers diverse backgrounds together.
                Whether being an athlete or an amateur the mission is to inspire
                everyone to flourish in accomplishing their personal milestones.
              </p>
            </div>
          </div>
          <div className="about_us_page_card_right">
            <img
              src={card1}
              alt=""
              data-aos="zoom-in-right"
              data-aos-duration="1000"
            />
          </div>
        </div>
        <div className="about_us_page_card">
          <div className="about_us_page_card_left ">
            <img
              src={card2}
              alt=""
              data-aos="zoom-in-left"
              data-aos-duration="1000"
            />
          </div>
          <div className="about_us_page_card_right">
            <div
              className="about_us_page_card_text"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3>Our Values</h3>
              <p>
                The core values revolves around equality, accountability and
                continuous improvement. We are strongly devoted to provide the
                accurate tools and resources that enables user to advance their
                health and fitness. Dedication in ensuring the users are
                emphasized in detailed and clarity on their tracking progress.
                Also promoting a sense of responsibility for users well-being
                and promoting a growth mindset to stimulate encouragement to
                constantly strive for better of their health.
              </p>
            </div>
          </div>
        </div>
        <div className="about_us_page_card">
          <div className="about_us_page_card_left last">
            <div
              className="about_us_page_card_text"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3>Impact on Users</h3>
              <p>
                Our culture is to nurture and built a community that celebrates
                health and well-being. Strong, passionate and a supportive
                community that praises for step taken to a healthier lifestyle.
                It guides everyone to encourage and embrace a shared journey
                towards well-being. It includes the creation and support of a
                friendly environment that gathers diverse backgrounds together.
                Whether being an athlete or an amateur the mission is to inspire
                everyone to flourish in accomplishing their personal milestones.
              </p>
            </div>
          </div>
          <div className="about_us_page_card_right">
            <img
              src={card3}
              alt=""
              data-aos="zoom-in-left"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </div>
      <div className="stats" data-aos="fade-up" data-aos-duration="1000">
        <h2>By the Numbers</h2>
        <div className="stats_cards">
          <div className="stat_card">
            <p>100+ </p>
            <span>healthy recipes available in our nutrition database.</span>
          </div>
          <div className="stat_card">
            <p>1K+ </p>
            <span>hours of workout videos</span>
          </div>
          <div className="stat_card">
            <p>90% </p>
            <span>user satisfaction with personalized recommendations</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
