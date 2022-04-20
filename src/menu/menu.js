import pizzaImage from '../images/pizza.jpeg';
import pizzaImage1 from '../images/pizza1.jpeg';
import pizzaImage2 from '../images/pizza2.jpeg';



function pizza() {

const content = document.querySelector('#content');

const menuContainer = document.createElement('div');
menuContainer.id = 'menuContainer';


const pizzaContainer = document.createElement('div');
pizzaContainer.classList.add('foodContainer');

//pizza 1

//image

const pizzaImg = new Image();
pizzaImg.src = pizzaImage;
pizzaContainer.appendChild(pizzaImg);

//text

const pizzaText = document.createElement('div');
pizzaText.classList.add('foodText');

const pizzaName = document.createElement('h5');
pizzaName.textContent = 'Parma';
pizzaText.appendChild(pizzaName);

const pizzaDescription = document.createElement('p');
pizzaDescription.textContent = 'Tomato sauce, mozarella cheese, parma ham, fresh burata.';
pizzaText.appendChild(pizzaDescription);

pizzaContainer.appendChild(pizzaText);

menuContainer.appendChild(pizzaContainer);

//pizza 2

const pizzaContainer1 = document.createElement('div');
pizzaContainer1.classList.add('foodContainer');

//text

const pizzaText1 = document.createElement('div');
pizzaText1.classList.add('foodText');

const pizzaName1 = document.createElement('h5');
pizzaName1.textContent = 'Margherita';
pizzaText1.appendChild(pizzaName1);

const pizzaDescription1 = document.createElement('p');
pizzaDescription1.textContent = 'Tomato sauce, mozarella cheese, fresh basil.';
pizzaText1.appendChild(pizzaDescription1);

pizzaContainer1.appendChild(pizzaText1);

//img

const pizzaImg1 = new Image();
pizzaImg1.src = pizzaImage1;
pizzaContainer1.appendChild(pizzaImg1);

menuContainer.appendChild(pizzaContainer1);

content.appendChild(menuContainer);

//pizza 3

const pizzaContainer2 = document.createElement('div');
pizzaContainer2.classList.add('foodContainer');

//image

const pizzaImg2 = new Image();
pizzaImg2.src = pizzaImage2;
pizzaContainer2.appendChild(pizzaImg2);

//text

const pizzaText2 = document.createElement('div');
pizzaText2.classList.add('foodText');

const pizzaName2 = document.createElement('h5');
pizzaName2.textContent = 'Meat Lovers';
pizzaText2.appendChild(pizzaName2);

const pizzaDescription2 = document.createElement('p');
pizzaDescription2.textContent = 'Milano salami and chorizo atop our classic Margherita';
pizzaText2.appendChild(pizzaDescription2);

pizzaContainer2.appendChild(pizzaText2);

menuContainer.appendChild(pizzaContainer2);

}






function menu() {

pizza();

}

export default menu;