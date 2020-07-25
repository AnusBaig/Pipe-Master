<template>
    <div ref="page" >
        <div class="flex justify-end">
            <vs-button size="small" to="" @click="generatePrint">Print</vs-button>
        </div>

        <div v-if="results.length>0">
            <Grid :outputArray="results" 
            :width="width"
            :height="height"
            :scale="1.3"></Grid>
        </div>
        <p v-else class="sm:mx-0 mx-4 mb-6 d-theme-text-inverse">Results cannot be generated of specified requirements</p>

        <div class="flex justify-around text-center mt-5">
            <vs-button size="large" to="/requirement">Back</vs-button>
        </div>
    </div>
</template>

<script>
import Grid from '../../components/canvas'
import Loader from '../../components/vuesax/loading/LoadingDefault'
import getResults from './getResults'

export default{
    data(){
        return{
            results:[],
            height:400,
            width:800
        }
    },
    components:{
        Grid
    },
    watch:{
        height(){
        this.height= this.$refs.page.offsetHeight
        },
        width(){
        this.width= this.$refs.page.offsetWidth
        }
    },
    methods:{
        generatePrint(){
        // this.$htmlToPaper('result')
            window.print()
        }
    },
    created(){
        this.results = getResults()
    },
    mounted() {
        this.$vs.loading()

        this.height= this.$refs.page.offsetHeight
        this.width= this.$refs.page.offsetWidth
        
        setTimeout(()=>{
            this.$vs.loading.close()
            console.log('Results')
            console.log(this.results)
        },2000)
    }
}

</script>

<style lang="sass" scoped>

</style>