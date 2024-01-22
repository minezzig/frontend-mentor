# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](/screenshots/desktop.png)
![](/screenshots/mobile.png)

### Links

Not deployed yet

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties and selectors
- Vanilla Javascript
- Flexbox & grid
- Mobile-first workflow
- Data attributes

### What I learned

I had a lot of fun with this project! I will say it challenged me to remember the skills I've learned using vanilla javascript. I was thinking alot about how to do things using React and had to figure out how to do these things differently. My first attempt I tried to use radio buttons for the tip selection. This worked, but I wasn't sure how to style them correctly and I was running into errors. I eventually tried again and used divs for each and found it much easier. I also used data-attributes, which I've recently learned, and am really enjoying them. I find them so much easier, and it is nice to separate css classes from javascript selectors.

While doing this project I looked further into the difference between "change" and "input" when using event listeners. I was running into problems that the math would only be calculated when I clicked out of the window and back to VScode. With this, I also refreshed the difference between onchange, onChange, and change. I'm also looking more into special css selectors as they came in handy when I ran into an issue with the custom tip button. Although I have it grouped with all the other buttons, I wanted its style to be different. I also was reminded how important it is to know what type of data you're working with! Although my inputs are type="number" the value they return is in a string. I used the + operator to convert them to numbers when doing my calculations.

```
<div class="tip" data-tip=".05">5%</div>
```

```css
.tip:not(:last-child).active {
  background: var(--primary);
  color: var(--dark-grayish-cyan);
}
```

### Continued development

I hate to admit it, but this project did take my longer than I would have liked. I need to really focus on the differences between vanilla javascript and react. I also sometimes need to follow my gut and work through things, even when they are hard. I really liked my first idea of using radio buttons and I wish I had kept them that way. I feel that using divs was an easier way though perhaps not the best solution.
