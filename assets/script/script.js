document.querySelectorAll('.dropdown').forEach(function(dropdown) {
    dropdown.addEventListener('mouseenter', function() {
        dropdown.querySelector('.dropdown-content').style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', function() {
        dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
});
