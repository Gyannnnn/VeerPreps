"use client";

import { GoogleAnalytics } from "nextjs-google-analytics";

const GoogleAnalyticsClient = () => {
  console.log("Google Analytics ID:", process.env.NEXT_PUBLIC_GA_ID);
  return <GoogleAnalytics gaMeasurementId="G-TZ39FR5E5W" trackPageViews />;
};

export default GoogleAnalyticsClient;
