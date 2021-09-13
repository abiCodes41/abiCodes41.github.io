// selecting and storing targets
let projectOne = document.getElementById('red-bull');
let projectTwo = document.getElementById('web-dev');
let projectThree = document.getElementById('savory-sandwiches');
let aboutImage = document.getElementById('about-image');

// event handler function
const displayProject = (e) => {
    
    // toggle - shows project
    if (e.target.nextElementSibling.style.display === 'none') {
        e.target.nextElementSibling.style.transition = 'all 300ms ease-out';
        e.target.nextElementSibling.style.display = 'block';

        // allows visual transition of opacity
        setTimeout(function() {
            e.target.nextElementSibling.style.opacity = '1';
        }, 50);

        // changes arrow to check mark
        e.target.firstChild.innerHTML = '✔';

    //toggle - hides project
    } else {
        e.target.nextElementSibling.style.opacity = '0';

        setTimeout(function() {
            e.target.nextElementSibling.style.display = 'none';
        }, 500);
    }
}

// listening and handling events to targets
projectOne.addEventListener('click', displayProject)
projectTwo.addEventListener('click', displayProject)
projectThree.addEventListener('click', displayProject)

aboutImage.onclick = function() {
    aboutImage.nextElementSibling.style.display = 'block';
}