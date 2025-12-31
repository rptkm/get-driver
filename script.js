import { rezDrivers, bioDrivers, plcDrivers } from "./data.js";

let bioCard = document.getElementById("bio-card")
let rezCard = document.getElementById("rez-card")
let plcCard = document.getElementById("plc-card")

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

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    themeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});