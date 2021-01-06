const songsURL = "http://localhost:3000/songs";

fetch(songsURL)
  .then((response) => response.json())
  .then((songs) => {
    songs.forEach((song) => {
      let songList = document.querySelector(".mysonglist");
      let li = document.createElement("li");
      li.textContent = `${song.title} ${song.key} ${song.tempo}`;
      songList.append(li);
    });
  });

const newSongForm = document.querySelector(".addsongform form");

newSongForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  fetch("http://localhost:3000/songs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: formData.get("title"),
      key: formData.get("key"),
      tempo: formData.get("tempo"),
      released: formData.get("released"),
      album: formData.get("album"),
      year: formData.get("year"),
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    });

  event.target.reset();
});
