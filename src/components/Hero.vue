<template>
  <section class="hero">
        <div class="container">
            <div class="columns">
                <div class="column is-two-thirds">
                    <div class="content">
                        <h1>Player Profile</h1>
                        <app-profile></app-profile>
                        <app-quickgame></app-quickgame>
                    </div>
                </div>


                <div class="column">
                    <div class="content">
                    <h1>Leaderboard</h1>
                        <app-leaderboard></app-leaderboard>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.hero {
    margin-top: 2em;
}
h1 {
    color: #fff;
    margin-bottom: 60px;
    letter-spacing: -1.1px;
}
</style>