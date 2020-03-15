//get stage. getters
//import axios from 'axios';

import Axios from "axios";

const state = {
    iplscore: []
};

const getters = {
    allResults: (state) => state.iplscore
};

const actions = {
    async fetchResults({ commit }) {
          const response = await Axios.get('https://site.web.api.espn.com/apis/site/v2/sports/cricket/8048/scoreboard?season=2019');
        commit('setResults',response.data);
        console.log(state.iplscore.events);
    },
    
};

const mutations = {
    setResults: (state, iplscore) => (state.iplscore = iplscore)
    
};

export default {
    state,
    getters,
    actions,
    mutations
};

