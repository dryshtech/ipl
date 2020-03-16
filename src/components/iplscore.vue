<template>
   <div> 
      <div v-for="result in allResults.events" :key="result.events" class="column">
        <div class="md-elevation-10">{{ result.description }}</div>
          <md-card-content class="md-elevation-10">{{ result.name }}</md-card-content>
             <md-card-content class="md-elevation-10">{{ 'Result' }} : {{ result.status.summary }}</md-card-content>
             <div v-for="comp in result.competitions" :key="comp.competitions" class="column">
                <md-card-content class="md-elevation-10"> {{ 'Played At' }} : {{ comp.venue.fullName }}</md-card-content>
                <div v-for="fa in comp.status.featuredAthletes" :key="fa.featuredAthletes" class="column">
                <md-card-content class="md-elevation-10"> {{ 'Player of The Match' }} : {{ fa.athlete.fullName }}</md-card-content>
               </div>
             </div>    
        </div>
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

</style>