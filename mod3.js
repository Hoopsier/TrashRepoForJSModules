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

addElements()
appendArrayElements()
