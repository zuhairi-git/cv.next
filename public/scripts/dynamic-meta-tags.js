const { Helmet } = require("react-helmet-async");
const ReactDOMServer = require("react-dom/server");

const metaTags = window.dynamicMetaTags || {};

const helmet = Helmet.renderStatic();
const helmetHTML = helmet.title.toString() + helmet.meta.toString();

metaTags.title = helmet.title.toString();
metaTags.metaHTML = helmetHTML;

window.dynamicMetaTags = metaTags;

// Render the dynamic meta tags to a string
const metaTagsString = ReactDOMServer.renderToString(
  <>
    {helmet.title.toComponent()}
    {helmet.meta.toComponent()}
  </>
);

document.getElementById("dynamic-meta-tags").innerHTML = metaTagsString;
