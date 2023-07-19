const { Helmet } = window.ReactHelmetAsync;
const ReactDOMServer = window.ReactDOMServer;

const metaTags = window.dynamicMetaTags || {};

const helmet = Helmet.renderStatic();
const helmetHTML = helmet.title.toString() + helmet.meta.toString();

metaTags.title = helmet.title.toString();
metaTags.metaHTML = helmetHTML;

window.dynamicMetaTags = metaTags;

const metaTagsString = ReactDOMServer.renderToString(
  React.createElement(
    React.Fragment,
    null,
    helmet.title.toComponent(),
    helmet.meta.toComponent()
  )
);

document.getElementById("dynamic-meta-tags").innerHTML = metaTagsString;
