const playlistContainer = document.getElementById("playlist");
const searchBar = document.getElementById("searchBar");

let playlist = [
  { title: "Naan Ready", artist: "Anirudh", src: "assets/Mudinja Thodra - MassTamilan.mp3" },
  { title: "Sample Song 2", artist: "Artist B", src: "assets/track2.mp3" },
  { title: "Sample Song 3", artist: "Artist C", src: "assets/track3.mp3" }
];

// Show songs in UI
function displaySongs(list) {
  playlistContainer.innerHTML = "";
  list.forEach(song => {
    const trackDiv = document.createElement("div");
    trackDiv.classList.add("track");

    trackDiv.innerHTML = `
      <span class="title">${song.title}</span><br>
      <span class="artist">${song.artist}</span>
      <audio controls src="${song.src}"></audio>
    `;
    playlistContainer.appendChild(trackDiv);
  });
}

// Initial load
displaySongs(playlist);

// Search function
searchBar.addEventListener("keyup", function () {
  let filter = searchBar.value.toLowerCase();
  let filtered = playlist.filter(song =>
    song.title.toLowerCase().includes(filter) ||
    song.artist.toLowerCase().includes(filter)
  );
  displaySongs(filtered);
});
