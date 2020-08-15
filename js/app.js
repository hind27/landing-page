/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section')
const navList = document.getElementById('navbar__list')


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
 const navBuilder = ()=>{
     let navul ='';
     sections.forEach(section =>{
         const sectionID = section.id;
         const sectionData = section.dataset.nav;
         navul +=`<li><a class="menu__link" href="#${sectionID}">${sectionData}</a></li>`
     });
     //append elements to navbar
     navList.innerHTML =navul;
 };

 navBuilder();


// getting the largest value that's less or equal to the number
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};
// Add class 'active' to section when near top of viewport

// remove the active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
};
// adding the active class
const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
    };
};
//implementating function

const activeClassAssign = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        removeActive(section);
        addActive(inviewport(),section);
    });
};

window.addEventListener('scroll' , activeClassAssign);



// Scroll to anchor ID using scrollTO event
function smoothScroll() {
    
	const links = document.querySelectorAll('a');

	links.forEach((link) =>
		link.addEventListener('click', function(e) {
			e.preventDefault();

			document.querySelector(this.getAttribute("href")).scrollIntoView({
				behavior: 'smooth'
			})
		})
	);
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


