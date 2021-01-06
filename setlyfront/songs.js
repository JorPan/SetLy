const songsURL = "http://localhost:3000/songs";

fetch(songsURL)
  .then((response) => response.json())
  .then((songs) => {
    songs.forEach((song) => {
      let songList = document.querySelector(".mysonglist");
      let li = document.createElement("li");
      li.style = "list-style: none";
      li.classList.add("songcard");
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete Song";
      li.textContent = `${song.title} ${song.key} ${song.tempo}`;
      li.append(deleteButton);
      songList.append(li);

      deleteButton.addEventListener("click", deleteSong);

      function deleteSong(e) {
        fetch(songsURL, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
      }
    });
  });

const newSongForm = document.querySelector(".addsongform form");

newSongForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  fetch(songsURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
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
