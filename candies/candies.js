import { getCandies } from '../fetch-utils.js';
import { renderCandies } from '../render-utils.js';

const candiesListEl = document.getElementById('candies-list-container');


window.addEventListener('load', async() => {
    const candies = await getCandies();

    for (let candy of candies) {
        const candyEl = renderCandies(candy);

        candiesListEl.append(candyEl);
    }
});