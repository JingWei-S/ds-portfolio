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
left_content.classList.add('left-intro');
main_content.appendChild(left_content);

const intro_large = document.createElement('p');
intro_large.textContent = 'Jing Wei - A Tech All-rounder';
left_content.appendChild(intro_large);

const intro_mid = document.createElement('p');
intro_mid.textContent = 'PhD Candidate @ University of Melbourne';
left_content.appendChild(intro_mid);

const intro_small = document.createElement('p');
intro_small.textContent = "Over the past 7 years, my research has focused on areas such as wearable technology, contactless sensing, voice assistants, and most recently - ChatGPT. With a diverse skill set in software, hardware, and data analysis, I am dedicated to designing intuitive and user-friendly solutions that enhance the way we interact with technology.";
left_content.appendChild(intro_small);

const download_cv = document.createElement('button');
download_cv.textContent = 'Download my CV';
left_content.appendChild(download_cv);

download_cv.addEventListener('click', () => {
    window.location.href = './images/speaker_vis.png';
})

content.appendChild(main_content);

// the right image part
const right_content = document.createElement('div');
right_content.classList.add('right-img');
main_content.appendChild(right_content);

const image_src = ['./images/chatbot.png', './images/speaker.png', './images/delay.png',
                    './images/wearable.png', './images/respiration.png', './images/web.png'];
const image_project = ['GPT-3 Chatbot', 'Proactive Smart Speaker', 'Speaker Network Delay Analysis',
                    'Sleep Monitoring Through Wearable', 'Wireless Respiration Tracking', 'Web Development Projects'];

for (let i = 0; i < 6; i++) {
    const img_container = document.createElement('div');
    const img_display = document.createElement('img');
    img_display.src = image_src[i];
    const overlay = document.createElement('div');
    const img_desp = document.createElement('p');
    img_desp.textContent = image_project[i];
    overlay.appendChild(img_desp);
    overlay.classList.add('overlay');
    img_container.appendChild(img_display);
    img_container.appendChild(overlay);
    right_content.appendChild(img_container);
}


const footer = document.querySelector('.footer');

const footer_icon = ['./images/github.svg', './images/linkedin.svg', './images/school.svg', './images/twitter.svg'];
const footer_url = ['https://github.com/JingWei-S', 'https://www.linkedin.com/in/jing-wei-3a846b13b/', 'https://scholar.google.com.au/citations?user=z45wQDYAAAAJ&hl=en', 'https://twitter.com/JingggWei'];

for (let i = 0; i < 4; i++) {
    const icon_a = document.createElement('a');
    icon_a.href = footer_url[i];
    const icon_logo = document.createElement('img');
    icon_logo.src = footer_icon[i];
    icon_a.appendChild(icon_logo);
    footer.appendChild(icon_a);
}


