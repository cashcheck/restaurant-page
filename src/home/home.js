import heroFood from '../images/heroFood.jpeg'


//creates navBar

function nav () {
    const content = document.querySelector('#content');
    const navContainer = document.createElement('div');
    navContainer.id = 'navBar';

//creates each of the buttons

    const menu = document.createElement('button');
    menu.classList.add('navButton');
    menu.id='menu';
    menu.textContent = 'Menu';
    navContainer.appendChild(menu);

    const homeButton = document.createElement('button');
    homeButton.classList.add('navButton');
    homeButton.id='homeButton';
    homeButton.textContent = `Mario's`;
    navContainer.appendChild(homeButton);

    const about = document.createElement('button');
    about.classList.add('navButton');
    about.id='about';
    about.textContent = 'About';
    navContainer.appendChild(about);

    content.appendChild(navContainer);
}

//creates first section of homepage

function home() {
    const content = document.querySelector('#content');

    const homeContent = document.createElement('div');
    homeContent.id = 'homeContent';

    const pizza = new Image();
    pizza.src = heroFood;
    homeContent.appendChild(pizza);

    const homeText = document.createElement('div');
    homeText.id = 'homeText'

    const homeText1 = document.createElement('h3');
    homeText1.textContent = `Wood Fired Pizza`;
    homeText.appendChild(homeText1);

    const homeText2 = document.createElement('p');
    homeText2.textContent = `Opening hours: 11am - 3pm, 7pm - 11pm.`;
    homeText.appendChild(homeText2);

    const homeText3 = document.createElement('p');
    homeText3.textContent = `12 Bowser Avenue, Hanoi, Viet Nam.`;
    homeText.appendChild(homeText3);

    homeContent.appendChild(homeText);

    content.appendChild(homeContent);

}

export {home, nav};