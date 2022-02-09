const dogs = [
    {
        img: './img/dog1.jpg',
        name: 'Tommy',
        dog: 'Delmon',
        description: 'Delmon is a breed of dog that has a great adaptation to any type of environment. He is a great companion as well as a great guardian. They are dogs that every superhero wants to have.',
        color: '#b5744a'
    },
    {
        img: './img/dog2.jpg',
        name: 'Danka',
        dog: 'French Bulldog',
        description: 'The French bulldog (or Frenchie) is a sturdy, compact dog breed with a large head, short snout, and bat-like ears that was, of course, first bred in France. This breed is lively, lovable, and playful.',
        color: '#584b43'
    },
    {
        img: './img/dog3.jpg',
        name: 'Marley',
        dog: 'Weimaraner',
        description: "The typical Weimaraner is friendly, fearless, alert, and obedient, all traits that make him an excellent companion and watchdog. On the flip side, he's assertive, smart, restless, and willful. This is a dog who will take over the household if you give him half a chance. He'll chew, bark, chase cats, and steal the roast off the counter — if you don't give him the socialization, experienced trainer to avoid serious behavior problems such as biting.",
        color: '#497426'
    }
];

let currentDog = 0;

const dogImg = document.querySelector('#dog-img');
const dogName = document.querySelector('.name-div');
const dogType = document.querySelector('.dog-div');
const dogDesc = document.querySelector('.description-div');
const btnPrev = document.querySelector('.prev-btn');
const btnNext = document.querySelector('.next-btn');
const btnRandom = document.querySelector('.btn-random');
const lines = document.querySelectorAll('.line');
const footer = document.querySelector('#footer');


btnPrev.addEventListener('click', () => {
    currentDog--;
    if(currentDog < 0){
        currentDog = dogs.length - 1;
    }
    showDog(currentDog);
});

btnNext.addEventListener('click', () => {
    currentDog++;
    if(currentDog > dogs.length - 1){
        currentDog = 0;
    }
    showDog(currentDog);
});

btnRandom.addEventListener('click', () => {
    currentDog = Math.floor(Math.random() * dogs.length);
    showDog(currentDog);
});

function showDog(index){
    const dog = dogs[index];
    dogImg.src = dog.img;
    dogName.textContent = dog.name;
    dogType.textContent = dog.dog;
    dogDesc.textContent = dog.description;

    changeColors(dog.color);
}

function changeColors(color){
    dogType.style.color = color;
    btnPrev.style.color = color;
    btnNext.style.color = color;
    btnRandom.style.backgroundColor = color;
    footer.style.backgroundColor = color;

    btnPrev.classList.add("btn");
    btnNext.classList.add("btn");
    btnRandom.classList.add("btn");

    lines.forEach(element => {
        element.style.backgroundColor = color;
    });
}

window.onload(showDog(currentDog));



