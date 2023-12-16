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
                <div class="card-info">
                    <h2>${item.name}</h2>
                    <div class="image-container">
                        <img src ="${item.image}" alt="${item.character} Amiibo">
                    </div>
                    <div class="info-container">
                        <div class = "content">
                            <div class="info-box">
                                <p>CHARACTER: ${item.character}</p>
                                <p>AMIIBO SERIES: ${item.amiiboSeries}</p>
                                <p>GAME SERIES: ${item.gameSeries}</p>
                            </div>
                        <div class="info-overlay" style="display: none;"></div>
                            <br></br>
                        <span class="heart-text">Click the heart if you would like this amiibo. </span>
                        <span class="heart" data-id="{item.id}" onclick="toggleHeart(this)" style="cursor: pointer; color: #ccc;">&#10084;</span>
                    </div>
                </div>
            </div>
            `;
            card.addEventListener('mouseover', function () {
                displayInfo(card, item.type);
            });
            card.addEventListener('mouseout', function () {
                hideInfo(card);
            });
        marioList.appendChild(card);
 });
}

function displayInfo(card, type) {
    const infoOverlay = card.querySelector('.info-overlay');
    infoOverlay.style.display = 'block';
    infoOverlay.innerHTML = `
        <div class="info-box">   
            <p>TYPE: ${type}</p>
        </div>
    `;
}
    
function hideInfo(card) {
    const infoOverlay = card.querySelector('.info-overlay');
    infoOverlay.style.display = 'none';
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