export function renderCandies(candy) {
    const div = document.createElement('div');
    const name = document.createElement('p');
    const type = document.createElement('p');
    const flavor = document.createElement('p');
    const year = document.createElement('p');

    name.textContent = candy.name;
    type.textContent = candy.type;
    flavor.textContent = candy.flavor;
    year.textContent = candy.year;

    div.append(name, type, flavor, year);

    return div;
}