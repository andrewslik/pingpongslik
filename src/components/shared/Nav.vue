<template lang="html">
    <div class="header">
        <div class="logo">
          <img src="static/logo-slik.svg" alt="">
        </div>
        <div class="header-body">
            <img class="avatar" src="http://i.pravatar.cc/30" alt="">
            <p class="bio-name" >Hello Andrew!</p>
            <p class="rank">Rank: 2</p>

            <p>Wins: 8</p>
            <p>Losses: 2</p>
            <p>Win rate: 80%</p>

            <div class="cta-container">
                <p class="challenge">Challenge</p>
                <p class="quick">Quick match</p>
                <p>Log out</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    z-index: 0;
    background: #3C3A47;
    font-family: 'Open Sans', sans-serif;
}

.logo {
    background: #1F65F4;
    position: relative;
    top: 0;
    left: 0;
    width: 80px;
    height: 80px;
    z-index: 20;
    display: inline-block;
    img {
        width: 28px;
        height: 39.5px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
}
.header-body {
    position: absolute;
    top: 0;
    left: 80px;
    width: calc(100% - 80px);
    height: 100%;
    color: #fff;
    .avatar {
        position: relative;
        top: 10px;
        left: 13px;
        border-radius: 50%;
        margin: 0px 12px;
        width: 30px;
        height: 30px;
    }
    p {
        display: inline-block;
        margin: 0;
        line-height: 80px;
        padding: 0 20px;
        color: #686670;
        font-size: 14px;
    }
    .bio-name, .rank {
        color: #FFF;
    }
    .challenge, .quick {
        background: #FF1782;
        height: 40px;
        top: 0;
        position: relative;
        line-height: 40px;
        border-radius: 6px;
        color: #fff;
        margin: 0 10px;
        border: 2px solid #FF1782;
    }
    .quick {
        background: transparent;
        border: 2px solid #FFF;
    }
    .cta-container {
        display: inline-block;
        float: right;
        margin-right: 30px;
        clear: both;
    }

}

</style>
