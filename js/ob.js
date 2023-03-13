const input = document.querySelector('.input');
const books = document.querySelectorAll('.book');

input.addEventListener('input', function(event) {
  const searchWord = event.target.value.toLowerCase();
  let hasMatched = false;
  
  
  books.forEach(function(book) {
    const bookText = book.textContent.toLowerCase();
    const isMatched = bookText.includes(searchWord);
    book.style.display = isMatched ? 'block' : 'none';
    hasMatched = hasMatched || isMatched;
  });
  
  if (!hasMatched) {
  }
});