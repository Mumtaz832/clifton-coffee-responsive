// Nav-left ko target karo
const navLeft = document.querySelector('.nav-left');

// Click pe .open toggle karo
navLeft.addEventListener('click', (e) => {
    // Sirf tab toggle ho jab hamburger area click ho (left 35px ke andar)
    if (e.offsetX <= 35) {
        navLeft.classList.toggle('open');
    }
});

/* button view */
const buttons = document.querySelectorAll('.product-buttons button');
const boxes = document.querySelectorAll('.products-grid .product-box');
const grid = document.querySelector('.products-grid'); // parent grid

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Active style
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Reset sab boxes
        boxes.forEach(box => {
            box.style.display = 'none';
            box.style.width = '';
            box.style.height = '';
            let img = box.querySelector('img');
            img.style.width = '';
            img.style.height = '';
            img.style.objectFit = '';
        });

        if (index === 0) {
            // Coffee: first 3 images
            grid.style.gridTemplateColumns = '1fr';
            [0, 1, 2].forEach(i => {
                boxes[i].style.display = 'block';
                boxes[i].style.width = '100%';
                boxes[i].style.height = '400px'; // yahan ap apne hisab se height fix kar sakti ho
                let img = boxes[i].querySelector('img');
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
            });
        } 
        else if (index === 1) {
            // Capsule: 4th image
            grid.style.gridTemplateColumns = '1fr';
            boxes[3].style.display = 'block';
            boxes[3].style.width = '100%';
            boxes[3].style.height = '400px'; // same fixed height
            let img = boxes[3].querySelector('img');
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
        } 
        else {
            // All: normal grid
            grid.style.gridTemplateColumns = '';
            boxes.forEach(box => {
                box.style.display = 'block';
                box.style.height = '';
                let img = box.querySelector('img');
                img.style.width = '';
                img.style.height = '';
                img.style.objectFit = '';
            });
        }
    });
});


/*slider show using arrow*/

 
 document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".product-item");

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    window.plusDivs = function (n) {
        slideIndex += n;
        if (slideIndex >= slides.length) slideIndex = 0;
        if (slideIndex < 0) slideIndex = slides.length - 1;
        showSlide(slideIndex);
    }

    if (window.innerWidth <= 768) {
        showSlide(slideIndex);
    } else {
        // Desktop view me sab images show karna
        slides.forEach(slide => slide.classList.add("active"));
    }
});

/*footer section */
document.querySelectorAll('.footer-section h2').forEach(header => {
    header.addEventListener('click', () => {
        let section = header.parentElement;
        section.querySelectorAll('p, .contact-item').forEach(item => {
            item.style.display = item.style.display === 'block' ? 'none' : 'block';
        });
    });
});

