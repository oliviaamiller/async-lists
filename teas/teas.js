import { getTeas } from '../fetch-utils.js';
import { renderTeas } from '../render-utils.js';

const teasListEl = document.getElementById('tea-list-container');

window.addEventListener('load', async() => {
    const teas = await getTeas();

    for (let tea of teas) {
        const teaEl = renderTeas(tea);

        teasListEl.append(teaEl);
    }
});