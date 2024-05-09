window.addEventListener('load', () => {
    addQuote();
});

function getQuote() {
    let selected = document.getElementById('menu').value;
    const filterData = data.filter(quote => quote.tag === selected);
    const i = (Math.floor(Math.random() * filterData.length));
    return filterData[i];
};

const quoteStyle = obj => {
    const makeQuote = 
    `<article class="quote">
        <button class="close" onclick="this.parentElement.remove()";>
            <img src="minus.svg" alt="minussymbol">
        </button>
        <figure>
            <blockquote>${obj.text}</blockquote>
            <figcaption>
                <span class="character">${obj.character}</span>
                <img src="${obj.imgsrc}" alt="Image of ${obj.character}">
            <figcaption>
        </figure>
        <footer>
            <span class="movie">${obj.movie}</span>
            <span class="tag">${obj.tag}</span>
        </footer>
    </article>`
    return makeQuote;
};

function addQuote() {
    let parentNode = document.getElementById('main');
    let newQuote = quoteStyle(getQuote());

    // Insert the new quote HTML directly, without clearing existing content
    parentNode.insertAdjacentHTML('beforeend', newQuote);

    let quotes = Array.from(document.querySelectorAll('.quote'));

    // Sort only the array of quote elements
    quotes.sort((a, b) => {
        let tagA = a.querySelector('.tag').textContent.toUpperCase();
        let tagB = b.querySelector('.tag').textContent.toUpperCase();
        return tagA.localeCompare(tagB);
    });

    // Clear the parentNode once to append sorted quotes
    parentNode.innerHTML = ''; 
    quotes.forEach(quote => parentNode.appendChild(quote));
}

