import React from 'react';


class SocialMeida extends React.Component {

  render() {
    return (
      <>
        <div className="pb-1 connectWithMe mt-5">
          <span>Let's Connect:</span>
          <a className="m-3 text-secondary" href="https://twitter.com/AliZohairi"><i className="fa-brands fa-twitter"></i></a>
          <a className="m-3 text-secondary" href="https://www.linkedin.com/in/ali-zuhairi/"><i className="fa-brands fa-linkedin-in"></i></a>
          <a className="m-3 text-secondary" href="https://www.facebook.com/zuhairi.one"><i className="fa-brands fa-facebook-f"></i></a>
          <a className="m-3 text-secondary" href="https://www.tiktok.com/@zuhairi.ali"><i className="fa-brands fa-tiktok"></i></a>
          <a className="m-3 text-secondary" href="https://www.youtube.com/@Ali.Zuhairi"><i className="fa-brands fa-youtube"></i></a>
          <a className="m-3 text-secondary" href="mailto:zohairi@live.com"><i className="fa-solid fa-envelope"></i></a>
        </div>
      </>
    );
  }
}

export default SocialMeida;