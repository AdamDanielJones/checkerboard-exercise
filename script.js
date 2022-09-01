var randomColor = Math.floor(Math.random()*16777215).toString(16);

// random colors - Feature 2
for(let i = 0; i < 81; i++) {
  var tile = document.createElement('div');
  tile.classList.add('tile');
  tile.style.cssFloat = "left";
  tile.style.minWidth = "11.1%";
  tile.style.paddingBottom = "11.1%";
  if(i % 2 === 0) {
    tile.classList.add('even');
    tile.style.backgroundColor = `#${randomColor}`;

  } else {
    tile.classList.add('odd');
    tile.style.backgroundColor = `#${randomColor}`;
  }
  document.body.appendChild(tile);

}

