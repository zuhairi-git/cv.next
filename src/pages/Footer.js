import React from 'react';
import DayOfMylife from '../vector/DayOfMylife.svg';

class App extends React.Component {
  componentDidMount() {
    // Obfuscate and set the email and phone number dynamically
    const email = 'zohairi@live.com'; // Simplified string
    const phoneNumber = '0442844844'; // Simplified string (spaces removed for tel link)

    // Set the email link
    const emailLink = document.getElementById('email-link');
    if (emailLink) {
      emailLink.href = `mailto:${email}`;
    }

    // Set the phone number link
    const phoneLink = document.getElementById('phone-link');
    if (phoneLink) {
      phoneLink.href = `tel:${phoneNumber}`;
    }
  }

  render() {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();

    return (
      <div className="App overflow-x-hidden">
        <div id="footer" className="footer wow fadeIn" data-wow-delay="0.2s">
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-xs-12">
                  <div className="footer-info">
                    <div className="footer-social">
                      <img
                        src={require("../img/cvlanes-bg.png")}
                        style={{ height: '256px' }}
                        alt="Logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12 align-items-center text-center">
                  <div className="footer-info">
                    <img
                      src={DayOfMylife}
                      alt="Ali"
                      style={{ height: '230px' }}
                    />
                    <h3>A Day Of My Life</h3>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12 mb-2">
                  <div className="footer-info">
                    <div className="mt-3 fs-5 text-start ps-3 text-white">
                      <div className="mb-3">
                        <h4 className="mb-0 text-light">Ali Al-Zuhairi</h4>
                        <div className="footer-text">
                          Expert in Product Design and Product Ownership
                        </div>
                      </div>
                      <div className="mb-3">
                        <h4 className="mb-0 text-light">Links</h4>
                        <div>
                          <a href="/" className="footer-text footer-links footer-link-uderline">
                            Home
                          </a>
                          <br />
                          <a
                            href="/portfolio"
                            className="footer-text footer-links footer-link-uderline"
                          >
                            Portfolio Projects
                          </a>
                          <br />
                          <div className="border-start">
                            <a
                              href="/portfolio/collaboration"
                              className="ms-3 footer-text footer-links footer-link-uderline"
                            >
                              Collaboration Workflow Platform
                            </a>
                            <br />
                            <a
                              href="/portfolio/jobseeking"
                              className="ms-3 footer-text footer-links footer-link-uderline"
                            >
                              Job Seeking
                            </a>
                            <br />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <h4 className="mb-0 text-light">Address</h4>
                        <div className="footer-text">Espoo, Suurpelto</div>
                        <div className="footer-text">
                          {/* Call Me Link */}
                          <a id="phone-link" href="tel:#" className="footer-links d-none">
                            Call Me
                          </a>
                        </div>
                        <div className="footer-text">
                          {/* Email Me Link */}
                          <a id="email-link" href="mailto:#" className="footer-links">
                            Get in touch
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container copyright">
              {/* Dynamic Copyright Year */}
              <p>&copy; CV Lanes {currentYear} | Made With React JS</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;