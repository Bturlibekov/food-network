const header = document.querySelector('.header')
const body = document.querySelector('body')

window.addEventListener('scroll', () => {
  checkScroll()
})

window.addEventListener('DOMContentLoaded', () => {
  checkScroll()
})

const checkScroll = () => {

  const scrollPos = window.scrollY
  if (scrollPos > 0) {
    header.classList.add('fixed')
    body.classList.add('padding')
  } else {
    header.classList.remove('fixed')
    body.classList.remove('padding')
  }
}

const section = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('header nav ul li a')

window.onscroll = () => {

  section.forEach(sec => {

    const top = window.scrollY
    const height = sec.offsetHeight
    const offset = sec.offsetTop - 150
    const id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active')
        document.querySelector('header nav ul li a[href*='+id+']').classList.add('active')
      })
    }
  })
}

const burger = document.querySelector('.burger')
const nav = document.querySelector('.header-menu nav')

burger.addEventListener('click', () => {
  nav.classList.toggle('active')
  document.body.classList.toggle('lock')
})

const rewiewSlider = new Swiper('.list-cards', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //   autoplay: {
  //   delay: 3000,
  // },
  slidesPerView: 1,
})