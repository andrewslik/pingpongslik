<template lang="html">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand ">
        <div class="logo-container">
            <img src="static/logo-slik.svg" alt="slik-logo">
        </div>
      </div>
      <div class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item"><img class="profile-icon image is-32x32" src="http://i.pravatar.cc/32"/></div>
                <div class="navbar-item">Hello Andrew!</div>
                <div class="navbar-item">Rank: 2</div>
                <div class="navbar-item sublink">Wins: 80</div>
                <div class="navbar-item sublink">Losses: 20</div>
                <div class="navbar-item sublink">Win rate: 80%</div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item"><a class="button challenge">Challenge Sam!</a></div>
                <div class="navbar-item"><a class="button is-white is-outlined normal-game">Friendly match</a></div>
                <div class="navbar-item login-out">Log out</div>
            </div>
      </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbar {
    background: #3c3a47;
    .logo-container {
        width: 80px;
        height: 80px;
        background: #1f65f4;
        position: relative;
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
}

.profile-icon {
    border-radius: 50%;
    max-height: 32px !important;
}

.navbar-item {
    color: #fff;
    font-size: 14px;
}

.sublink {
    color: #686670;
}


.challenge {
    background: #ff1782;
    border: 1px solid #ff1782;
    font-size: 14px;
    color: #fff;
}
.normal-game {
    font-size: 14px;
}

.login-out {
    text-decoration: underline;
}

</style>
