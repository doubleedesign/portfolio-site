<template>
    <footer class="site-footer">
        <div class="row">
            <ul class="site-footer__icons start-12 columns">
                <li><a href="https://www.github.com/doubleedesign" target="_blank"><i class="fab fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/doubleedesign" target="_blank"><i class="fab fa-linkedin"></i></a></li>
            </ul>
            <small class="site-footer__fineprint start-12 columns">
                Built with <a href="https://www.vuejs.org" target="_blank">VueJS</a> and a whole lot of <a href="https://sass-lang.com/" target="_blank">SASS</a>. Powered by <a href="https://prismic.io/" target="_blank">Prismic</a>.
            </small>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped lang="scss">
    @import '../global-styling/global';

    .site-footer {
        padding: 1rem 0;
        width: 100%;
        margin-top: auto;
        position: relative;
        z-index: 10;

        @include bp-large {
            padding-bottom: 2rem;
        }

        &__icons {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem 0;

            li {

                a {
                    display: block;
                    font-size: 2em;
                    text-decoration: none;
                    padding: 0.5rem;
                }
            }
        }

        &__fineprint {
            text-align: center;
        }
    }
</style>