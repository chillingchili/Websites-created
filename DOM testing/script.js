let change = document.getElementById('change');
let count = document.getElementById('count');
let x = 0;
let c = 0

function changeMe() {
    // change.innerHTML = "I got caught";
    c++;
    addCount();
}

function addCount() {
    count.innerHTML = ""
    count.innerHTML += `Count: ${c}`
}

document.getElementById("change").addEventListener("mouseover", function() {
    let j = Math.floor(Math.random() * 1000) + 1;
    let y = Math.floor(Math.random() * 900) + 1;
    change.style.left = j + "px";
    change.style.top = y + "px";
    x++;
    switch (x) {
        case 10:
            change.innerHTML = "Why so Slow?";
            break;
        case 50:
            change.innerHTML = "That's all you've got?";
        default:
    }
});