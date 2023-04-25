//this one is used for an input, to start the initial value at current year
let cont = 0
function maxYear(e) {
    let currYear = new Date().getFullYear()
    e.max = currYear

    function x() {

        if (cont === 0) {
            cont++
            return currYear
        } else if (e.value < 1930) {
            return 1930
        } else if (e.value <= currYear) {
            return e.value
        } else {
            return currYear
        }
    }

    e.value = x()
}

//this one is to fix the max date as current date
function maxFullDate(e) {
    if (e.value > getFullDate()) {
        e.value = getFullDate()
    }
}

//this function returns the current full date in a string year-month-day
function getFullDate() {
    let currentDate = new Date()
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    const dateString = `${year}-${month}-${day}`;
    
    return dateString
}

//this function receives a dom element start the value on 1
let cont1 = 0
function initialQuantity(e) {
    const INITIAL_VALUE = 1
    if (cont1 === 0) {
        e.value = INITIAL_VALUE
        cont1++
    }
}

//this function receives a dom element and start the value on the current year
let cont2 = 0
function intialYear(e) {
    const currYear = new Date().getFullYear()
    if (cont2 === 0) {
        e.value = currYear
        cont2++
    }
}

//this handle the label and input to add a wine type if not in select list
function handleSelect(e) {
    let elements = document.getElementsByName('newType')
    if (e.value === 'addType') {
        elements.forEach(i => {
            i.style.display = "block"
            i.required = true
        });
    }
    if(e.value !== 'addType'){
        elements.forEach(i => {
            i.style.display = "none"
            i.required = false
        });
    }
}
