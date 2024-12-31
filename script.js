
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu")



hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});
 
 
 
 document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	 hamburger.classList.remove("active");
	 navMenu.classList.remove("active");
 }));




ScrollReveal({distance: '80px',
    duration: 2000,
    delay:200,
 });


 ScrollReveal().reveal('.home-content, heading, ', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .pengalaman-container, .kontak form ', { origin: 'button' });
 ScrollReveal().reveal('.home-contact h1, .pendidikan-img', { origin: 'left' });
 ScrollReveal().reveal('.home-contact p, .pendidikan-content', { origin: 'right' });


 const typed = new Typed('.multiple-text',{
    strings: ['Freshgraduate Sistem Informasi', 'Frontend Developer'],
    typeSpeed : 50,
    backSpeed: 50,
    backDelay : 1000,
    loop: true,
 });

 document.getElementById('contact-form').addEventListener('submit', function(event) {
   event.preventDefault(); // Mencegah pengiriman formulir default

   // Mengirimkan data ke Formspree
   fetch(this.action, {
       method: 'POST',
       body: new FormData(this),
       headers: {
           'Accept': 'application/json'
       }
   })
   .then(response => {
       if (response.ok) {
           alert('Pesan Anda telah dikirim!');
           this.reset(); // Menghapus input setelah pengiriman berhasil
       } else {
           alert('Gagal mengirim pesan: ' + response.statusText);
       }
   })
   .catch(error => {
       alert('Gagal mengirim pesan: ' + error);
   });
});
const toggleButton = document.getElementById("toggleButton");
const sidebar = document.getElementById("sidebar");

// Tambahkan event listener untuk tombol
toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("active"); // Toggle kelas 'active' pada aside
});