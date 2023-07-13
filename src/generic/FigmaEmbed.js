import React from "react";
import PropTypes from "prop-types";

const FigmaEmbed = ({ embedId }) => (
  <div className="figma">
    <iframe 
      style={{border: '0px solid rgba(0, 0, 0, 0.1)'}} 
      width="800" 
      height="450" 
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGu3b0JHoN773RkYQ1iz7eV%2FLow-Fidelity-Design-Kit%3Fpage-id%3D403%253A643%26node-id%3D403-664%26viewport%3D131%252C463%252C0.48%26scaling%3Dscale-down%26starting-point-node-id%3D403%253A644" 
      allowFullScreen >
    </iframe>
  </div>
);

FigmaEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default FigmaEmbed;