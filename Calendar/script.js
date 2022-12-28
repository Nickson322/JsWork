function getDay(date){
    let day = date.getDay();
    if (day == 0){
        day = 7;
    }
    return day - 1;
}

function createCalendar(elem, year, month){
    elem = document.querySelector(elem);
    let mon = month - 1;
    let d = new Date(year, mon);

    
    let table = 
    '<table><caption>' + month + '.' + year +'</caption><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
          table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
      }

    table += '</tr></table>';

    elem.innerHTML = table;

}
createCalendar('.calendar1', 2022, 1);
createCalendar('.calendar2', 2022, 2);
createCalendar('.calendar3', 2022, 3);
createCalendar('.calendar4', 2022, 4);
createCalendar('.calendar5', 2022, 5);
createCalendar('.calendar6', 2022, 6);
createCalendar('.calendar7', 2022, 7);
createCalendar('.calendar8', 2022, 8);
createCalendar('.calendar9', 2022, 9);
createCalendar('.calendar10', 2022, 10);
createCalendar('.calendar11', 2022, 11);
createCalendar('.calendar12', 2022, 12);