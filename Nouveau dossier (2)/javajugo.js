document.getElementById('menu-button').addEventListener('click', function() {
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Ferme le menu si l'utilisateur clique à l'extérieur
window.onclick = function(event) {
    if (!event.target.matches('#menu-button')) {
        const dropdowns = document.getElementsByClassName('dropdown');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}
