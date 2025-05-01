import React from "react";

const guidelineData = [
  {
    title: "Respect Every Voice",
    body: "We are a diverse community. Whether you're a student, educator, counselor, creator, or institution — treat others with kindness, patience, and respect.<strong> Hate speech, discrimination, harassment, or personal attacks will not be tolerated</strong>.",
  },
  {
    title: "Celebrate Creativity, Not Comparison",
    body: "This is a platform to express, not impress. We value authenticity over popularity. Share your ideas, stories, or work without the pressure of trends or performance.<strong> Be supportive of others’ journeys and talents</strong>.",
  },
  {
    title: "Keep It Positive and Purposeful",
    body: "All content should align with our mission of spreading <strong> positivity, knowledge, and inspiration</strong>. Avoid negativity, toxicity, or harmful narratives. We’re here to build up, not break down.",
  },
  {
    title: "No Algorithm. Just Expression.",
    body: "We believe in <strong> organic growth </strong>. There are <strong> no artificial boosts or content suppression</strong>. However, we ask you to share meaningfully — not spam or flood — and respect others’ space.",
  },
  {
    title: "Be Honest and Original",
    body: "Share content that is your own, or credit it properly if it's not. Plagiarism, misinformation, or misleading claims are not allowed. Let’s keep the Talentia community <strong> truthful and trustworthy </strong>.",
  },
  {
    title: " Keep the Platform Educationally Enriching",
    body: "This is a space built around education. Whether you post a video, write an article, or create a short, ensure that it brings <strong> some form of value </strong> — knowledge, creativity, guidance, or insight..",
  },
  {
    title: "No Tolerance for Discrimination",
    body: "We have a strict zero-tolerance policy towards any form of <strong> racism, casteism, sexism, religious intolerance, body shaming, or socio-economic prejudice </strong>. Talentia is an inclusive space — always.",
  },
  {
    title: "Protect Privacy",
    body: "Do not share personal information (yours or others') like addresses, phone numbers, or any sensitive content without consent. Respect confidentiality, especially in educational and institutional contexts.",
  },
  {
    title: "Report Responsibly",
    body: "If you see something inappropriate or harmful, please report it. Our moderation team is here to ensure a safe environment for all.<strong> Don’t retaliate or engage — let us handle it </strong>.",
  },
  {
    title: "Grow Together, Inspire Always",
    body: "This community grows when we lift each other up. Engage with curiosity, collaborate with openness, and inspire with generosity.",
  },
];

export default function CommunityGuidelines()  {
  return (
    <div className="cg-container">
      <div className="header">
      <video autoPlay loop muted playsInline className="">
              <source src={"/assets/guidelines.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
      </video>
        <h1 className="title-header">Talentia Community Guidelines</h1>
      </div>
      <div className="body">
        <div className="description">
          <p>
            <strong>
              Creating a Safe, Positive, and Purpose-Driven Space for Expression
            </strong>
          </p>
          <p>
            Welcome to Talentia — a platform{" "}
            <strong> where talent meets expression</strong>. Our mission is to
            empower everyone in the education ecosystem to share their
            creativity, stories, and insights in a safe and inspiring
            environment. These guidelines exist to uphold the spirit of our
            community and ensure that{" "}
            <strong> everyone feels respected, heard, and uplifted</strong>.
          </p>
          <p>
            By participating on Talentia, you agree to the following principles:
          </p>
        </div>
        {guidelineData.map((guideline, index) => (
          <div className="guidelines" id={`#${index}`}>
            <div className="horizontal-bar-saperation"></div>
            <div className="content">
            <h1>{guideline.title}</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: guideline.body,
              }}
            />
            </div>
          </div>
        ))}
        <div className="final-word">
          <h1>Final Word</h1>
          <p>
            Talentia is <strong> your platform, your voice, your moment</strong>
            . Let’s make it a place where creativity thrives, expression is
            free, and learning never stops — together.
          </p>
        </div>
      </div>
    </div>
  );
};


