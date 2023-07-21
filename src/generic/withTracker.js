import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom'; // Import useLocation hook here

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = (page) => {
    ReactGA.set({ page, ...options });
    ReactGA.pageview(page);
  };

  const HOC = (props) => {
    const location = useLocation(); // Get the location from the hook

    useEffect(() => {
      const page = location.pathname; // Use location.pathname to get the current path
      trackPage(page);
    }, [location.pathname]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withTracker;
