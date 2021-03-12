<template>
    <header class="site-header">
        <div class="row">
            <div class="site-header__inner start-12 columns">
                <div class="site-header__inner__row">
                    <div class="site-header__name start-12 medium-4 columns">
                        <h1><router-link to="/" @click.native="loadPage('home')">Leesa Ward</router-link></h1>
                    </div>
                    <nav class="site-header__menu start-12 medium-8 columns">
                        <ul>
                            <li><router-link to="/developer" @click.native="loadPage('dev')">Developer</router-link></li>
                            <li><router-link to="/designer" @click.native="loadPage('des')">Designer</router-link></li>
                            <li><router-link to="/educator" @click.native="loadPage('edu')">Educator & Mentor</router-link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    methods: {
        loadPage(pageCode) {
            this.$emit('clicked', pageCode);
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../global-styling/global';

    .site-header {
        padding-top: 1rem;
        width: 100%;
        align-self: flex-start;
        position: relative;
        z-index: 10;

        &__inner {

            &__row {
                padding: 2rem 0;
                border-bottom: 1px solid rgba($body-color, 0.2);
                align-items: center;
            }
        }

        &__name {

            @include bp-medium {
                padding-left: 0;
            }

            h1 {
                color: map-get($theme-colors, primary);
            }
        }

        &__menu {

            @include bp-medium {
                padding-right: 0;
            }

            ul {
                display: flex;
                justify-content: center;
                align-items: center;

                @include bp-medium {
                    justify-content: flex-end;
                }

                li {
                    padding: 0 0.5rem;

                    @include bp-medium {
                        padding: 0 1rem;
                    }

                    &:last-of-type {

                        @include bp-medium {
                            padding-right: 0;
                        }
                    }
                }

                a {
                    text-decoration: none;
                }
            }
        }
    }
</style>