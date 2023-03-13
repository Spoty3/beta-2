const searchInput = document.querySelector('.input');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  cards.forEach(card => {
    const title = card.querySelector('.title').textContent.toLowerCase();

    if (title.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});