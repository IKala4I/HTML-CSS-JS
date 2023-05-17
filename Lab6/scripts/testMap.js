getCoordinates().then(response => showMap(response))

async function getCoordinates() {
    const response = await fetch('http://localhost:3000/coordinates')
    return response.json()
}

function showMap(coordinates) {
    const map = L.map('map').setView([coordinates.latitude, coordinates.longitude], 10);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}