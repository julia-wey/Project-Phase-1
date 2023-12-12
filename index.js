document.addEventListener("DOMContentLoaded", function fetchData(){
    fetch('https://www.amiiboapi.com/api/amiibo/?name=mario')
        .then(res => res.json())
        .then(data => displayCharacters(data.amiibo))
        .catch(error => console.error('Error:', error));
});
    
function displayCharacters(amiiboArray) {
        const marioList = document.getElementById('marioList');
        marioList.innerHTML = '';
        
        amiiboArray.forEach(item => {
            const listItem = document.createElement('li');
            const imgElement = document.createElement('img');
            imgElement.src = item.image;
            imgElement.alt = `${item.character} Amiibo`;
                
            listItem.appendChild(imgElement);

            const infoDiv = document.createElement('div');
            infoDiv.className = 'infoDiv';
            infoDiv.textContent = `SERIES: ${item.amiiboSeries}, CHARACTER: ${item.character}`; 

            listItem.appendChild(infoDiv);
    
            marioList.appendChild(listItem);
            });
        }