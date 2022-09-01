# Entertainment Web Application (TMDB API)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learnt](#development-process-and-what-i-learnt)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the page depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for movies and tv series from all pages
- Go back to homepage from the 404 page

### Screenshot

![Mobile](https://i.postimg.cc/4460MXPL/mobile.png)
![Desktop](https://i.postimg.cc/85t1BL7W/home.png)

### Links

- Solution URL: [GitHUb](https://github.com/S-Devoe/movie-informations-webapp.git)
- Live Site URL: [Netlify](https://movie-informations-webapp.vercel.app/)

## My process

### Built with

- Next.js
- Next.js SSR
- Tailwind CSS
- Semantic HTML
- CSS custom properties

### Development process and What i learnt

The main purpose of me building this web app is to improve my knowledge of fetching and handling data from an API,
and also to increase my familiarity with Next.js.

I love building web apps with Next.js because it creates a better and smooth experience for me than React.js (thanks to it SSR, SSG and ISR). I choose to use Tailwind CSS for this project instead of SASS (which i often use) to check how fast i will be able to complete this project, and it kind of worked right for me.

#### Problem encountered

There wasn't any big issue when i was developing the web app, apart from some JS bugs which i was able to fix easily.
The big issue was encountered after production, my API calls were not using being called and the live web app was just displaying the static contents and blank spaces for the dynamic content.

I solved this by:

- fisrt trying to figure out the cause of the problem.
  I opened the console of the live web app and i found this -
  `Mixed Content: The page at '<URL>' was loaded over HTTPS, but requested an insecure resource '<URL>'. This request has been blocked; the content must be served over HTTPS.`

- My next step was to figure out how i could solve this as it was my first time of seeing this type of erorr in my production.
  I opened a new tab on my browser and 'googled' :grin: the problem, i clicked on a StackOverFlow click and was redirected to a post where i found a comment that solved my problem.
  I added this meta tag to head element in my index.js and my web app come to live fully.
  `<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">`


### Useful resources
 [StackOverFlow Solution Page](https://stackoverflow.com/questions/52130918/web-api-error-this-request-has-been-blocked-the-content-must-be-served-over-h)

## Author

- Website - [Github](https://www.github.com/S-Devoe)
- Frontend Mentor - [@S-Devoe](https://www.frontendmentor.io/profile/S-Devoe)
- Twitter - [@hol_segun](https://www.twitter.com/hol_segun)
