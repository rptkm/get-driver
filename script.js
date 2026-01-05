import { rezDrivers, bioDrivers, plcDrivers } from "./data.js";

let bioCard = document.getElementById("bio-card")
let rezCard = document.getElementById("rez-card")
let plcCard = document.getElementById("plc-card")
let mapsButton = document.getElementById("maps-card")


let button = document.getElementById("findDriverBtn")
button.addEventListener("click", () => {
    const searchTerm = document.getElementById("streetInput").value.toLowerCase();

    let foundDay = null;

    const foundRezDriver = Object.values(rezDrivers).find(driver => {
        // Loop through day keys manually to get the key name
        for (const [dayName, dayStreets] of Object.entries(driver.streets)) {
            const streetMatch = dayStreets.find(street =>
                street.toLowerCase() === searchTerm
            );
            if (streetMatch) {
                foundDay = dayName;  // Capture the day name (marti, miercuri, etc.)
                return true;
            }
        }
        return false;
    });
    rezCard.textContent = `${foundRezDriver.name} ${foundRezDriver.numberPlate} ${foundDay}`
    console.log({
        driver: foundRezDriver,
        day: foundDay  // Returns "marti", "miercuri", etc.
    });

    const foundBioDriver = Object.values(bioDrivers).find(driver => {
        // Loop through day keys manually to get the key name
        for (const [dayName, dayStreets] of Object.entries(driver.streets)) {
            const streetMatch = dayStreets.find(street =>
                street.toLowerCase() === searchTerm
            );
            if (streetMatch) {
                foundDay = dayName;  // Capture the day name (marti, miercuri, etc.)
                return true;
            }
        }
        return false;
    });
    bioCard.textContent = `${foundBioDriver.name} ${foundBioDriver.numberPlate} ${foundDay}`
    console.log({
        driver: foundBioDriver,
        day: foundDay  // Returns "marti", "miercuri", etc.
    });

    rezCard.textContent = `${foundRezDriver.name} ${foundRezDriver.numberPlate} ${foundDay}`
    console.log({
        driver: foundRezDriver,
        day: foundDay  // Returns "marti", "miercuri", etc.
    });

    const foundPlcDriver = Object.values(plcDrivers).find(driver => {
        // Loop through day keys manually to get the key name
        for (const [dayName, dayStreets] of Object.entries(driver.streets)) {
            const streetMatch = dayStreets.find(street =>
                street.toLowerCase() === searchTerm
            );
            if (streetMatch) {
                foundDay = dayName;  // Capture the day name (marti, miercuri, etc.)
                return true;
            }
        }
        return false;
    });
    plcCard.textContent = `${foundPlcDriver.name} ${foundPlcDriver.numberPlate} ${foundDay}`
    console.log({
        driver: foundPlcDriver,
        day: foundDay  // Returns "marti", "miercuri", etc.
    });
});

mapsButton.addEventListener("click", () => {

    const mapAddress = document.getElementById("streetInput").value.toLowerCase();

    console.log("test");
    const destination = `Strada ${mapAddress}, Sibiu`; // e.g., "Sibiu, Romania" or coordinates
    const encodedDest = encodeURIComponent(destination);

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    let url;
    if (isMobile) {
        // Prefer app on mobile - replace with your actual destination (e.g., ?q=address or ?daddr=destination)


        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            // iOS: Try Google Maps app first, fallback to web
            url = `https://maps.google.com/maps?q=${encodedDest}`;
        } else {
            // Android: Use intent for better app preference
            url = `intent://maps.google.com/maps?q=${encodedDest}#Intent;scheme=https;package=com.google.android.apps.maps;end`;
        }
    } else {
        // Desktop: Standard web link
        url = `https://maps.google.com/maps?q=${encodedDest}`;
    }

    window.open(url, '_blank', 'noopener,noreferrer'); // Opens in new tab safely
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    themeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});