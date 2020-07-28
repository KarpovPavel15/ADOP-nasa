function hamburgerHandler() {
    let x = document.getElementById("hamburger__links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// navigation
let menuItems = document.getElementsByClassName('navigation__link');
let humbItems = document.getElementsByClassName('hamburger__link');

let onClick = function (event) {
    event.preventDefault();

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove('active');
    }

    for (let i = 0; i < humbItems.length; i++) {
        humbItems[i].classList.remove('active');
    }

    event.currentTarget.classList.add('active');
};

for (let item of menuItems) {
    item.addEventListener("click", function () {

        const blockID = item.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
for (let item of humbItems) {
    item.addEventListener("click", function (e) {
        e.preventDefault();

        const blockID = item.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", onClick);
}
for (let i = 0; i < humbItems.length; i++) {
    humbItems[i].addEventListener("click", onClick);
}

