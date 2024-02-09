import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import "./home-page.css";

import { NavLink } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as Open } from "../../assets/icons/open.svg";
import points from "../../assets/icons/points.png";
import aboutus1 from "../../assets/images/aboutus-1.png";
import aboutus2 from "../../assets/images/aboutus-2.png";
import articles1 from "../../assets/images/articles-1.png";
import articles2 from "../../assets/images/articles-2.png";
import faqImg from "../../assets/images/faq_right.png";
import your_body from "../../assets/images/your-body.png";

function HomePage({ setAuthModal }) {
  useEffect(() => {
    window.scrollTo(0, 0); // Переместить окно просмотра страницы в начало
  }, []);

  const [opened, setOpened] = useState();
  const faq = [
    {
      question: "Are the workout plans suitable for beginners?",
      answer:
        "Yes, our workout plans cater to all fitness levels, including beginners. We offer a variety of entry-level exercises with detailed instructions and video demonstrations to help you ease into a new fitness routine.",
    },
    {
      question: "How do I see workouts using this platform?",
      answer: `To access workouts on our platform, simply navigate to the "Training" section on the website. Here, you'll find a variety of workout routines categorized by type, duration, and intensity level. Click on any workout to view detailed instructions, video demonstrations, and any necessary equipment.`,
    },
    {
      question: "How can I get started with a fitness routine on this website?",
      answer: `Getting started with a fitness routine on our website is easy! Head over to the "Join now" to register and start your fitness journey.`,
    },
    {
      question: "Can I access nutritional information on this website?",
      answer: `Yes, you can access nutritional information on our website. We provide a variety of resources, including articles, recipes, and meal plans designed to support your fitness goals. Check out the "Recipes" section for healthy recipes.`,
    },
    {
      question: "Are there resources for mental well-being on this website?",
      answer: `Absolutely! Mental well-being is an essential component of overall health and fitness. Explore our "Blog" section where we regularly features content on topics such as stress management, relaxation techniques, and achieving a healthy work-life balance.`,
    },
  ];

  const toggleTabs = (data) => {
    if (data == opened) {
      setOpened("");
    } else {
      setOpened(data);
    }
  };

  const blockRef = useRef(null);

  const smoothScrollTo = (element) => {
    const targetPosition = element.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, startPosition + distance * (progress / duration));
      if (progress < duration) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  };

  const scrollToBlock = () => smoothScrollTo(blockRef.current);

  return (
    <>
      <header>
        <div className="container header_content">
          <h1>
            Get more out of your <br /> <span>fitness</span> journey
          </h1>
          <p>
            Crush your fitness goals with personalized workout plans designed
            just for you. Whether you're a beginner or a seasoned pro, our
            adaptive routines evolve with your progress.
          </p>
          <div className="header_btns">
            <button className="main_btn" onClick={() => setAuthModal(true)}>
              <p>Join Now</p>
            </button>
            <NavLink to="/about-us">
              <button className="main_btn read_more_btn">
                <p>Read More</p>
              </button>
            </NavLink>
          </div>
        </div>
        <div className="scroll_btn">
          <Arrow onClick={scrollToBlock} />
        </div>
      </header>
      <section className="about_us container" ref={blockRef}>
        <div className="about_us_left">
          <img src={aboutus1} alt="" />
          <img src={aboutus2} alt="" />
        </div>
        <div className="about_us_right">
          <h2>About us</h2>
          <p>
            <b>Here's to your health and happiness</b>
          </p>{" "}
          <br />
          <p className="about_us_right_desc">
            We're on a mission to make wellness a universal experience. <br />{" "}
            Our drive is simple but powerful: to inspire positive change in your
            life. Athletic Odyssey is where innovation meets inclusivity,
            offering cutting-edge features, expert guidance, and a personalized
            experience that caters to various fitness levels and interests.
            <br /> <br /> Access world-class trainers and nutritionists at your
            fingertips. No matter where life takes you, our app ensures that you
            have expert advice and motivation right when you need it, making
            your fitness journey a seamless part of your lifestyle.
          </p>
          <NavLink to="/training">
            <button className="main_btn">
              <p>Learn more</p>
            </button>{" "}
          </NavLink>
        </div>
      </section>
      <section className="fitness_ideas_wrapper">
        <div className="container fitnes_ideas">
          <div className="fitnes_ideas_title">
            <h2>Bring your Fitness Ideas into life</h2>
            <p>
              We offer a comprehensive suite of services designed to empower you{" "}
              <br />
              on your path to holistic wellness.
            </p>
          </div>
          <div className="fitnes_idea_cards">
            <div className="fitnes_idea_cards_left">
              <div className="fitnes_idea_left_card">
                <div className="fitnes_idea_left_card_title">
                  <p>CARDIO</p>
                </div>
                <div className="fitnes_idea_left_card_description">
                  <p>
                    Cardiovascular exercise involves activities that increase
                    your heart rate and breathing rate. It's great for improving
                    overall heart health, boosting endurance, and burning
                    calories.{" "}
                  </p>
                </div>
              </div>
              <div className="fitnes_idea_left_card">
                <div className="fitnes_idea_left_card_title">
                  <p>RESISTANCE</p>
                </div>
                <div className="fitnes_idea_left_card_description">
                  <p>
                    This type of exercise involves working against resistance to
                    build muscle strength and endurance. It can be done using
                    free weights, resistance bands.
                  </p>
                </div>
              </div>
              <div className="fitnes_idea_left_card">
                <div className="fitnes_idea_left_card_title">
                  <p>BODY COMBAT</p>
                </div>
                <div className="fitnes_idea_left_card_description">
                  <p>
                    BodyCombat is a high-intensity cardio workout inspired by
                    various martial arts disciplines. It typically involves a
                    series of choreographed moves set to music.
                  </p>
                </div>
              </div>
              <div className="fitnes_idea_left_card">
                <div className="fitnes_idea_left_card_title">
                  <p>YOGA</p>
                </div>
                <div className="fitnes_idea_left_card_description">
                  <p>
                    Yoga is a holistic practice that combines physical postures,
                    breathing techniques and meditation. It promotes
                    flexibility, strength, and balance.
                  </p>
                </div>
              </div>
            </div>
            <div className="fitnes_idea_cards_right">
              <div className="fitnes_idea_left_card_title">
                <p>WEIGTH TRAINING</p>
              </div>
              <div className="fitnes_idea_left_card_description">
                <p>
                  Weight training involves lifting weights to build strength and
                  muscle mass. It can include exercises like squats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="your_body">
        <div className="your_body_left">
          <img src={your_body} alt="" />
        </div>
        <div className="your_body_right">
          <div className="your_body_right_title">
            <h2>Your body listens closely to the messages your mind sends.</h2>
            <p>
              To create a better tomorrow, strive to surpass yesterday's
              efforts. Discover solutions to enhance movement and boost your
              overall well-being. Strength emerges when weakness fades away.
            </p>
          </div>
          <div className="your_body_right_list">
            <img src={points} alt="" />
            <div>
              <p>
                Finding balance is essential for everyone's journey through
                life.
              </p>
              <p>Embrace fitness as a resolution for better health.</p>
              <p>
                Dive into fitness, transform yourself, and embrace life fully.
              </p>
              <p>
                Remember, the challenges may persist, but you grow stronger with
                each step.
              </p>
            </div>
          </div>
          <NavLink to="/">
            <button className="main_btn">
              <p>Learn more</p>
            </button>{" "}
          </NavLink>
        </div>
      </section>
      <section className="articles_wrapper">
        <div className="container articles_block">
          <div className="articles_block_card">
            <img src={articles1} alt="" />
            <p>Why most people fail at trying to workout?</p>
            <span>December 27,2023</span>
          </div>
          <div className="articles_block_card">
            <img src={articles2} alt="" />
            <p>The danger of workouting too much</p>
            <span>December 25,2023</span>
          </div>
        </div>
      </section>
      <section className="container faq_section">
        <h2>faq</h2>
        <div className="faq_section_wrapper">
          <div className="faq_section_right">
            {faq.map((item, index) => (
              <div
                className={
                  opened == item.question
                    ? "faq_section_item faq_item_open"
                    : "faq_section_item"
                }
                key={index}
                onClick={() => toggleTabs(item.question)}
              >
                <div className="faq_item_question">
                  <p>{item.question}</p>
                  <Open className="open_faq" />

                  <Close className="close_faq" />
                </div>
                <div className="faq_item_answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="faq_section_right_img">
            <img src={faqImg} alt="" />
          </div>{" "}
        </div>
      </section>
      <section className="contacts">
        <div className="contacts_wrapper container">
          <h2>
            Join for a holistic, adaptable <br /> wellness journey.{" "}
          </h2>
          <p className="contacts_desc">
            Subscribe to get updated about new workouts, recepies and offers
          </p>
          <div className="contacts_form">
            <input type="text" placeholder="Enter your email" />
            <button className="main_btn">
              <p>Subscribe</p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
