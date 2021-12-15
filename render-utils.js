export function renderCandies(candy) {
    const div = document.createElement('div');
    const name = document.createElement('p');
    const type = document.createElement('p');
    const flavor = document.createElement('p');
    const year = document.createElement('p');

    div.classList.add('candies-div');
    name.classList.add('candies-name');

    name.textContent = candy.name;
    type.textContent = `type: ${candy.type}`;
    flavor.textContent = `flavor: ${candy.flavor}`;
    year.textContent = `year created: ${candy.year}`;

    div.append(name, type, flavor, year);

    return div;
}


export function renderFlowers(flower) {
    const div = document.createElement('div');
    const name = document.createElement('p');
    const bloom = document.createElement('p');
    const zone = document.createElement('p');
    const edible = document.createElement('p');

    div.classList.add('flowers-div');
    name.classList.add('flowers-name');

    name.textContent = flower.name;
    bloom.textContent = `in bloom: ${flower.bloom}`;
    zone.textContent = `hardiness zone: ${flower.zone}`;
    edible.textContent = `edible? ${flower.edible}`;

    div.append(name, bloom, zone, edible);

    return div;
}

export function renderBooks(book) {
    const div = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const genre = document.createElement('p');
    const year = document.createElement('p');

    div.classList.add('books-div');
    title.classList.add('books-title');


    title.textContent = book.title;
    author.textContent = `author: ${book.author}`;
    genre.textContent = `genre: ${book.genre}`;
    year.textContent = `published: ${book.year}`;

    div.append(title, author, genre, year);

    return div;
}

export function renderTeas(tea) {
    const div = document.createElement('div');
    const name = document.createElement('p');
    const type = document.createElement('p');
    const caffeine = document.createElement('p');
    const origin = document.createElement('p');

    div.classList.add('teas-div');
    name.classList.add('teas-name');


    name.textContent = tea.name;
    type.textContent = `type: ${tea.type}`;
    caffeine.textContent = `caffeinated? ${tea.caffeine}`;
    origin.textContent = `origin: ${tea.origin}`;

    div.append(name, type, caffeine, origin);

    return div;
}
