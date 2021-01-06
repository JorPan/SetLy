console.log("hi");

const songsURL = "http://localhost:3000/songs";

fetch(songsURL)
  .then((response) => response.json())
  .then(console.log);
