"use client"

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Image from "next/image";

export default function AboutUs(){
    const [activeSection, setactiveSection] = useState<string>("");
  const toggleSection = (sectionId:any) => {
    setactiveSection(activeSection === sectionId ? null : sectionId);
    console.log("button pressed")
  };
    return <div className="main-about-container">
    <div className="about-container">
      <section className="title-header">
        <video autoPlay loop muted playsInline className="video-background">
          <source src={"/assets/titlebg.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="title">
          <h1>Talentia</h1>
          <h2>Where Talent Meets Expression</h2>
        </div>
      </section>

      <section className="our-story">
        <div className="our-story-container">
          <h1>OUR STORY</h1>
          <p>
            <strong>Talentia</strong> is a purpose-driven social platform
            designed to redefine how creativity is shared and celebrated
            within the education ecosystem. We are a community-first space
            where{" "}
            <strong>
              students, educators, motivational speakers, career counselors,
              institutions, edtech organizations, and educational
              changemakers{" "}
            </strong>
            can come together to express, inspire, and elevate learning in
            all its forms.
            <br />
            <br /> Whether it’s through thoughtful articles, expressive
            images, educational videos, or vibrant short clips on our unique{" "}
            <strong> Talentverse</strong>, Talentia provides a stage for
            every voice — regardless of background, role, or status — to
            shine and be heard.
          </p>
        </div>
      </section>
      <section
        className="mission-vision"
        style={{
          backgroundImage: `url("./assets/aboutbg.jpg")})`,
        }}
      >
        <div className="mission-vision-container">
          <div className="mv-content">
            <h1>OUR MISSION</h1>
            <p>
              To build a safe, inclusive, and empowering platform that
              allows individuals across the education sector to{" "}
              <strong>
                express their talent, share their knowledge, and spread
                positivity{" "}
              </strong>
              , inspiring a new generation of learners and leaders through
              creativity and collaboration.
            </p>
          </div>
          <div className="mv-content">
            <h1>OUR VISION</h1>
            <p>
              To become the world’s most trusted and impactful digital space
              dedicated to education, where{" "}
              <strong>
                {" "}
                authentic talent is celebrated, knowledge flows freely
              </strong>
              , and{" "}
              <strong>
                {" "}
                genuine expression is never compromised by artificial
                limitations{" "}
              </strong>
              .
            </p>
          </div>
        </div>
      </section>
      <section className="principles">
        <div className="top">
          <div className="heading">
            <h1> Our Principles</h1>
            <p>
              At the heart of Talentia lies a set of core values that shape
              every experience on our platform:
            </p>
          </div>
        </div>
        <div className="content">
          <div className="principles-content">
            <div className="principles-accordian">
              <div
                className="section "
                onClick={() => {
                  toggleSection("header1");
                }}
              >
                <div className="section-header">
                  <h2>Creativity with Purpose</h2>
                  <span>
                    {activeSection === "header1" ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                {activeSection === "header1" && (
                  <div className="section-content">
                    <p>
                      We believe talent should inform, uplift, and inspire
                    </p>
                  </div>
                )}
              </div>
              <div
                className="section "
                onClick={() => {
                  toggleSection("header2");
                }}
              >
                <div className="section-header">
                  <h2>Equality of Expression </h2>
                  <span>
                    {activeSection === "header2" ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                {activeSection === "header2" && (
                  <div className="section-content">
                    <p>
                      Every user, regardless of who they are, deserves to be
                      seen and heard.
                    </p>
                  </div>
                )}
              </div>
              <div
                className="section "
                onClick={() => {
                  toggleSection("header3");
                }}
              >
                <div className="section-header">
                  <h2>Positivity Over Popularity </h2>
                  <span>
                    {activeSection === "header3" ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                {activeSection === "header3" && (
                  <div className="section-content">
                    <p>
                      We cultivate a culture of encouragement, not
                      competition.
                    </p>
                  </div>
                )}
              </div>
              <div
                className="section "
                onClick={() => {
                  toggleSection("header4");
                }}
              >
                <div className="section-header">
                  <h2>Authenticity Without Algorithms </h2>
                  <span>
                    {activeSection === "header4" ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                {activeSection === "header4" && (
                  <div className="section-content">
                    <p>
                      Your reach is determined by what you share, not how
                      well it fits a trend.
                    </p>
                  </div>
                )}
              </div>
              <div
                className="section "
                onClick={() => {
                  toggleSection("header5");
                }}
              >
                <div className="section-header">
                  <h2>Learning Without Limits </h2>
                  <span>
                    {activeSection === "header5" ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                {activeSection === "header5" && (
                  <div className="section-content">
                    <p>
                      From informal insights to academic achievements, all
                      learning is valuable.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="principles-image">
            <Image width={100} height={100} src={"/assets/principles.jpg"} alt="img-p" />
            
          </div>
        </div>
      </section>
      <section className="careers">
        <div className="career-container">
          <h1>WORKING AT TALENTIA</h1>
          <p>
            To work at Talentia is to be part of something meaningful.
            <br />
            <br />
            We are not just building a platform — we are creating a
            movement. A movement powered by people who are passionate about
            <strong> education, creativity, and digital equity</strong>. Our
            culture celebrates <strong> diverse ideas</strong>, encourages{" "}
            <strong> open collaboration</strong>, and values{" "}
            <strong> each team member’s voice</strong>.
            <br />
            <br />
            Here, innovation is fueled by empathy, and every role
            contributes directly to empowering someone’s story, talent, or
            journey.
          </p>
        </div>
      </section>
      <section className="our-uniqueness">
        <div className="principles-image">
          <Image  width={100} height={100} src={"/assets/purpose.jpg"} alt="img-p" />
        </div>
        <div className="principles-content">
          <div className="heading">
            <h1> What Makes Us Different</h1>
            <p>
              Talentia is <strong> unlike any other platform</strong>.
              <br />
              We are:
            </p>
          </div>
          <div className="principles-accordian">
            <div
              className="section "
             onClick={()=>toggleSection("unique-header1")}
            >
              <div className="section-header">
                <h2>Purpose-driven </h2>
                <span>
                  {activeSection === "unique-header1" ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              {activeSection === "unique-header1" && (
                <div className="section-content">
                  <p>Built for expression with meaning, not metrics.</p>
                </div>
              )}
            </div>
            <div
              className="section "
              onClick={() => {
                toggleSection("unique-header2");
              }}
            >
              <div className="section-header">
                <h2>Positive by design </h2>
                <span>
                  {activeSection === "unique-header2" ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              {activeSection === "unique-header2" && (
                <div className="section-content">
                  <p>
                    We strictly promote content that uplifts and adds value.
                  </p>
                </div>
              )}
            </div>
            <div
              className="section "
              onClick={() => {
                toggleSection("unique-header3");
              }}
            >
              <div className="section-header">
                <h2>Discrimination-free </h2>
                <span>
                  {activeSection === "unique-header3" ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              {activeSection === "unique-header3" && (
                <div className="section-content">
                  <p>
                    No voice is sidelined. We embrace diversity in all its
                    forms
                  </p>
                </div>
              )}
            </div>
            <div
              className="section "
              onClick={() => {
                toggleSection("unique-header4");
              }}
            >
              <div className="section-header">
                <h2>Algorithm-free in spirit </h2>
                <span>
                  {activeSection === "unique-header4" ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              {activeSection === "unique-header4" && (
                <div className="section-content">
                  <p>
                    No hidden mechanisms control your reach. Your ideas,
                    talent, and authenticity determine your visibility —
                    nothing else.
                  </p>
                </div>
              )}
            </div>
          </div>
          <p>
            We are committed to{" "}
            <strong> authentic growth, human-centered design</strong>, and a
            future where educational voices rise{" "}
            <strong> because they deserve to</strong>, not because they are
            curated by code.
          </p>
        </div>
      </section>
      <section className="join-community">
        <div className="join-community-container">
          <h1>JOIN THE TALENTIA MOVEMENT</h1>
          <p>
            Talentia is more than an app. It is a{" "}
            <strong> platform with purpose</strong>, a
            <strong> community of creators</strong>, and a{" "}
            <strong> movement of positivity in education</strong>.
            <br />
            <br />
            Whether you are sharing your first creative piece, inspiring
            thousands with your insights, or simply looking to learn from
            others — <strong> this is your place</strong>.
            <br />
            <br />
            Here, talent truly meets expression. And the world is better
            because of it.
          </p>
        </div>
      </section>
      <div>
      </div>
    </div>
  </div>;
}