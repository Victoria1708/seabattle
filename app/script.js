const battleFieldTemplate = getTemplate('battlefield-tmpl');

let gridRows = [];
for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++){
        let objrows = {row: r, col: c};
        gridRows.push(objrows);
    }
}
const temp = battleFieldTemplate({
    rows: gridRows,
}
);

console.log(temp);

document.querySelector('#battlefield').innerHTML += temp;

function getTemplate(templateId) {
    const templateString = document.getElementById(templateId).innerHTML;
    return Handlebars.compile(templateString);
}







