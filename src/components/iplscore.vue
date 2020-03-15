<template>
   <div> 
       <md-card md-with-hover>
           <md-ripple>
            <div v-for="result in allResults.events" :key="result.events" class="column">
            <md-card-header>
             <div class="md-elevation-22" style="background:lightgreen" >{{ result.description }}</div>
             </md-card-header>
             <md-card-content>{{ result.name }}</md-card-content>
             <md-card-content>{{ 'Result' }} : {{ result.status.summary }}</md-card-content>
             <div v-for="comp in result.competitions" :key="comp.competitions" class="column">
                <md-card-content> {{ 'Played At' }} : {{ comp.venue.fullName }}</md-card-content>
                <div v-for="fa in comp.status.featuredAthletes" :key="fa.featuredAthletes" class="column">
                <md-card-content> {{ 'Player of The Match' }} : {{ fa.athlete.fullName }}</md-card-content>
                </div>
             </div>    
            </div>
            </md-ripple>
        </md-card>
   </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name :"iplscore",
        methods: {
            ...mapActions(["fetchResults"])
        },
        computed: mapGetters(["allResults"]),
        created() {
            this.fetchResults();
        }
    }
</script>

<style >
.results {
  display: grid;
  grid-template-columns: repeat(1, 3fr);
  grid-gap: 5rem;
  border: 5px solid #ccc;
  background: #41b883;
  padding: 3rem;
  border-radius: 10px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>