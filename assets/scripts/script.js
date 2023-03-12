
//Typing text animation
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.20em solid #00bd95}";
    document.body.appendChild(css);
};

//script for testimonials
const testimonialContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Awlad Hossain',
        position: 'Marketing',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
        text: "Tanvir's exceptional design skills and dedication to his craft truly impressed me! He was a pleasure to work with and took the time to understand my unique needs and preferences, resulting in a beautiful, eye-catching flyer that perfectly captured the essence of my brand. I was blown away by his creativity and attention to detail, and would highly recommend his services to anyone in need of top-quality design work."
    },
    {
        name: 'Abu Bakar',
        position: 'CEO & Founder',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: "Tanvir's exceptional talent and professionalism truly set him apart from others in the web design industry. He was an absolute pleasure to work with and took the time to listen to our needs and preferences, resulting in a website that perfectly captured our vision. We were blown away by the fresh, modern look he created for our site. We highly recommend Tanvir for anyone in need of a top-notch web design service!"
    },
    {
        name: 'Mahfuzur Rahman',
        position: 'Businessman',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
        text: "Tanvir's web development service was outstanding! He was highly professional, attentive, and delivered a visually impressive and user-friendly website. His attention to detail and ability to understand my needs and preferences truly set him apart from others in the industry. I'm extremely satisfied with the final product and highly recommend Tanvir for top-quality web development services."
    },
    {
        name: 'Sumama',
        position: 'Graphic Designer',
        photo: 'https://randomuser.me/api/portraits/women/43.jpg',
        text: "We couldn't be more thrilled with the web design services provided by Tanvir. He was professional, responsive and truly listened to our ideas and preferences. The website he created was not only visually stunning, but also easy to navigate and use. Tanvir's talent and dedication to his craft is truly impressive, and we would highly recommend him to anyone in need of a top-quality website."
    },
    {
        name: 'Ishtiaq Ahmed',
        position: 'Shop Owner',
        photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
        text: "Tanvir's logo design service was exceptional! He was incredibly attentive to my needs and preferences, and delivered a design that perfectly reflected my brand's vision and values. His attention to detail and creativity truly impressed me, and I was thrilled with the final product. I would highly recommend Tanvir to anyone in need of a top-quality logo design service."
    }
]

let idx = 1

function upadteTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(upadteTestimonial, 10000)