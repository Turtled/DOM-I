const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

let nav = document.querySelector("nav");

nav.children[0].textContent = siteContent.nav["nav-item-1"] 
nav.children[1].textContent = siteContent.nav["nav-item-2"] 
nav.children[2].textContent = siteContent.nav["nav-item-3"] 
nav.children[3].textContent = siteContent.nav["nav-item-4"] 
nav.children[4].textContent = siteContent.nav["nav-item-5"] 
nav.children[5].textContent = siteContent.nav["nav-item-6"] 

let navItem1 = document.createElement("a");
navItem1.setAttribute("href", "#");
navItem1.textContent = "Login";

let navItem2 = document.createElement("a");
navItem2.setAttribute("href", "#");
navItem2.textContent = "Sign Up";

nav.appendChild(navItem1);
nav.appendChild(navItem2);

Array.from(nav.children).forEach(element => {
  element.setAttribute("style", "color: green");
});

let headerText = document.querySelector(".cta-text h1");

headerText.textContent += "DOM ";
headerText.appendChild(document.createElement("br"));
headerText.textContent += "Is ";
headerText.appendChild(document.createElement("br"));
headerText.textContent += "Awesome";

document.querySelector(".cta-text button").textContent = siteContent.cta["button"];
document.querySelector(".cta img").setAttribute("src", siteContent.cta["img-src"]);

let topContent = document.querySelector(".top-content");

topContent.children[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topContent.children[0].children[1].textContent = siteContent["main-content"]["features-content"];

topContent.children[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topContent.children[1].children[1].textContent = siteContent["main-content"]["about-content"];

document.getElementById("middle-img").setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let bottomContent = document.querySelector(".bottom-content");

bottomContent.children[0].children[0].textContent = siteContent["main-content"]["services-h4"];
bottomContent.children[0].children[1].textContent = siteContent["main-content"]["services-content"];

bottomContent.children[1].children[0].textContent = siteContent["main-content"]["product-h4"];
bottomContent.children[1].children[1].textContent = siteContent["main-content"]["product-content"];

bottomContent.children[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
bottomContent.children[2].children[1].textContent = siteContent["main-content"]["vision-content"];


document.querySelector(".contact h4").textContent = siteContent["contact"]["contact-h4"];
document.querySelectorAll(".contact p")[0].textContent = siteContent["contact"]["address"];
document.querySelectorAll(".contact p")[1].textContent = siteContent["contact"]["phone"];
document.querySelectorAll(".contact p")[2].textContent = siteContent["contact"]["email"];

topContent.children[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topContent.children[0].children[1].textContent = siteContent["main-content"]["features-content"];

topContent.children[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topContent.children[1].children[1].textContent = siteContent["main-content"]["about-content"];

document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
