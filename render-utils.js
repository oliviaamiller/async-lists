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