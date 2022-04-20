import {home, nav} from './home/home.js';
import menu from './menu/menu.js';
import about from './about/about.js';
import './style.css';


nav();
home();

//function to remove all nodes except nav bar (last one)

function removeAllChildNodes(parent) {
    while (parent.childNodes.length > 1) {
        parent.removeChild(parent.lastChild);
    }
}

const menuButton = document.querySelector('#menu')

menuButton.addEventListener('click', function() {
    const content = document.querySelector(`#content`);

    removeAllChildNodes(content);

    menu();
}
)

const homeButton = document.querySelector('#homeButton')

homeButton.addEventListener('click', function() {
    const content = document.querySelector(`#content`);

    removeAllChildNodes(content);
    
    home();
}
)

const aboutButton = document.querySelector('#about')

aboutButton.addEventListener('click', function() {
    const content = document.querySelector(`#content`);

    removeAllChildNodes(content);
    
    about();
}
)
