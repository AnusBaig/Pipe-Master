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

export default{
    components:{
        Grid
    }
}
</script>

<style lang="sass" scoped>

</style>