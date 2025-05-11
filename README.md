ShopZone – eCommerce Web Application
Live Site: https://cyusaalain.github.io/shopzone/

📌 Project Overview
ShopZone is a responsive, multi-page eCommerce web application built using HTML5, CSS3, and JavaScript. It demonstrates modern web development fundamentals such as interactive UI components, localStorage for cart persistence, and responsive design for desktop and mobile devices.

🚀 Features
✅ Responsive layout for all screen sizes

✅ Multi-page navigation (Home, Products, Cart, Contact)

✅ Carousel on Home page with center zoom effect

✅ Individual and bulk product cart management

✅ Cart persistence using localStorage

✅ Contact form validation and alert

✅ Product search/filter functionality

✅ Animated sliding carousel with forward/backward arrows

✅ Deployed on GitHub Pages

🧱 Tech Stack
Layer	Tech Used
Frontend	HTML5, CSS3, JavaScript
Animations	CSS Transitions, JS DOM manipulation
Deployment	GitHub Pages
Version Control	Git, GitHub

shopzone/
│
├── index.html            # Home Page with animated carousel
├── products.html         # Product listing with filtering
├── product.html          # Single product detail (optional)
├── cart.html             # Shopping cart page with item display
├── contact.html          # Contact form with JS validation
│
├── css/
│   └── style.css         # All styles and media queries
│
├── js/
│   └── main.js           # All JS interactivity, cart logic, carousel logic
│
├── assets/
│   └── images/           # Product images
│
└── README.md             # Project documentation
Key JavaScript Features
Carousel Behavior
Three items slide at a time

Center item zooms (scale(1.15))

Uses transform: translateX(...) for real sliding

Loops infinitely using array rotation

Cart Logic
Products stored as {name, price, img}

Stored in localStorage

Add, remove individually, or clear all

Cart displayed in a dynamic list with total calculation

Product Filter
input event listener filters products live

Search by name in products.html

Contact Form
Basic onsubmit validation

Alert confirms submission with user's name

How to Run Locally
git clone https://github.com/your-username/shopzone.git
cd shopzone
# Open index.html in your browser
Deployment
Deployed on GitHub Pages:
URL: https://cyusaalain.github.io/shopzone/
