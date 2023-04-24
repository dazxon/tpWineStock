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

function maxFullDate(e) {
    if (e.value > getFullDate()) {
        e.value = getFullDate()
    }
}

function getFullDate() {
    let currentDate = new Date()
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    const dateString = `${year}-${month}-${day}`;
    
    return dateString
}
