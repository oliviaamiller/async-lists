export function renderCandies(candy) {
    const div = document.createElement('div');
    const name = document.createElement('p');
    const type = document.createElement('p');
    const flavor = document.createElement('p');
    const year = document.createElement('p');

    div.classList.add('candies-div');

    name.textContent = candy.name;
    type.textContent = candy.type;
    flavor.textContent = candy.flavor;
    year.textContent = candy.year;

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

    name.textContent = flower.name;
    bloom.textContent = flower.bloom;
    zone.textContent = flower.zone;
    edible.textContent = flower.edible;

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

    title.textContent = book.title;
    author.textContent = book.author;
    genre.textContent = book.genre;
    year.textContent = book.year;

    div.append(title, author, genre, year);

    return div;
}

export function renderTeas(tea) {
    const div = document.createElement('div');
    const name = document.createElement('p');
    const type = document.createElement('p');
    const caffeine = document.createElement('p');
    const origin = document.createElement('p');

    div.classList.add('books-div');

    name.textContent = tea.name;
    type.textContent = tea.type;
    caffeine.textContent = tea.caffeine;
    origin.textContent = tea.origin;

    div.append(name, type, caffeine, origin);

    return div;
}
