document.addEventListener("DOMContentLoaded", function fetchData(){
    fetch('https://www.amiiboapi.com/api/amiibo/?name=mario')
        .then(res => res.json())
        .then(data => displayCharacters(data.amiibo))
        .catch(error => console.error('Error:', error));
});
    function displayCharacters(amiiboArray) {
        const marioList = document.getElementById('marioList');
        marioList.innerHTML = '';

        amiiboArray.forEach (item => {
            let card = document.createElement('li')
            card.className = 'card'
            card.innerHTML = `
                <img src ="${item.image}" alt="${item.character} Amiibo">
                <div class = "content">
                    <h4>${item.name}</h4>
                    <p>CHARACTER: ${item.character}</p>
                    <p>AMIIBO SERIES: ${item.amiiboSeries}</p>
                    <p>GAME SERIES: ${item.gameSeries}</p>
                    <span class="heart-text">Click the heart if you like this amiibo. </span>
                    <span class="heart" data-id="{item.id}" onclick="toggleHeart(this)" style="cursor: pointer; color: #ccc;">&#10084;</span>
                </div>
            `;
        marioList.appendChild(card);
 });
}

function toggleHeart(icon) {
    const amiiboId = icon.getAttribute('data-id');
    const isFavorite = icon.style.color === 'red';

    if (isFavorite) {
        icon.style.color = '#ccc';
    } else {
        icon.style.color = 'red';
    }
}