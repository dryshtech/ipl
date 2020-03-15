<template>
   <div> 
    <div v-for="result in allResults.events" :key="result.events" class="columns is-mobile is-centered">
        <div class="container" is-vcentered>
         <div class="box is-narrow is-vcentered" style="background:skyblue" >{{ result.name }} {{result.date}}</div>
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