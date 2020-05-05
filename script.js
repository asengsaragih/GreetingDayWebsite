function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('text-time').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function getCurrentDay() {
    var today = new Date();
    var h = today.getHours();
    var nameRaw = getLinkName();
    var name = "";
    var greeting = "";

    if (nameRaw == null || nameRaw == "") {
        name = "Tanpa Nama";
    } else {
        name = nameRaw;
    }

    if (h >= 5 && h <= 10) {
        greeting = "Good Morning";
    } else if (h >= 11 && h <= 15) {
        greeting = "Good Afternoon";
    } else if (h >= 16 && h <= 18) {
        greeting = "Good Evening";
    } else {
        greeting = "Good Night";
    }

    document.getElementById('text-greeting').innerHTML = greeting + " " + capitalizeFirstLetter(name);
}

function getLinkName() {
    var name = location.search.substring(1);
    return name;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}