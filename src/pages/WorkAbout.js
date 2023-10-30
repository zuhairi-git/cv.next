import React from 'react';
import WOW from 'wowjs';
import MyCV from '../pdf/CV.pdf'
import WorkSkillset from './WorkSkillset';

class WorkAbout extends React.Component {
  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="about justify-content-center wow fadeIn" data-wow-delay="0.1s" id="about">
            <div className="container-fluid sectionSeparatorBG">
              <div className="row">
                <div className="col-lg-6 mt-5">
                  <div className="about-content">
                    <div className="section-header text-left">
                      <p className='sectionSeparator'>About Me</p>
                      <h2>10 Years Experience</h2>
                    </div>
                    <div className="about-text mb-4">
                      <p>
                        As a product designer, the Double Diamond design model serves as the bedrock of my design process. It empowers me to embrace divergent thinking, exploring a multitude of ideas and possibilities, ultimately leading to the creation of innovative products. Simplicity and elegance are fundamental principles that underpin my design philosophy, driving me to craft designs that are both visually appealing and intuitively functional.
                      </p>
                      <p>
                        Moreover, I possess strong problem-solving skills, which enable me to approach complex challenges with a strategic and analytical mindset.
                      </p>
                      <p>
                        With this approach, I am well-equipped to conceptualize, prototype, and iterate upon designs that are not only visually striking but also highly functional and user-centric. By incorporating the Double Diamond model into my design process and emphasizing simplicity, elegance, and problem-solving, I consistently create designs that captivate users and solve complex challenges with precision and creativity.
                      </p>
                    </div>
                    <div className='row'>
                      <div className='col-md-6 hidden-xxs hidden-xs hidden-sm mb-5'>
                        <a className="btn button-primary" href="#team">Get In Touch</a>
                      </div>
                      <div className='col-xs-12 col-sm-12 hidden-md hidden-lg hidden-xl hidden-xxl mb-4'>
                        <a className="btn button-primary w-100" href="#teammobile">Get In Touch</a>
                      </div>
                      <div className='col-md-6 hidden-xxs hidden-xs hidden-sm'>
                        <a className="btn button-primary" href={MyCV}>My CV (PDF)</a>
                      </div>
                      <div className='col-xs-12 col-sm-12 hidden-md hidden-lg hidden-xl hidden-xxl'>
                        <a className="btn button-primary w-100" href={MyCV}>My CV (PDF)</a>
                      </div>
                    </div>

                  </div>
                </div>
                <WorkSkillset />

              </div>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default WorkAbout;
