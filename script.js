// ==============================
// Welcome Message
// ==============================

window.onload = function () {
    console.log("Welcome to FitZone Gym!");
};

// ==============================
// Smooth Scrolling
// ==============================

document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});

// ==============================
// Scroll Reveal Animation
// ==============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease";

    observer.observe(section);

});

// ==============================
// Animated Counters
// ==============================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.getAttribute("data-target");

            let count = 0;

            const speed = target / 100;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// ==============================
// BMI Calculator
// ==============================

function calculateBMI() {

    let height = document.getElementById("height").value / 100;

    let weight = document.getElementById("weight").value;

    if (height <= 0 || weight <= 0) {

        document.getElementById("result").innerHTML =
            "Please enter valid values.";

        return;

    }

    let bmi = (weight / (height * height)).toFixed(1);

    let status = "";

    if (bmi < 18.5)
        status = "Underweight";

    else if (bmi < 25)
        status = "Normal Weight";

    else if (bmi < 30)
        status = "Overweight";

    else
        status = "Obese";

    document.getElementById("result").innerHTML =
        "Your BMI is <strong>" + bmi + "</strong><br>Status: " + status;

}

// ==============================
// Testimonials Slider
// ==============================

const testimonials = [

    {
        quote: "FitZone Gym completely changed my lifestyle. The trainers are amazing!",
        author: "Ali Khan"
    },

    {
        quote: "The equipment is modern and the environment is very motivating.",
        author: "Ahmed Raza"
    },

    {
        quote: "I lost 12 kg in just four months. Highly recommended!",
        author: "Fatima Noor"
    },

    {
        quote: "Excellent trainers, clean gym, and friendly staff.",
        author: "Usman Tariq"
    }

];

let current = 0;

function changeTestimonial() {

    current++;

    if (current >= testimonials.length)
        current = 0;

    document.getElementById("quote").textContent =
        '"' + testimonials[current].quote + '"';

    document.getElementById("author").textContent =
        "- " + testimonials[current].author;

}

setInterval(changeTestimonial, 4000);