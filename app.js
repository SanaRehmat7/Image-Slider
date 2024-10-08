(function() {
    const pictures = [
        "img0",  // img0.avif
        "img1",  // img1.avif
        "img2",  // img2.avif
        "img3",  // img3.avif
        "img4",  // img4.avif
        "img5",  // img5.avif
    ];

    const buttons = document.querySelectorAll('.btn');
    const imgElement = document.querySelector('.img-container img'); // Get the <img> tag
    
    let counter = 0;

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (button.classList.contains('btn-left')) {
                counter--;
                if (counter < 0) {
                    counter = pictures.length - 1;
                }
                imgElement.src = `./Img/${pictures[counter]}.avif`; // Update the src of the <img>
            }

            if (button.classList.contains('btn-right')) {
                counter++;
                if (counter > pictures.length - 1) {
                    counter = 0;
                }
                imgElement.src = `./Img/${pictures[counter]}.avif`; // Update the src of the <img>
            }
        });
    });
})();
