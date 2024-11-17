let scrollAmount = 0;

function scrollGallery(direction) {
  const gallery = document.getElementById('gallery');
  const scrollWidth = 160; // Lebar satu gambar ditambah margin (150px gambar + 10px margin)
  const maxScroll = (gallery.children.length * scrollWidth) - gallery.offsetWidth;

  scrollAmount += direction * scrollWidth;

  // Batasi scroll agar tidak melewati batas
  if (scrollAmount < 0) {
    scrollAmount = 0;
  } else if (scrollAmount > maxScroll) {
    scrollAmount = maxScroll;
  }

  gallery.style.transform = `translateX(-${scrollAmount}px)`;
}

function goToMessage() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  window.location.href = `message.html?name=${encodeURIComponent(name)}`;
}
