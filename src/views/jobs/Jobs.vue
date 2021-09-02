<template>
    <div>
        <h1>JOBS</h1>
        <h2 v-for="job in jobs" :key="job.id" class="jobs">
            <router-link :to="{name: 'JobDetails', params: {id:job.id}}">
                <h2>{{job.title}}</h2>
            </router-link>
        </h2>
    </div>
</template>
<script>
export default {
    name:'Jobs',
    data(){
        return{
            jobs:[
                {title:"UX/UI designer", id:1, detail:"lorem"},
                {title:"React JS/ Vue JS developer", id:2, detail:"lorem"},
                {title:"NodeJS developer", id:3, detail:"lorem"}
            ]
        }
    }
}
</script>
<style>
    .jobs h2{
        background-color: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }
    .jobs h2:hover{
        background-color: #ddd;
    }
    .jobs a{
        text-decoration: none;
    }
    .jobs a:hover{
        text-decoration: none !important;

    }
</style>