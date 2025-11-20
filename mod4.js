async function fetchData() { // note I did the form way of fetchign the api too, but you just have to trust me, it was just a copy and paste from the assignment after all.
  query = document.getElementById("query").value;
  await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then(response => response.json())
    .then(data => collect(data))
    .catch(error => console.error('Error:', error)) //found a neat way to not use try catch nest
}

async function collect(json) {
  document.getElementById("output").innerHTML = ``
  article = document.createElement('article')
  await json.forEach(json => {
    url = json["show"].url
    sname = json["show"].name
    img = json["show"].image?.medium
    desc = json["show"].summary
    article.innerHTML +=
      `
        <h2>name: ${sname}</h2>
        <a target="_blank" href="${url}">url: ${url}</a>
        <img src="${img}"/>
        <div>summary: ${desc}</div>
    `
    document.getElementById("output").appendChild(article
    )
  });
}
//NOTE: now I ran out of effort to do the rest. 12 points!!!
