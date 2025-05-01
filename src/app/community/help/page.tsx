"use client"
import  { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const helpIndex = [
  { id: "section1", title: "Getting Started" },
  { id: "section2", title: "Profile and Settings" },
  { id: "section3", title: "Posting Content" },
  { id: "section4", title: "Connecting with Others" },
  { id: "section5", title: "Safety and Moderation" },
  { id: "section6", title: "For Students & Parents" },
  { id: "section7", title: "For Teachers & EdTech Companies" },
  { id: "section8", title: "Privacy and Security" },
  { id: "section9", title: "Technical Help" },
  { id: "appendix", title: "Contact Support" },
];

const helpContent = {
  description:
    "Here you'll find answers to frequently asked questions and guidance on how to get the most out of the Talentia platform.",
  sections: [
    {
      title: "Getting Started",
      section: "section1",
      questions: [
        {
          question: "How do I create an account on Talentia?",
          answer:
            "To sign up:<br>1. Visit <a href='https://talentia.co.in' target='_blank'>https://talentia.co.in</a><br>2. Click on \"Sign Up\"<br>3. Fill in your details and verify your email or phone number",
        },
        {
          question: "How do I log in to my account?",
          answer:
            'Go to the login page, enter your credentials, and click "Log In". You can also use third-party login options if enabled.',
        },
      ],
    },
    {
      title: "Profile & Settings",
      section: "section2",
      questions: [
        {
          question: "How do I update my profile?",
          answer:
            "Go to your dashboard → Profile → Edit. You can update your name, bio, profile picture, skills, and more.",
        },
        {
          question: "How can I change my password?",
          answer: "Settings → Account Security → Change Password",
        },
        {
          question: "Can I delete my account?",
          answer:
            "Yes. Contact our support team or go to Settings → Delete Account. (Note: This action is permanent.)",
        },
      ],
    },
    {
      title: "Posting Content",
      section: "section3",
      questions: [
        {
          question: "What kind of content can I post?",
          answer:
            "You can post:<br>• Images<br>• Videos<br>• Text updates<br>• Achievements and skills<br>• Educational content and portfolio work",
        },
        {
          question: "Who can see my posts?",
          answer:
            "You control visibility. Choose: Public, Followers Only, or Private when posting.",
        },
      ],
    },
    {
      title: "Connecting with Others",
      section: "section4",
      questions: [
        {
          question: "Can I follow other users?",
          answer:
            "Yes! You can follow students, teachers, parents, Education Institute and EdTech profiles to stay updated on their posts.",
        },
        {
          question: "How can I message someone?",
          answer:
            "Use the built-in chat/messaging feature to connect privately.",
        },
      ],
    },
    {
      title: "Safety & Moderation",
      section: "section5",
      questions: [
        {
          question: "How is content moderated?",
          answer:
            "Our moderation team and AI systems review flagged content to keep Talentia a safe space. Inappropriate posts will be removed, and repeat offenders may be banned.",
        },
        {
          question: "How do I report abuse or inappropriate content?",
          answer:
            'Click the "Report" button on any post or profile. Our team will investigate immediately.',
        },
      ],
    },
    {
      title: "For Students & Parents",
      section: "section6",
      questions: [
        {
          question: "Can students under 18 join?",
          answer:
            "Yes, with parental consent. Parents can also monitor activity via linked accounts.",
        },
        {
          question: "How can students showcase their skills?",
          answer:
            "Students can:<br>• Upload videos or images of their projects<br>• Share competition wins and certificates<br>• Join community challenges or Talentia events",
        },
      ],
    },
    {
      title: "For Teachers & EdTech Companies",
      section: "section7",
      questions: [
        {
          question: "How can I promote my courses or programs?",
          answer:
            "Create a verified Educator/Company profile. Share posts, event updates, and skill-building content.",
        },
        {
          question: "Can I create educational content or go live?",
          answer:
            "Yes. Use your dashboard to upload structured content or stream sessions (if enabled).",
        },
      ],
    },
    {
      title: "Privacy & Security",
      section: "section8",
      questions: [
        {
          question: "Is my data safe on Talentia?",
          answer:
            "Yes. We follow strict security and data privacy practices. Learn more in our <a href='#'>Privacy Policy</a>.",
        },
        {
          question: "Can I control who sees my posts or profile?",
          answer:
            "Absolutely. Use privacy settings to control visibility of your content and personal details.",
        },
      ],
    },
    {
      title: "Technical Help",
      section: "section9",
      questions: [
        {
          question: "I forgot my password. What should I do?",
          answer:
            'Click "Forgot Password" on the login page. Follow the instructions to reset it via email or SMS.',
        },
        {
          question: "The app/website is not loading properly.",
          answer:
            "Try:<br>• Clearing cache<br>• Checking your internet connection<br>• Restarting the app or browser<br>If the issue persists, contact support.",
        },
      ],
    },
  ],
  contact: {
    section: "appendix",
    description: "Still have questions? We're here to help.",
    email: "<a href='mailto:info@talentia.co.in'>info@talentia.co.in</a>",
  },
};

export default function HelpCenter(){
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (questionKey:any) => {
    setActiveQuestion(activeQuestion === questionKey ? null : questionKey);
    console.log("Current active:", activeQuestion, "Clicked:", questionKey);
  };

  return (
    <div className="help-container">
      <div
        className="banner"
        style={{ backgroundImage: `url("/assets/Help.jpg")` }}
      >
        <h1 className="banner-heading">
          Help Center<span>Talentia Mindvers Pvt Ltd</span>
        </h1>
      </div>
      <div className="material">
        <div className="index">
          <h1>Index</h1>
          <ul>
            {helpIndex.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="content">
          <p className="description">{helpContent.description}</p>
          <div className="sections">
            {helpContent.sections.map((section, sectionIndex) => (
              <section
                key={section.section}
                id={section.section}
                className="section"
              >
                <h2>{section.title}</h2>
                <div className="questions">
                  {section.questions.map((question, index) => {
                    const questionKey = `${section.section}-q${index}`;
                    return (
                      <div key={questionKey} className="question">
                        <div
                          className="question-header"
                          onClick={() => toggleQuestion(questionKey)}
                        >
                          <h3>Q: {question.question}</h3>
                          <span>
                            {activeQuestion === questionKey ? (
                                <div>
                              <RiArrowDropUpLine  />
                              </div>
                            ) : (
                              <RiArrowDropDownLine />
                            )}
                          </span>
                        </div>
                        {activeQuestion === questionKey && (
                          <div className="answer-content">
                            <p
                              dangerouslySetInnerHTML={{
                                __html: question.answer,
                              }}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
          <div className="contact-information">
            <h1>Contact</h1>
            <p>{helpContent.contact.description}</p>
            <p className="contact-email"
              dangerouslySetInnerHTML={{
                __html: helpContent.contact.email,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


