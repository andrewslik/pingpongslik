<template lang="html">
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Ping Pong</strong> by <a href="http://slik.com.au">slik</a>. Copyright {{ new Date().getFullYear()}}.
          </p>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
}
</script>

<style lang="css">
.footer {
    font-size: 14px;
    background: #3c3a47;
    color: #fff;
}
strong {
    color: #fff;
}
a {
    color: #ff1782;
}

</style>
