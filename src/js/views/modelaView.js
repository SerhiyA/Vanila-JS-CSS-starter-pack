import { elements } from './base';

export const renderTitle = modelA => {
    const markup = `
        <i>${modelA.title}<i>
    `;

    elements.modelATitle.insertAdjacentHTML('beforeend', markup);
};