fetch("https://ringsdb.com/api/public/card/01001")
  .then(response => response.json())
  .then(data => {
    const container = document.createElement('div');
    const name = document.createElement('h2');
    name.textContent = data.name;
    const img = document.createElement('img');
    img.src = data.imagesrc ? `https://ringsdb.com/${data.imagesrc}` : '';
    img.alt = data.name;
    container.appendChild(name);
    container.appendChild(img);
    document.body.appendChild(container);
  })
  .catch(error => {
    console.error("Errore nel recupero della carta:", error);
  });