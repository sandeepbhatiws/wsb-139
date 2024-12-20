
const images = ['images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png','images/7.png','images/8.png','images/9.png','images/10.png','images/11.png','images/12.png'];

var count = 0;

var galleryData = '';
images.forEach((value, index) => {
    galleryData += `<img src="${ value }" count="${ index }" class="galleryImage">`;
})

document.getElementById('gallery').innerHTML = galleryData;


var allGalleryImages = document.querySelectorAll('.galleryImage');

allGalleryImages.forEach((element,index) => {
    element.addEventListener('click',(event) => {
        
        // document.getElementById('gallery').setAttribute('AttibuteName','Attribute Value');
        
        console.log(event.target.getAttribute('count'));
        count = event.target.getAttribute('count');

        document.getElementById('lightbox').classList.toggle('displayLightbox');
        document.getElementById('image').src = event.target.src;
    });
})

document.getElementById('close').addEventListener('click',() => {
    document.getElementById('lightbox').classList.toggle('displayLightbox');
});


document.getElementById('left').addEventListener('click', () => {
    count--;

    if(count < 0){
        count = images.length-1;
    }

    document.getElementById('image').src = images[count];
    console.log(count);
});

document.getElementById('right').addEventListener('click', () => {
    count++;

    if(count >= images.length){
        count =0;
    }

    document.getElementById('image').src = images[count];
    console.log(count);
});