import React, { useState } from "react";
import "./home-page.css";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import line from "../../assets/images/header_line.png";

import aboutus1 from "../../assets/images/aboutus-1.png";
import aboutus2 from "../../assets/images/aboutus-2.png";
import your_body from "../../assets/images/your-body.png";
import points from "../../assets/icons/points.png";
import articles1 from "../../assets/images/articles-1.png";
import articles2 from "../../assets/images/articles-2.png";
import { ReactComponent as Open } from "../../assets/icons/open.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import faqImg from "../../assets/images/faq_right.png";

function HomePage() {
  const [opened, setOpened] = useState();
  const faq = [
    {
      question: "Are the workout plans suitable for beginners?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis minus quae cupiditate facilis culpa necessitatibus possimus minima repellendus hic blanditiis, dolore deserunt consequatur ab accusamus impedit ipsum architecto dolorem tenetur.",
    },
    {
      question: "How do I see workouts using this platform?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis minus quae cupiditate facilis culpa necessitatibus possimus minima repellendus hic blanditiis, dolore deserunt consequatur ab accusamus impedit ipsum architecto dolorem tenetur.",
    },
    {
      question: "How can I get started with a fitness routine on this website?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis minus quae cupiditate facilis culpa necessitatibus possimus minima repellendus hic blanditiis, dolore deserunt consequatur ab accusamus impedit ipsum architecto dolorem tenetur.",
    },
    {
      question: "Can I access nutritional information on this website?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis minus quae cupiditate facilis culpa necessitatibus possimus minima repellendus hic blanditiis, dolore deserunt consequatur ab accusamus impedit ipsum architecto dolorem tenetur.",
    },
    {
      question: "Are there resources for mental well-being on this website?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis minus quae cupiditate facilis culpa necessitatibus possimus minima repellendus hic blanditiis, dolore deserunt consequatur ab accusamus impedit ipsum architecto dolorem tenetur.",
    },
  ];

  const toggleTabs = (data) => {
    if (data == opened) {
      setOpened("");
    } else {
      setOpened(data);
    }
  };
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
            <button className="main_btn">
              <p>Join Now</p>
            </button>
            <button className="main_btn read_more_btn">
              <p>Read More</p>
            </button>
          </div>
        </div>
        <div className="scroll_btn">
          <Arrow />
        </div>
   
      </header>
      <section className="about_us container">
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
          <p>
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
              </div>
              <div className="fitnes_idea_left_card">
                <div className="fitnes_idea_left_card_title">
                  <p>CARDIO</p>
                </div>
              </div>
              <div className="fitnes_idea_left_card">
                <div className="fitnes_idea_left_card_title">
                  <p>CARDIO</p>
                </div>
              </div>
              <div className="fitnes_idea_left_card">
                <div className="fitnes_idea_left_card_title">
                  <p>CARDIO</p>
                </div>
              </div>
            </div>
            <div className="fitnes_idea_cards_right">
              <div className="fitnes_idea_left_card_title">
                <p>WEIGTH TRAINING</p>
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
          <button className="main_btn">
            <p>Learn more</p>
          </button>
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
