// this is for the title of the document; it gets the current date and time and updates it every second
setInterval(() => {
    document.title = getCurrentDateTime();
}, 1000);

//this one is used for an input, to start the initial value at current year
let cont = 0;
function maxYear(e) {
    let currYear = new Date().getFullYear();
    e.max = currYear;

    function x() {
        if (cont === 0) {
            cont++;
            return currYear;
        } else if (e.value < 1930) {
            return 1930;
        } else if (e.value <= currYear) {
            return e.value;
        } else {
            return currYear;
        }
    }

    e.value = x();
}

//this one is to fix the max date as current date
function maxFullDate(e) {
    if (e.value > getFullDate()) {
        e.value = getFullDate();
    }
}

//this function returns the current full date in a string year-month-day
function getFullDate() {
    let currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const day = ("0" + currentDate.getDate()).slice(-2);
    const dateString = `${year}-${month}-${day}`;

    return dateString;
}

//this function receives a dom element start the value on 1
let cont1 = 0;
function initialQuantity(e) {
    const INITIAL_VALUE = 1;
    if (cont1 === 0) {
        e.value = INITIAL_VALUE;
        cont1++;
    }
}

//this function receives a dom element and start the value on the current year
let cont2 = 0;
function intialYear(e) {
    const currYear = new Date().getFullYear();
    if (cont2 === 0) {
        e.value = currYear;
        cont2++;
    }
}

// this code snippet handles the label and input for adding a new WINE TYPE if it is not already included in the select list
function handleSelectWineType(e) {
    let elements = document.getElementsByName("newType");
    if (e.value === "addType") {
        elements.forEach((i) => {
            i.style.display = "block";
            i.required = true;
        });
    }
    if (e.value !== "addType") {
        elements.forEach((i) => {
            i.style.display = "none";
            i.required = false;
        });
    }
}

// this code snippet handles the label and input for adding a new BODEGA if it is not already included in the select list
function handleSelectBodega(e) {
    let elements = document.getElementsByName("newBodega");
    if (e.value === "addBodega") {
        elements.forEach((i) => {
            i.style.display = "block";
            i.required = true;
        });
    }
    if (e.value !== "addBodega") {
        elements.forEach((i) => {
            i.style.display = "none";
            i.required = false;
        });
    }
}

//this function gives the actual date-time and updates every second
function getCurrentDateTime() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var dateString = day + "/" + month + "/" + year;
    var timeString = hours + ":" + minutes + ":" + seconds;
    return dateString + " - " + timeString;
}
