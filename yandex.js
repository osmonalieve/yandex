function requestTaxi() {
    const phone = document.getElementById('phone').value;
    
    if (phone) {
        alert('Такси чакырылды! Сиздин номер: ' + phone);
    } else {
        alert('Телефон номерди киргизиңиз!');
    }
}

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Статикалык файлдарды берүү
app.use(express.static(path.join(__dirname, '../public')));

// Башкы бет
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Серверди ишке киргизүү
app.listen(PORT, () => {
    console.log(`Server иштеп жатат: http://localhost:${PORT}`);
});

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 42.8746, lng: 74.5698 },  // Бишкек
        zoom: 13,
    });
}

function requestTaxi() {
    const phone = document.getElementById('phone').value;
    
    if (phone) {
        alert('Такси чакырылды! Сиздин номер: ' + phone);
        // Логика: картада чекит көрсөтүү
        new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            title: "Сиздин жериңиз",
        });
    } else {
        alert('Телефон номерди киргизиңиз!');
    }
}