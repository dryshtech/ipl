import Vuex from 'vuex';
import Vue from 'vue';
import iplscore from './modules/iplscore';

//Load Vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
   modules: {
       iplscore
   }
});

