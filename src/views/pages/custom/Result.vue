<template>
    <div>
        <div class="flex justify-end">
            <vs-button size="small" to="">Print</vs-button>
        </div>

        <Grid></Grid>

        <div class="flex justify-around text-center mt-5">
            <vs-button size="large" to="/requirement">Back</vs-button>
        </div>
    </div>
</template>

<script>
import Grid from '../../ui-elements/grid/vuesax/GridDesignConcept'
import Loader from '../../components/vuesax/loading/LoadingDefault'
import getResults from './getResults'

export default{
    data(){
        return{
            results:[]
        }
    },
    components:{
        Grid
    },
    created(){
        // this.results = getResults()
    },
    mounted() {
        this.$vs.loading()
        this.results = getResults()

        setTimeout(()=>{
            this.$vs.loading.close()
        },2000)
    }
}
</script>

<style lang="sass" scoped>

</style>