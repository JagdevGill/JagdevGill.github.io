function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

function openModal(id) {
    document.getElementById('modal' + id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById('modal' + id).style.display = 'none';
}
