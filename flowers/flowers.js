import { getFlowers } from '../fetch-utils.js';
import { renderFlowers } from '../render-utils.js';

const flowersListEl = document.getElementById('flowers-list-container');

window.addEventListener('load', async() => {
    const flowers = await getFlowers();

    for (let flower of flowers) {
        const flowerEl = renderFlowers(flower);

        flowersListEl.append(flowerEl);
    }


})

