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

const sec_nav = document.createElement('div');
sec_nav.classList.add('sec-nav');

// right nav buttons
const sec_nav_button_groups = document.createElement('div');
sec_nav_button_groups.classList.add('sec-btn-groups');
// button projects
const btn_projects = document.createElement('button');
btn_projects.textContent = 'Data Projects';
sec_nav_button_groups.appendChild(btn_projects);
// button web
const btn_webdev = document.createElement('button');
btn_webdev.textContent = 'Web Dev';
sec_nav_button_groups.appendChild(btn_webdev);
// button hardware
const btn_hardware = document.createElement('button');
btn_hardware.textContent = 'Hardware Dev';
sec_nav_button_groups.appendChild(btn_hardware);
// button publication
const btn_publication = document.createElement('button');
btn_publication.textContent = 'Publications';
sec_nav_button_groups.appendChild(btn_publication);
// button Misc.
const btn_misc = document.createElement('button');
btn_misc.textContent = 'Misc.';
sec_nav_button_groups.appendChild(btn_misc);

sec_nav.appendChild(sec_nav_button_groups);
// add the nav bar to the main content
content.appendChild(sec_nav);

// add a main content
const main_content = document.createElement('div');
main_content.classList.add('main-content');  // will be set as flex box

const left_content = document.createElement('div');
main_content.appendChild(left_content);

