const apiURL = 'https://api.lyrics.ovh';



async function searchSongs(term){
    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();

    //console.log(res);
    //console.log(data);

    showData(data);
}

//searchSongs("never") -->  console

// show the song list
function showData(data){
    result.innerHTML = `
        <ul class="songs">
            ${data.data.map(song => `
                <li>
                    <strong>${song.artist.name}</strong> - ${song.title}
                    <button onclick="fetchLyrics('${song.artist.name}', '${song.title}')">Get Lyrics</button>
                </li>
            `).join('')}
        </ul>
    `;
}

// Fetch lyrics
async function fetchLyrics(artist, title) {
    const res = await fetch(`${apiURL}/v1/${artist}/${title}`);
    const data = await res.json();

    showLyrics(data.lyrics);

}

// Show lyrics
function showLyrics(lyricsText) {
    lyrics.innerHTML = `<pre>${lyricsText}</pre>`;
}

const result = document.getElementById('result');
//const lyrics = document.getElementById('lyrics');

result.appendChild(data);