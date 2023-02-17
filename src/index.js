// get the content element
const content = document.querySelector('.content');

// create the top navigation bar
const top_nav = document.createElement('div');
top_nav.classList.add('top-nav');
content.appendChild(top_nav);

// icon?
const icon = document.createElement('p');
icon.textContent = 'Jinggg';
top_nav.appendChild(icon);

// right nav buttons
const top_nav_button_groups = document.createElement('div');
top_nav_button_groups.classList.add('top-btn-groups');
// button home
const btn_home = document.createElement('button');
btn_home.textContent = 'Home';
top_nav_button_groups.appendChild(btn_home);
// button about
const btn_about = document.createElement('button');
btn_about.textContent = 'About';
top_nav_button_groups.appendChild(btn_about);
// button contact
const btn_contact = document.createElement('button');
btn_contact.textContent = 'Contact';
top_nav_button_groups.appendChild(btn_contact);

top_nav.appendChild(top_nav_button_groups);
// add the nav bar to the main content
content.appendChild(top_nav);