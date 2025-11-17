function appendArrayElements() {
  const li1 = document.createElement('li');
  li1.textContent = "First";
  const li2 = document.createElement('li');
  li2.textContent = "Second";
  const li3 = document.createElement('li');
  li3.textContent = "Third";
  const ul = document.querySelector('#target')
  ul.appendChild(li1)
  ul.appendChild(li2)
  ul.appendChild(li3)
}
function addElements() {
  const ul = document.querySelector('#target')
  const element = `<li>First</li>
                  <li>Second</li>
                  <li>Third</li>`;
  ul.innerHTML = element;
}
function useNamesFlat() {
  names = ["Joshua", "Patricia", "Agatha"]
  const ul = document.querySelector('#target')
  // no reason to use iterator variables
  names.forEach(name => {
    ul.innerHTML += `<li>${name}</li>` //got em
  });
}
function useNames() {
  names = ["Jameson", "Pam", "Jack"]
  const ul = document.querySelector('#target')
  // no reason to use iterator variables
  names.forEach(name => {
    let li = document.createElement('li');
    li.textContent = name
    ul.appendChild(li)
  });
}
// had to use array, hence the low amount of extremely useful extra parameters
function picAr(picArr) {
  const title = picArr[0];
  const imgSrc = picArr[1];
  const imgAlt = picArr[2];
  const caption = picArr[3];
  const paperText = picArr[4];
  //create element failed to create the article item
  const article = document.querySelector('.card');
  article.innerHTML =
    `
    <h2>${title}</h2>
    <figure>
      <img src="${imgSrc}" alt="${imgAlt}">
      <figcaption>${caption}</figcaption>
    </figure>
    <p>${paperText}</p>
  `
}
function Buttoninator() {
  alert("Ouch");
}
function Calculate() {
  let val1 = document.getElementById("first").value
  let val2 = document.getElementById("second").value
  const operator = document.getElementById("dropdown").value
  let sum = 0;
  switch (operator) {
    case "add":
      sum = parseFloat(val1) + parseFloat(val2) // the only one that needs parsing aparently
      break;
    case "sub":
      sum = val1 - val2
      break;
    case "mult":
      sum = val1 * val2
      break;
    case "div":
      sum = val1 / val2
      break
  }
  document.getElementById("result").innerText = sum;
}

addElements()
appendArrayElements()
useNames()
useNamesFlat()
//what abeautiful array, with zero flaws and perfect reusability. Oh the extent of my generosity for this assignment
picAr(["SwawS", "Background.png", "Image", "Beautiful Scenery From A Better Time", "Lorem ipsum dolor..."])
