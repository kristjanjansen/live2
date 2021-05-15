export const config = {
  streamUrl: import.meta.env.VITE_STREAM_URL || "",
  eventsUrl1: import.meta.env.VITE_EVENTS_URL_1 || "",
  eventsUrl2: import.meta.env.VITE_EVENTS_URL_2 || "",
  eventsUrl3: import.meta.env.VITE_EVENTS_URL_3 || "",
  eventsUrl4: import.meta.env.VITE_EVENTS_URL_4 || "",
  pagesUrl: import.meta.env.VITE_PAGES_URL || "",
  wsUrl: import.meta.env.VITE_WS_URL || "",
  messagesUrl: import.meta.env.VITE_MESSAGES_URL || "",
  corsUrl: import.meta.env.VITE_CORS_URL || "${url}",
  facebookUrl: import.meta.env.VITE_FACEBOOK_URL || "",
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL || "",
  twitterUrl: import.meta.env.VITE_TWITTER_URL || "",
  youtubeUrl: import.meta.env.VITE_YOUTUBE_URL || "",
  emailUrl: import.meta.env.VITE_EMAIL_URL || "",
  phoneUrl: import.meta.env.VITE_PHONE_URL || "",
  newFeatures: import.meta.env.VITE_NEW_FEATURES === "true" || false,
  fientaUrl: import.meta.env.VITE_FIENTA_URL || "",
  fientaTicketUrl: import.meta.env.VITE_FIENTA_TICKET_URL || "",
  fientaToken: import.meta.env.VITE_FIENTA_TOKEN || "",
  plausibleDomain: import.meta.env.VITE_PLAUSIBLE_DOMAIN || "localhost",
  strapiUrl: import.meta.env.VITE_STRAPI_URL || "",
  // @TODO:remove these two
  theme: import.meta.env.VITE_THEME || 0,
  userUpdateRate: 30 * 1000,
  userUpdatedSinceLimit: 30 * 1000,
  messageDelay: 50,
  perfStart: "2021-04-01T18:00:00.002Z",
};
