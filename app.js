const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery-container img')
const original = document.querySelector('.modal-image')
const imgText = document.querySelector('.modal-caption')

previews.forEach( preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open");

        const originalSrc = preview.getAttribute('data-original');
        original.src = ``
        original.src = `./full/${originalSrc}`
        const altText = preview.alt;
        imgText.textContent = altText;
    })
} )

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal'))
    {
        modal.classList.remove('open');
        original.classList.remove('open')
    }
});