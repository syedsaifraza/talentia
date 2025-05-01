export default function PrivacyPolicy(){
    return <div className="privacy-container">
    <div
      className="banner"
      style={{ backgroundImage: `url('/assets/Privacy.jpg')` }}
    >
      <h1 className="banner-heading">
        Privacy Policy<span>Talentia Mindvers Pvt Ltd</span>
      </h1>
    </div>
    <div className="material-container">
      <div className="material">
        <div className="description">
          <p>
            Talentia Mindvers Pvt Ltd ("Talentia", "we", "us", "our") is
            committed to protecting the privacy of our users, including
            students, parents, educators, education institute and EdTech
            companies. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our platform
            and services.
          </p>
        </div>
        <div className="informations">
          <div className="information">
            <div className="title">
              <h2>Information We Collect</h2>
            </div>
            <div className="content">
              <p>We collect the following types of information:</p>
              <div className="list-section">
                <h4>
                  <strong>Personal Information</strong>
                </h4>
                <ul>
                  <li>Name, email, phone number, profile photo</li>
                  <li>
                    Educational or professional background (for educators and
                    EdTech companies)
                  </li>
                  <li>Parent or guardian details (for students under 18)</li>
                </ul>
              </div>
              <div className="list-section">
                <h4>
                  <strong>User-Generated Content</strong>
                </h4>
                <ul>
                  <li>
                    Posts, images, videos, and any content shared publicly or
                    privately
                  </li>
                  <li>
                    Comments, likes, and interactions with other users'
                    content
                  </li>
                </ul>
              </div>
              <div className="list-section">
                <h4>
                   <strong>Device and Usage Data</strong>
                </h4>
                <ul>
                  <li>IP address, browser type, operating system</li>
                  <li>Device identifiers and usage patterns</li>
                </ul>
              </div>
              <div className="list-section">
                <h4>
                   <strong>Optional Data</strong>
                </h4>
                <ul>
                  <li>
                    Skills, achievements, certifications, resumes, portfolios
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="information">
            <div className="title">
              <h2>How We Use Your Information</h2>
            </div>
            <div className="content">
            <p>We use your information to:</p>
              <div className="list-section"> 
                <ul>
                  <li>Create and manage user accounts</li>
                  <li>Facilitate social interaction and skill showcasing</li>
                  <li>Enable communication among users</li>
                  <li>Improve platform features and user experience</li>
                  <li>
                    Send updates, notifications, or promotional messages (only
                    with your consent)
                  </li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="information">
            <div className="title">
              <h2>Sharing Your Information</h2>
            </div>
            <div className="content">
                <p>
                  We do <strong> not </strong> sell your data. We may share
                  your information with:
                </p>
              <div className="list-section">
                <ul>
                  <li>
                    <strong> Other users:</strong> depending on your profile
                    visibility and posts
                  </li>
                  <li>
                    <strong> Service providers:</strong> for hosting,
                    analytics, or technical support
                  </li>
                  <li>
                    <strong> Legal authorities:</strong> if required by law or
                    to protect user safety
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="information">
            <div className="title">
              <h2>Children's Privacy</h2>
            </div>
            <div className="content">
            <p>
                  If you are under the age of 18, you must have parental
                  consent to use the platform. We take extra care to ensure
                  data from minors is collected and handled responsibly, in
                  compliance with applicable child data protection laws.
                </p>
            </div>
          </div>
          <div className="information">
            <div className="title">
              <h2>Data Security</h2>
            </div>
            <div className="content">
            <p>
                  We use industry-standard security practices to protect your
                  data from unauthorized access, loss, or misuse. However, no
                  system is 100% secure.
                </p>
            </div>
          </div>
          <div className="information">
            <div className="title">
              <h2>Your Rights</h2>
            </div>
            <div className="content">
            <p>You have the right to:</p>
              <div className="list-section">  
                <ul>
                  <li>Access and update your personal data</li>
                  <li>Delete your account and associated information</li>
                  <li>Control who sees your content and profile</li>
                  <li>Withdraw consent where applicable</li>
                  <li>
                    To exercise your rights, contact us at:
                    info@talentia.co.in
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="information">
            <div className="title">
              <h2>Cookies and Tracking</h2>
            </div>
            <div className="content">
                <p>
                  We may use cookies and similar technologies to improve user
                  experience and analyze traffic. You can manage your cookie
                  preferences through your browser settings.
                </p>
            </div>
          </div>
          <div className="information">
            <div className="title">
              <h2>Changes to This Policy</h2>
            </div>
            <div className="content">
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of significant changes through email or in-app
                  notifications.
                </p>

            </div>
          </div>
        </div>

        <div className="contact-information">
          <h1>Contact</h1>
          <p>For questions or concerns about this policy or your data:</p>
          <p className="contact-email">
            <a href="mailto:info@talentia.co.in">info@talentia.co.in</a>
          </p>
        </div>
      </div>
    </div>
  </div> ;
}