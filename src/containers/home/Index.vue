<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-wrap-lines="{lines: 2}">hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your App',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  p {
    width: 200px;
  }
}
</style>
