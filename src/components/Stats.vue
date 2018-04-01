<template lang="html">
    <div class="stats-container">
        <section>
            <h3>Rank</h3>
            <p>2</p>
        </section>
        <section>
            <h3>Wins</h3>
            <p>80</p>
        </section>
        <section>
            <h3>Loses</h3>
            <p>20</p>
        </section>
        <section>
            <h3>Total games</h3>
            <p>100</p>
        </section>
        <section>
            <h3>Win rate</h3>
            <p>80%</p>
        </section>
        <section>
            <h3>Streak</h3>
            <p>11 wins</p>
        </section>
        <div class="stats-button">
            player record
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.stats-container {
    position: relative;
    top: 120px;
    left: 82px;
    width: 40%;
    display: inline-block;
    color: #fff;
    height: 160px;
    background: #1F65F4;
    padding: 31px;
    section {
        display: inline-block;
        width: 28%;
        padding-left: 2%;
        border-right: 1px solid #FFF;
        margin-bottom: 50px;
        h3 {
            margin: 0;
            font-size: 12px;
        }
        p {
            margin-bottom: 0;
            font-weight: bold;
        }
    }
    section:nth-child(3n+0) {
        border-right: none;
    }
    .stats-button {
        position: absolute;
        top: 0;
        right: 0;
        background: #1C5BDE;
        width: 80px;
        height: 100%;
        text-align: center;
        line-height: 210px;
        font-size: 12px;
    }
}


</style>
