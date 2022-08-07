# Frontend Mentor - Fylo landing page with two column layout solution

This is a solution to the [Fylo landing page with two column layout challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82137ec91a50f5).
## Table of contents


- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./design/desktop-preview.jpg)



### Links

- Solution URL: [Github code source](https://github.com/medsagou/fylo-landing-page-with-two-column-layout.git)
- Live Site URL: [Preview](https://medsagou.github.io/fylo-landing-page-with-two-column-layout/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- [Modern css reset](https://piccalil.li/blog/a-modern-css-reset/) - piccalil



### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<div class="two-part-bottom-footer-section">
                    <ul class="first-footer-list | bottom-list">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div class="four-part-bottom-footer-section">
                    <ul class="second-footer-list | bottom-list">
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
                <div class="five-part-bottom-footer-section">
                    <ul class="social-media-links | bottom-list">
                        <li><img class="social-media-icons | facebook" src="./images/facebook.svg" alt=""></li>
                        <li><img class="social-media-icons | twitter" src="./images/twitter.svg" alt=""></li>
                        <li><img class="social-media-icons | instagram" src="./images/instagram.svg" alt="" ></li>
                    </ul>
                </div>
```
```css
@media (hover: hover){
    .second-submit:hover, .first-submit:hover{
            cursor: pointer;
            background-color: hsl(221, 100%, 71%);
    }
    .second-section-link-container:hover .see-how-fylo-works-link{
        color:hsl(170, 45%, 70%);

    }
    .bottom-list li:hover a {
        color: hsl(231, 39%, 60%);
    }
    .social-media-icons:hover{
        cursor: pointer;
    }
    .facebook:hover {
        content: url('./images/facebook-hover.svg');
    }
    .twitter:hover {
        content: url('./images/twitter-hover.svg');
    }
    .instagram:hover {
        content: url('./images/instagram-hover.svg');
    }

```
```js
const btnFirst = document.getElementById('btn-first');
const btnSecond = document.getElementById('btn-second');

const inputFirst =  document.getElementById('input-first');
const inputSecond = document.getElementById('input-second');

const errorOne = document.getElementById('error-msg-first');
const errorTwo = document.getElementById('error-msg-second')

btnFirst.addEventListener('click',function() {

    const emailCheck=isValidEmail(inputFirst.value)
    if (!emailCheck) {
        inputFirst.setAttribute('state','error');
        errorOne.style.display = 'block' ;
        // btnFirst.style.marginTop ='1.5rem';
        btnFirst.setAttribute('state','error');
    } else {
        inputFirst.setAttribute('state','no-error');
        errorOne.style.display = 'none' ;
        // btnFirst.style.marginTop ='.8rem';
        btnFirst.setAttribute('state','no-error');
    }
})

btnSecond.addEventListener('click',function() {

    const emailCheck=isValidEmail(inputSecond);
    if (!emailCheck) {
        inputSecond.setAttribute('state','error');
        errorTwo.style.display = 'block' ;
        // btnSecond.style.marginTop ='1.5rem';
    } else {
        inputSecond.setAttribute('state','no-error');
        errorTwo.style.display = 'none' ;
        // btnSecond.style.marginTop ='1.5rem';
    }
})





function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
```


### Continued development

My first project with menu, Im so glad for finishing this work. Specialy the mobile version with the side menu on the right.


### Useful resources

- [W3schools](https://www.w3schools.com/) - This helped me for javaScript eventListener. I really liked this pattern and will use it going forward.
- [stackoverflow](https://stackoverflow.com/) - this website help me on the javascript when i get stock.
## Author

- Website - [Mohamed Sagou](https://github.com/medsagou)
- Frontend Mentor - [@medsagou](https://www.frontendmentor.io/profile/medsagou)
- Twitter - [@sagoumohamed](https://www.twitter.com/sagoumohamed)

## Acknowledgments

nothing for this project.
