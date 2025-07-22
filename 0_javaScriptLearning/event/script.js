const ul = document.querySelector('ul');
const button = document.querySelector('button');
const eventElement = document.querySelector('.clickMe');

button.addEventListener('click', function () {
    let li = document.createElement('li');
    li.textContent = "Something new created";

    li.addEventListener('click', function (e) {
        e.target.remove();
    });

    ul.append(li); // add in last
    // ul.prepend(li); // add in starting
});

eventElement.addEventListener('click', function () {
    console.log("clickeddd");
});



// Event Bubbling and Delegation   