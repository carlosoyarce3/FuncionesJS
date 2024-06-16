let color = "";
const box = document.getElementById('key');
const box2 = document.getElementById('key2');

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = "pink";
        box.style.backgroundColor = color;
    } else if (event.key === 's') {
        color = "orange"
        box.style.backgroundColor = color;
    } else if (event.key === 'd') {
        color = "lightblue"
        box.style.backgroundColor = color;
    }
    })

    document.addEventListener('keydown', function (event) {
        if (event.key === 'q') {
            color = "purple";
            box2.style.backgroundColor = color;
        } else if (event.key === 'w') {
            color = "gray"
            box2.style.backgroundColor = color;
        } else if (event.key === 'e') {
            color = "brown"
            box2.style.backgroundColor = color;
        }
        })