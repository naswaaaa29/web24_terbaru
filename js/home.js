// Fungsi untuk scrolling bagian Prestasi
function scrollPrestasiLeft() {
    const prestasi = document.getElementById('prestasi');
    prestasi.scrollBy({
        left: -prestasi.clientWidth,
        behavior: 'smooth'
    });
}

function scrollPrestasiRight() {
    const prestasi = document.getElementById('prestasi');
    prestasi.scrollBy({
        left: prestasi.clientWidth,
        behavior: 'smooth'
    });
}

// Fungsi untuk scrolling bagian Testimonial
function scrollTestimonialLeft() {
    const testimonial = document.getElementById('testimonial');
    testimonial.scrollBy({
        left: -testimonial.clientWidth,
        behavior: 'smooth'
    });
}

function scrollTestimonialRight() {
    const testimonial = document.getElementById('testimonial');
    testimonial.scrollBy({
        left: testimonial.clientWidth,
        behavior: 'smooth'
    });
}

// Fungsi infinite scroll untuk Prestasi
function autoScrollPrestasi() {
    const prestasi = document.getElementById('prestasi');
    if (prestasi.scrollLeft + prestasi.clientWidth >= prestasi.scrollWidth) {
        prestasi.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        prestasi.scrollBy({ left: prestasi.clientWidth, behavior: 'smooth' });
    }
}

// Fungsi infinite scroll untuk Testimonial
function autoScrollTestimonial() {
    const testimonial = document.getElementById('testimonial');
    if (testimonial.scrollLeft + testimonial.clientWidth >= testimonial.scrollWidth) {
        testimonial.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        testimonial.scrollBy({ left: testimonial.clientWidth, behavior: 'smooth' });
    }
}

// Set interval auto-scroll
setInterval(autoScrollPrestasi, 5000); // Auto scroll setiap 5 detik
setInterval(autoScrollTestimonial, 5000); // Auto scroll setiap 5 detik