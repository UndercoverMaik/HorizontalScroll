import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'


const stickySections = [...document.querySelectorAll('.sticky')]
let images =[
    'https://dr.savee-cdn.com/things/6/2/0eed79df50ec0a3638259f.webp',
    'https://dr.savee-cdn.com/things/6/4/7e823751fc4f36438f5d8b.webp',
    'https://dr.savee-cdn.com/things/5/9/71be19718d6b1b59078829.webp',
    'https://dr.savee-cdn.com/things/6/1/e35e3897636ac8f3081b2d.webp'
]

images.forEach(items => {
    stickySections.forEach(section => {
        let image = document.createElement('img');
        image.src = [items];
        section.querySelector('.scroll_section').appendChild(image)
    })
})


window.addEventListener('scroll', (e) => {
    for(let i = 0; i < stickySections.length; i++){
        transform(stickySections[i])
    }
})


function transform(section){
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section')
    let perc =  ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    perc = perc < 0 ? 0 : perc > 400 ? 400 : perc
    scrollSection.style.transform = `translate3d(${-(perc)}vw, 0, 0)`
}