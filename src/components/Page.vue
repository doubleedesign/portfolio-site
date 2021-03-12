<template>
    <section class="site-page">
        <div class="row">
            <div class="start-12 columns" v-if="document">
                <prismic-rich-text :field="document.data.page_content" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Page",
    props: ['pageCode'],
    data() {
        return {
            document: null // Initialise
        }
    },
    methods: {
        async getContent() {
            // Get all the page content fields as a JSON object from the Prismic API
            this.document = await this.$prismic.client.getByUID('page', this.pageCode);
        }
    },

    /**
     * Lifecycle hooks
     * Do things at certain stages
     */
    created() {
        // Call the Prismic API query method to get the default page
        this.getContent()
    },
    mounted() {
    },
    updated() {
        // Call the Prismic API query method again to get the new page
        this.getContent()
    }
}
</script>

<style scoped lang="scss">
    @import '../global-styling/global';

    .site-page {
        width: 100%;
        padding: 1rem 0;
        align-self: flex-start;

        @include bp-medium {
            padding: 2rem 0;
        }

        pre {
            display: block;
        }
    }
</style>