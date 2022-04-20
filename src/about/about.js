import pizzaChef from '../images/pizzaChef.jpeg'

function about() {
    const content = document.querySelector('#content');

    const aboutContent = document.createElement('div');
    aboutContent.id = 'aboutContent'

    const mario = new Image();
    mario.src = pizzaChef;
    aboutContent.appendChild(mario);

    const aboutText = document.createElement('div');
    aboutText.id = 'aboutText'

    const aboutText1 = document.createElement('h3');
    aboutText1.textContent = `About Us`;
    aboutText.appendChild(aboutText1);

    const aboutText2 = document.createElement('p');
    aboutText2.textContent = `After an illustrious career as a plumber, Mario decided to take his savings and open a pizza shop`;
    aboutText.appendChild(aboutText2);

    const aboutText3 = document.createElement('p');
    aboutText3.textContent = `Although faced with tough beginnings, Mario's is now one of the top pizza joints in Viet Nam. Come and try for yourself!`;
    aboutText.appendChild(aboutText3);

    aboutContent.appendChild(aboutText);

    content.appendChild(aboutContent);

}

export default about;