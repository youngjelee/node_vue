<template>
    <v-app>

    <nav>
        <v-toolbar>
            <v-toolbar-title>
                <nuxt-link to="/">Home</nuxt-link>
            </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>

            <v-btn text nuxt to="./profile">
            <div>프로필</div>
            </v-btn>
            
            <v-btn text nuxt to="./signup">
            <div>signup</div>
            </v-btn>

            <v-btn text nuxt to="./admin">
            <div>Admin</div>
            </v-btn>

        </v-toolbar-items>
        </v-toolbar>

    </nav>
    <v-row no-gutters>
            <v-col cols="12" md="4">
                
           
            </v-col>
            <v-col cols="12" md="8">
                <nuxt />

            </v-col>
    </v-row>
    </v-app>

</template>

<script>
export default {
    
}
</script>

<style>

</style>