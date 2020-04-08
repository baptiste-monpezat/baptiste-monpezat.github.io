const meta = {
  // Metadata
  siteTitle: 'Baptiste Monpezat - Data Scientist',
  siteDescription: 'Baptiste Monpezat - Data Scientist',
  siteTitleAlt: 'Baptiste Monpezat',
  siteShortName: 'Baptiste Monpezat',
  siteUrl: 'https://baptiste-monpezat.github.io', // No trailing slash!
}

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@Mnpzat',
}

const website = {
  ...meta,
  ...social,
  disqusShortName: 'baptiste-monpezat',  
  googleAnalyticsID: 'UA-163163719-1',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
}

module.exports = website