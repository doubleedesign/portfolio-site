<template>
    <div id="app">
        <Header @clicked="pageChange"/>
        <Page v-bind:pageCode="this.currentPage"/>
        <Footer/>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Page from "@/components/Page";
    import Footer from "@/components/Footer";

    export default {
        name: 'App',
        components: {
            Header,
            Page,
            Footer
        },
        methods: {
            pageChange(pageCode) {
                this.currentPage = pageCode;
            }
        },
        data() {
            return {
                currentPage: 'home', // default page
            }
        }
    }
</script>

<style lang="scss">
    @import url("http://fast.fonts.net/t/1.css?apiType=css&projectid=4571770d-1bb1-4d59-8e52-a278df2893cd");

    @font-face {
        font-family: "Demos Next W01";
        src: url("./assets/fonts/573add32-d0ba-4853-8dce-263ba7df72c6.woff2") format("woff2"), url("./assets/fonts/09415d64-095c-4f9e-b5c7-4646d41e1b90.woff") format("woff");
        font-weight: 400;
        font-style: italic;
    }

    @font-face {
        font-family: "Demos Next W01";
        src: url("./assets/fonts/f4a83103-6dc2-4e1a-971b-876ba64488e3.woff2") format("woff2"), url("./assets/fonts/77fe28c8-aa54-492e-b4c5-1ae1913d4b23.woff") format("woff");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "Demos Next W01";
        src: url("./assets/fonts/c159c348-b4f9-4634-82ed-409f0038fe5b.woff2") format("woff2"), url("./assets/fonts/20f399e2-7a5a-4bd9-ba8f-82021e260e62.woff") format("woff");
        font-weight: 700;
        font-style: normal;
    }

    @import 'global-styling/global';

    #app {
        background: map-get($theme-colors, background);
        background-size: cover;
        min-height: 100vh;
        min-width: 100vw;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        flex-flow: column;
    }
</style>
