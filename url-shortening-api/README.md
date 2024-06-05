# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

<img src="./src/assets/design/desktop-preview.jpg" alt="desktop1" width="400"/>

## Table of contents
 
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty


### Links

Live: [URL Shortening API](https://url-shortener-gm.vercel.app/)

## My process

### Built with

- Semantic HTML5
- Tailwind CSS
- React
- Mobile-first workflow
- API - [TinyURL](https://tinyurl.com/app)
- hide api key in .env file


### What I learned

Another project complete!  This was a great project to continue working on my responsive skills and use of Tailwind.  Something that this project taught me was how to use max-width.  In the past, I had always given each section padding.  but this would skew the entire page and stretch it out to an absurd amount on large screens.  With this project, I gave sections a max-width and used margin auto instad.  This allows the page to have margins but stop growing at a certain point on the largest screens.

I'm really enjoying tailwind, but I'm learning that it can be quite cumbersome, repetitive, and messy.  I am now aware that I can preset some elements and still use classes for elements: it's not an either or, but a combination of tailwind and css classes.  

The clipboard and sessionStorage (as opposed to localStorage) were new for me in this project.  Rather easy to implement, but very effective!

### Continued development

I don't think there is too much to be added to this specific page.  But I would like to continue learning about max-width and margin-auto.  In the past, I've also only developed for mobile and desktop.  I would like to focus more on having a variety of screen sizes and making small tweaks as screen size grows.

I would like to add sessionStorage into my Flag Frenzy game so users can see their previous scores, urging them to try their best to break there personal records.
