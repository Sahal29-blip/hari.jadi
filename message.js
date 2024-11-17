// Ambil nama dari URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

// Tampilkan pesan romantis
const messageElement = document.getElementById("romantic-message");
messageElement.innerHTML = `
  Dear ${name},<br><br>
  Happy Anniversery Sayang ❤️<br><br>
  Kamu adalah alasanku untuk tersenyum. Selamat untuk perjalanan cinta kita yang indah ini!, kita telah melewati banyak hal bersama, dan aku bersyukur untuk itu. Semoga cinta kita selalu abadi dan penuh kebahagiaan. Setiap tahun bersamamu adalah petualangan baru yang menakjubkan, kamu adalah cahaya dalam hidupku,<br><br>
  Happy Anniversary!<br>
  "Mank Idul"
`;

// Nomor WhatsApp dan pesan yang ingin dikirim
const whatsappNumber = '6281235995382';  // Ganti dengan nomor WhatsApp Anda
const whatsappMessage = `Hi, saya ingin mengucapkan: Dear ${name}, Happy Anniversary! Semoga kita selalu bahagia bersama! `; // Pesan yang ingin dikirimkan

// Menghubungkan logo WhatsApp dengan link
document.getElementById('whatsapp-btn').href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
