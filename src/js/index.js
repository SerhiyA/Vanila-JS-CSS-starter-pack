import ModelA from './models/ModelA';
import { renderTitle } from './views/modelaView';
import { elements } from './views/base';

// init app state
const state = {};

/**
 * Example controler
 */ 
const controlModel = () => {
    // init model
    state.model = new ModelA('Super Model');
    
    // do your job with model
    state.model.capitalizeTitle();

    // show the results
    renderTitle(state.model);
};

// handling app events
elements.headline.addEventListener('click', controlModel);