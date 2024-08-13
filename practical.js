// manipulating a div
// without doing manually in HTML it is done by using JS

const element = document.createElement('div');
element.innerText = "Institute";
element.innerHTML = `<p> Sanuri </p>`
document.getElementById('Pace').append(element)
document.getElementsByClassName("practical").append(element)