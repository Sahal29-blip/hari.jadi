function submitName() {
  const nameInput = document.getElementById("partner-name").value;

  if (!nameInput) {
    alert("Masukkan nama anda terlebih dahulu");
    return;
  }

  // Redirect ke galeri dengan query parameter nama
  window.location.href = `gallery.html?name=${encodeURIComponent(nameInput)}`;
}
