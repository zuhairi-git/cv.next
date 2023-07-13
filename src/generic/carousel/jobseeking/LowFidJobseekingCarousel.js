import React from 'react';

const LowFidJobseekingCarousel = () => {

  return (
    <div className="col-md-4 mb-3">
      <div id="carousel00" className="carousel carousel-dark slide p-5" data-interval="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carousel00" data-bs-slide-to="0" aria-label="Slide 1" className="active" aria-current="true"></button>
          <button type="button" data-bs-target="#carousel00" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
          <button type="button" data-bs-target="#carousel00" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
          <button type="button" data-bs-target="#carousel00" data-bs-slide-to="3" aria-label="Slide 4" className=""></button>
          <button type="button" data-bs-target="#carousel00" data-bs-slide-to="4" aria-label="Slide 5" className=""></button>
          <button type="button" data-bs-target="#carousel00" data-bs-slide-to="5" aria-label="Slide 6" className=""></button>
          <button type="button" data-bs-target="#carousel00" data-bs-slide-to="6" aria-label="Slide 7" className=""></button>
          <button type="button" data-bs-target="#carousel00" data-bs-slide-to="7" aria-label="Slide 8" className=""></button>
        </div>
        <p>Low-Fid Exmaple</p>

        <div className="carousel-inner border-bold">
          <div className="carousel-item active">
            <img alt='Image' src={require("../../../img/jobseeking/low-fid/Splash.jpg")} className="border-hover-primary w-100" />
          </div>
          <div className="carousel-item">
            <img alt='Image' src={require("../../../img/jobseeking/low-fid/Login.jpg")} className="border-hover-primary w-100" />
          </div>
          <div className="carousel-item">
            <img alt='Image' src={require("../../../img/jobseeking/low-fid/Main.jpg")} className="border-hover-primary w-100" />
          </div>
          <div className="carousel-item">
            <img alt='Image' src={require("../../../img/jobseeking/low-fid/Calendar.jpg")} className="border-hover-primary w-100" />
          </div>
          <div className="carousel-item">
            <img alt='Image' src={require("../../../img/jobseeking/low-fid/CalendarNext.jpg")} className="border-hover-primary w-100" />
          </div>
          <div className="carousel-item">
            <img alt='Image' src={require("../../../img/jobseeking/low-fid/CalendarHistory.jpg")} className="border-hover-primary w-100" />
          </div>
          <div className="carousel-item">
            <img alt='Image' src={require("../../../img/jobseeking/low-fid/Messeges.jpg")} className="border-hover-primary w-100" />
          </div>
          <div className="carousel-item">
            <img alt='Image' src={require("../../../img/jobseeking/low-fid/Profile.jpg")} className="border-hover-primary w-100" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel00" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel00" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
    </div>
  );
};

export default LowFidJobseekingCarousel;