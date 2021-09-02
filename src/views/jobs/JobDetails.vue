<template>
    <div>
        <h1>job details</h1>
        <p>the job is from {{id}}</p>
    </div>
</template>
<script>
export default {
    name:'JobDetails',
    props:['id'],
    // data(){
    //     return{
    //         id: this.$route.params.id
    //     }
    // }
}
</script>
<style>
    
</style>