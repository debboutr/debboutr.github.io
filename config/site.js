module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'rick debbout', // Navigation and Site Title
  titleAlt: 'rick debbout', // Title for JSONLD
  description: 'A portfolio site for rick debbout',
  url: 'https://www.rickdebbout.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://www.rickdebbout.com', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'rickD', // shortname for manifest. MUST be shorter than 12 characters
  author: 'rickD', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@raisingDingus', // Twitter Username
};
