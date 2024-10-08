
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const background = document.querySelector('.accueil');
    background.style.backgroundPositionY = -(scrolled * 0.5) + 'px'; 
});

document.getElementById("voir-plus").addEventListener("click", function() {
    var projet = document.getElementById("hidden-projects");
    var btnplus = document.getElementById("voir-plus");

    if (projet.style.display === "block" || projet.style.display === "") { 
        projet.style.display = "none"; 
        btnplus.textContent = "Voir plus";
    } else {
        projet.style.display = "block"; 
        btnplus.textContent = "Voir moins";
    }
});
