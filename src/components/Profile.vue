<template>
    <div class="profile">
        <div class="columns">
            <div class="column">
                <h3>Name</h3>
                <p>Andrew Bonifacio</p>
            </div>
            <div class="column">
                <h3>Nickname</h3>
                <p>Ukemeister</p>
            </div>
            <div class="column">
                <h3>Rank</h3>
                <p>2</p>
            </div>
        </div>
        <div class="columns second-row">
            <div class="column">
                <h3>Role</h3>
                <p>Web Developer</p>
            </div>
            <div class="column">
                <h3>Team</h3>
                <p>Dynamic Content</p>
            </div>
            <div class="column">
                <h3>Slik Start</h3>
                <p>August 3</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.second-row {
    margin-top: 60px;
}
h3 {
    font-size: .8em;
    color: #686670;
}

p {
    color: #fff;
}
.column {
    border-left: 1px solid #fff;
    padding-top: 0;
    padding-bottom: 0;
}
$mobile: 480px;
@media screen and (max-width: $mobile) {
    .profile .column {
        margin-bottom: 20px;
    }
    .second-row {
        margin-top: 0;
    }
}
</style>


