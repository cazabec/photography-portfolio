# Photography Portfolio - Gatsby + Contentful + Netlify
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/cb7b43c34eec4c919d6bd71967aa07b7)](https://app.codacy.com/gh/cazabec/photography-portfolio?utm_source=github.com&utm_medium=referral&utm_content=cazabec/photography-portfolio&utm_campaign=Badge_Grade)
[![Netlify Status](https://api.netlify.com/api/v1/badges/bdd90732-7d76-4ebb-a031-2a227e036aab/deploy-status)](https://app.netlify.com/sites/boring-pare-58c7c4/deploys)
[![Maintainability](https://api.codeclimate.com/v1/badges/78f6967ad7ed742f011e/maintainability)](https://codeclimate.com/github/cazabec/photography-portfolio/maintainability)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/cazabec/photography-portfolio/issues)
[See it in action](https://lilian-cazabet.fr/)

## Overview

Codebase for [https://lilian-cazabet.fr/](https://lilian-cazabet.fr/) my photography portfolio.
This website is built using Contentful, Netlify, and Gatsby V2; and was launched in June 2020. Based on [@iammatthias/.com](https://github.com/iammatthias/.com)

This site makes heavy use of the [`gatsby-image`](https://next.gatsbyjs.org/packages/gatsby-image/) plugin, pulling optimized fluid assets from Contentful.

### Features

- Netlify integration
- Contentful integration
- SEO
- Styled components
- Blog, Galleries, Netlify contact form, Slideshow and more
- Light mode / Dark mode

### How to start

Create a contentful account  [here](https://www.contentful.com/sign-up/)
Find your API keys by going to Settings ➡️ API Keys ➡️ Content Delivery / Preview tokens
```powershell
npm install
```
```powershell
npm run setup
```
```powershell
gatsby develop
```
Go to [localhost:8000](http://localhost:8000)

### Configuration

You can configure the website by updating [gatsby-config.js](gatsby-config.js) and [siteConfig.js](src/utils/siteConfig.js)

### CI / CD

You can use [Netlify](https://app.netlify.com/signup) to host your website and integrate the contact form to it.
You can then link your Netlify account to [Gitlab](https://gitlab.com/users/sign_in) so that the site gets deployed each time you push a new commit on your repository.
On top of that, you can also integrate Netlify to Contentful to launch a build

#### Notes

> You may have to replace some fonts defined in [Layout.js](src/components/Layout.js), I had to remove some fonts because they were not free of rights.
