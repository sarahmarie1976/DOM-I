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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
document.getElementById('logo-img').style.boxShadow =
	'10px 20px 30px lightblue';

// Get the navigation items and update them
const navElements = document.querySelectorAll("nav a");

// Loop over the navigation items and update their source
navElements.forEach((element, index) => {
  element.textContent = siteContent["nav"][`nav-item-${index + 1}`]; 
  

  // Task 3 - Part I
  element.style.color = '#228B22';
});

// Task 3 - Part II
// Create a navigation item
const navBar = document.querySelector("nav");

/* Home */
const home = document.createElement("a");

home.href = "#";
home.textContent = "Home";
home.style.color = '#228B22';

/* Videos */
const video = document.createElement("a");

video.href = "#";
video.textContent = "Videos";
video.style.color = '#228B22';

// Add the new navigation items to the nav
navBar.prepend(home);
navBar.appendChild(video);

// Get the header text element and update it's text
const headerText = document.querySelector(".cta-text h1");
headerText.textContent = siteContent["cta"]["h1"];

// Stretch: Update header text color
headerText.style.color = '#9803fc';

// Get the header button and set it's text
const headerButton = document.querySelector(".cta-text button");
headerButton.textContent = siteContent['cta']['button'];


// Stretch: Update button border color
headerButton.style.border = '1px solid #9803fc';


// Get the header image and update it's src attribute to point to the image
const headerImage = document.querySelector("#cta-img");
headerImage.setAttribute('src', siteContent['cta']['img-src']);


// Update the top content section
const features = document.querySelector(".top-content .text-content:first-child");
features.childNodes[1].textContent = siteContent["main-content"]["features-h4"];
features.childNodes[3].textContent = siteContent["main-content"]["features-content"];

const about = document.querySelector(".top-content .text-content:nth-of-type(2)");
about.childNodes[1].textContent = siteContent["main-content"]["about-h4"];
about.childNodes[3].textContent = siteContent["main-content"]["about-content"];

// Update the middle image source
const middleImage = document.querySelector(".middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Update the bottom content section
const services = document.querySelector(".bottom-content .text-content:first-child");
services.childNodes[1].textContent = siteContent["main-content"]["services-h4"];
services.childNodes[3].textContent = siteContent["main-content"]["services-content"];

const product = document.querySelector(".bottom-content .text-content:nth-of-type(2)");
product.childNodes[1].textContent = siteContent["main-content"]["product-h4"];
product.childNodes[3].textContent = siteContent["main-content"]["product-content"];

const vision = document.querySelector(".bottom-content .text-content:last-child");
vision.childNodes[1].textContent = siteContent["main-content"]["vision-h4"];
vision.childNodes[3].textContent = siteContent["main-content"]["vision-content"];

// Update the contact section
const contact = document.getElementsByClassName('contact');
contact[0].childNodes[1].textContent = siteContent["contact"]["contact-h4"];
contact[0].childNodes[2].textContent = siteContent["contact"]["address"];
contact[0].childNodes[3].textContent = siteContent["contact"]["phone"];
contact[0].childNodes[4].textContent = siteContent["contact"]["email"];

// Update the footer
const footer = document.getElementsByTagName('footer');
footer[0].childNodes[1].textContent = siteContent["footer"]["copyright"];

// Stretch Goal II
// Data to use during update
let newData = {
	"services": {
		'service-new': 'Services - New Services Coming Soon!',
	},
};


let serviceUpdate = document.querySelector(
	'.bottom-content .text-content:first-child'
);



let serviceUpdateHeader = document.querySelector(
	'.bottom-content .text-content:first-child h4'
);


let button = document.createElement('button');
button.textContent = 'Update Services';

button.style.border = '1px solid #9803fc';




// Update the Services section
function updateServices(header, text) {
	const services = document.querySelector(
		'.bottom-content .text-content:first-child'
	);
  services.childNodes[1].textContent = header;
  serviceUpdateHeader.style.color = '#9803fc';
};


button.addEventListener('click', () => {
	updateServices(
    newData['services']['service-new']
	);
});

serviceUpdate.appendChild(button);

