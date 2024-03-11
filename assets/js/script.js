var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); 
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
// マウスオーバー時に画像を拡大表示する
document.querySelectorAll('.top img, .bottom img').forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

document.querySelectorAll('.top-left, .top-right, .bottom-left, .bottom-right').forEach(container => {
    container.addEventListener('mouseover', () => {
        container.querySelector('.text-left, .text-right').style.display = 'block';
    });
    container.addEventListener('mouseout', () => {
        container.querySelector('.text-left, .text-right').style.display = 'none';
    });
    
    const textLeft = container.querySelector('.text-left');
    if (textLeft) {
        textLeft.addEventListener('click', () => {
            if (container.classList.contains('top-left')) {
                window.location.href = 'file:///C:/Users/danno/OneDrive/%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88/new.website/nature.html'; // top-left の URL を設定する
            } else if (container.classList.contains('bottom-left')) {
                window.location.href = 'file:///C:/Users/danno/OneDrive/%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88/new.website/coup.html'; // bottom-left の URL を設定する
            }
        });
    }
    
    const textRight = container.querySelector('.text-right');
    if (textRight) {
        textRight.addEventListener('click', () => {
            if (container.classList.contains('top-right')) {
                window.location.href = 'file:///C:/Users/danno/OneDrive/%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88/new.website/diversity.html'; // top-right の URL を設定する
            } else if (container.classList.contains('bottom-right')) {
                window.location.href = 'file:///C:/Users/danno/OneDrive/%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88/new.website/location.html'; // bottom-right の URL を設定する
            }
        });
    }
});




// script.js
$('.read-more').on('click', function() {
    // Redirect to another page
    window.location.href = 'file:///C:/Users/danno/OneDrive/%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88/new.website/why.html';
  });

//   video-section


$(document).ready(function() {
    $('.video-link').click(function(e) {
        e.preventDefault();
        var videoId = $(this).data('video');
        var videoSrc = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
        $('#video-iframe').attr('src', videoSrc);
        $('#video-modal').show();
    });

    $('.close').click(function() {
        $('#video-iframe').attr('src', '');
        $('#video-modal').hide();
    });
});

// footer
document.addEventListener('DOMContentLoaded', function() {
    const languageButtons = document.querySelectorAll('.language-button');

    languageButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const lang = button.getAttribute('data-lang');
            const contents = document.querySelectorAll('.content p');

            languageButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            button.classList.add('active');

            contents.forEach(function(content) {
                if (content.classList.contains(lang)) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });
});


// particlesJS("particles-js", {"particles":{"number":{"value":502,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5211089197812949,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":8.017060304327615,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":6,"direction":"bottom","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});