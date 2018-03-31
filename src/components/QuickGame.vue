<template>
    <div>
        <h1>Quick Match</h1>
        <div class="columns">

            <div class="column play">
                <p>Challenge</p>
            </div>
            <div class="column challenge">
                <p>Friendly</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
h1 {
    margin-top: 60px;
    margin-bottom: 30px;
    color: #fff;
}
p {
    color: #fff;
}
.play, .challenge {
    width: 90%;
    height: 220px;
    border-radius: 7px;
    background: #FF1782;
    margin: 0 10px;
    p {
        margin: auto;
        width: 100%;
        text-align: center;
        font-size: 50px;
        line-height: 180px;
    }
}
.challenge {
    background: transparent;
    border: 1px solid #fff;
    &:hover {
        background: #fff;
        p {
            color: #000;
        }
    }
}
.play {
    &:hover {
        background: #ec5199;
    }
}
$mobile: 480px;
@media screen and (max-width: $mobile) {

    .play, .challenge {
        width: 90%;
        height: 100px;
        margin: 0 10px;
        p {
            margin: auto;
            width: 100%;
            text-align: center;
            font-size: 26px;
            line-height: 78px;
        }
    }
    .play {
        margin-bottom: 20px;
    }
}
</style>


