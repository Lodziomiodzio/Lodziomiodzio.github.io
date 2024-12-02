// Funkcja pokazująca szczegóły projektu
function showDetails(projectId) {
    const detailsDiv = document.getElementById(`details-${projectId}`);
    
    if (detailsDiv.innerHTML === "") {
        detailsDiv.innerHTML = `<p>Szczegóły projektu ${projectId}: Jest to przykładowy projekt stworzony przy użyciu technologii JavaScript.</p>`;
    } else {
        detailsDiv.innerHTML = "";
    }
}

// Funkcja obsługująca formularz kontaktowy
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Zapobiega domyślnej wysyłce formularza

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Dziękujemy za kontakt, ${name}. Odpowiemy na Twoją wiadomość wysłaną na adres ${email}.`);
        document.getElementById("contact-form").reset();
    } else {
        alert("Proszę wypełnić wszystkie pola.");
    }
});
