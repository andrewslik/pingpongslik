<template lang="html">
    <div class="info-container">
        <section>
            <h3>Name</h3>
            <p>Andrew Bonifacio</p>
        </section>
        <section>
            <h3>Nickname</h3>
            <p>Ukemeister</p>
        </section>
        <section>
            <h3>Born</h3>
            <p>July 25, 1992</p>
        </section>
        <section>
            <h3>Role</h3>
            <p>Web Developer</p>
        </section>
        <section>
            <h3>Team</h3>
            <p>Dynamic Content</p>
        </section>
        <section>
            <h3>Slik Start</h3>
            <p>August 3, 2015</p>
        </section>

    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.info-container {
    position: relative;
    top: 120px;
    left: 82px;
    width: 50%;
    display: inline-block;
    color: #fff;
    section {
        display: inline-block;
        width: 28%;
        padding-left: 2%;
        border-left: 1px solid #686670;
        margin-bottom: 50px;
        h3 {
            margin: 0;
            font-size: 12px;
            color: #686670;
        }
        p {
            margin-bottom: 0;
            font-weight: bold;
        }
    }
}
</style>
