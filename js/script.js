/*abre e fecha menu quando clicar no icone: menu e x*/

const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');



for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show');
    })
}

/*quando clicar em um item do menu, esconde o menu */
const links = document.querySelectorAll('nav ul li a')

for (const element of links) {
    element.addEventListener('click', function() {
        nav.classList.remove('show');
    })
}

/*mudar o header da página quando der scroll*/


const header = document.querySelector('#header')
const navHeight = header.offsetHeight;

function headerShadow() {

    if (window.scrollY >= navHeight) {
        header.classList.toggle("scroll")

    } else {
        header.classList.remove('scroll')

    }
}
const button = document.querySelector('.back-to-top')

function backtotop() {

    if (window.scrollY >= 560) {
        button.classList.add("show")

    } else {
        button.classList.remove('show')
    }
}

// Caixa de confirmação link
const cards = document.querySelectorAll('.card');
let confirmBox = document.querySelector('#confirm-box .content');



for (let element of cards) {

    element.addEventListener('click', function() {
        try {

            let link = element.querySelector('a').getAttribute('href');
            let content = element;
            const contentSubs = content.innerHTML;
            let title = element.querySelector('h3').innerHTML;

            confirmBox.querySelector('strong').innerHTML = (title);
            confirmBox.querySelector('strong').style.color = 'var(--body-color)'
            confirmBox.querySelector("a#yes").setAttribute('href', link)

            content.innerHTML = '';
            content.append(confirmBox)

            element.id = "confirm-box";
            confirmBox.style.display = "block";
            confirmBox.style.opacity = "1"

            element.addEventListener('mouseleave', function() {
                content.innerHTML = '';
                content.innerHTML = contentSubs;
                element.id = ""
            });
            element.querySelector('a#no').addEventListener('click', function() {
                element.dispatchEvent(new Event('mouseleave'))
            });
        } catch (error) {}
    });
}



// Testimonials Swiper slider
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    init: true,
    slidesPerView: 1,
    direction: 'horizontal',

    pagination: {
        el: '.swiper-pagination',
    },


    // If we need pagination

    mousewheel: true,
    keyboard: true,

    breakpoints: {
        767: {
            slidesPerView: 4,
            setWrapperSize: true
        }
    }
});

// ScrollReveal: Mostrar elementos quando der scroll na página

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})


scrollReveal.reveal(`#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card, #tesimonials header, #testimonials .testimonials, #contact .text, #contact .links, footer .brand, footer .social`, { interval: 100 });

// Menu ativo conforme a seção visível na página
const sections = document.querySelectorAll('section[id]');

function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

        if (checkpointStart && checkpointEnd) {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')

        } else {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')

        }
    }
}

window.addEventListener('scroll', function() {
    backtotop();
    headerShadow()
    activateMenuAtCurrentSection()
})