<template>

    <div>

        <v-btn @click="fetchUser()">A</v-btn>

        <div> BAN ORG</div>
    </div>

</template>

<script>
    import {simpleFetch} from '../utils/utilFunctions';

    export default {
        
        name: "banOrg",
        /*
        Si es necesari l'estructura es aixi
        components: {
            exempleComponent
        },
        props: {
            title: String
        },
        setup(props) {
        */
        setup() {

            
            async function fetchUser() {
                let issues;
                simpleFetch("issues/", "GET", "").then((data) => issues = data);    
                console.log("issues: ", issues);
            }

            return {
                fetchUser
            }
        }
    }

</script>

<style scoped>

</style>
