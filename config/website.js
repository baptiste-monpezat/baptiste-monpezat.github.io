const meta = {
  // Metadata
  siteTitle: 'Baptiste Monpezat - Data Scientist',
  siteDescription: 'Baptiste Monpezat - Data Scientist',
  siteTitleAlt: 'Baptiste Monpezat',
  siteShortName: 'Baptiste Monpezat',
  siteUrl: 'https://anuraghazra.github.io', // No trailing slash!
}

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@anuraghazru',
}

const website = {
  ...meta,
  ...social,
  disqusShortName: 'baptistemonpezat',  
  googleAnalyticsID: 'UA-119972196-1',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
}

module.exports = website