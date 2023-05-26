const btn = document.querySelector('.meme-generate-button');
const memeImage = document.querySelector('.meme-image');
const memeTitle = document.querySelector('.meme-title');
const memeAuthor = document.querySelector('.meme-author');
const updateDetails = (url,title,author) =>{
    memeImage.setAttribute("src",url);
    memeTitle.textContent = title;
    memeAuthor.textContent = "author: "+author;
}

btn.addEventListener('click', () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then( resp => resp.json())
    .then(data => {
        updateDetails(data.url,data.title,data.author);
    })
})