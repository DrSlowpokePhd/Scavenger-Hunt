function submitForms() {
    document.forms["Submit"]["Group"].submit();
    document.forms["Submit"]["Gucci Gang"].submit();
}
function MyFunction() {
    var x = document.forms["Submit"]["Gucci Gang"].value;
    var y = document.forms["Submit"]["Group"].value;
    if (x == "Reverse Engineering" || x == "reverse engineering") {
        if (y == 'D' || y == 'F' || y == 'J') {
            alert("Stones under stairs");
        }
        else if (y == 'C' || y == 'A' || y == 'G') {
            window.location.replace("/PinkBush.html");
        }
        else if (y == 'B' || y == 'E') {
            alert("Head to the place above where the food is made");
        }

    } else {
        alert("Sorry, please try again");
    }
}
function RevealHint() {
    if (document.getElementById('clue').style.color == 'pink') {
        document.getElementById('clue').style.color = 'black';
    }
}
