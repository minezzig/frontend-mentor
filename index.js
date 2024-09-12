const projectsContainer = document.getElementById("projects-container");

const projects = [
  {
    title: "Product List with Cart",
    url: "https://fm-product-list-with-cart-gm.vercel.app",
    image: "/images/screenshot.jpg",
  },
  {
    title: "Homepage - Space Tourism",
    url: "https://space-tourism-gm.vercel.app",
    image: "/screenshot.jpg",
  },
  {
    title: "Homepage - Manage",
    url: "https://manage-landing-gm.vercel.app",
    image: "/images/screenshot.jpg",
  },
  {
    title: "Homepage - URL Shortener",
    url: "https://url-shortener-gm.vercel.app",
    image: "/images/screenshot.jpg",
  },
  {
    title: "Homepage - Bookmark Manager",
    url: "./bookmark-landing-page-master/",
    image: "./design/desktop-design.jpg",
  },
  {
    title: "Homepage - Loop Studios",
    url: "./loopstudios-landing-page-main/",
    image: "./design/desktop-design.jpg",
  },
  {
    title: "Homepage - easybank",
    url: "./easybank-landing-page-master/",
    image: "./design/desktop-design.jpg",
  },

  {
    title: "Homepage - Sunnyside Agency",
    url: "./sunnyside-agency-landing-page-main/",
    image: "./design/desktop-design.jpg",
  },

  {
    title: "Homepage - newsfeed",
    url: "./news-homepage-main/",
    image: "./design/desktop-design.jpg",
  },
  {
    title: "Homepage - Snap",
    url: "./intro-section-with-dropdown-navigation-main/src/",
    image: "../design/desktop-design.jpg",
  },

  {
    title: "App - Time tracking dashboard",
    url: "./time-tracking-dashboard-main/",
    image: "./design/desktop-design.jpg",
  },

  {
    title: "App - Tip calculator",
    url: "./tip-calculator-app-main/",
    image: "./screenshots/desktop.png",
  },

  {
    title: "Newsletter signup",
    url: "./newsletter-sign-up-with-success-message-main/",
    image: "./design/desktop-design.jpg",
  },

  {
    title: "Ineractive rating component",
    url: "./interactive-rating-component-main/src/",
    image: "../design/desktop-design.jpg",
  },
  {
    title: "Age Calculator",
    url: "./age-calculator/",
    image: "/assets/images/screenshot.jpg",
  },

  {
    title: "Results summary widget",
    url: "./results-summary-component-main/src/",
    image: "../design/desktop-design.jpg",
  },

  {
    title: "FAQ accordian card",
    url: "./faq-accordion-card-main/",
    image: "./design/desktop-design.jpg",
  },

  {
    title: "Testimonials Grid",
    url: "./testimonials-grid-section-main/",
    image: "./images/desktop-screenshot.jpg",
  },

  {
    title: "Blog post preview card",
    url: "./article-preview-component-master/src/",
    image: "../design/desktop-design.jpg",
  },

  {
    title: "Profile card",
    url: "./profile-card-component-main/",
    image: "./images/screenshot.jpg",
  },
];

const projectElements = projects.map((project) => {
  return `
  <li>
  <a href=${project.url}>
    <div style="background-image: url('${
      project.url + project.image
    }'); background-position: top; background-size: cover" class="project">
   <p>${project.title} </p>
    </div>
 
</a>
</li>
  `;
});
projectsContainer.innerHTML = projectElements.join("");
