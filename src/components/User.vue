<template>
    <div>
        I'm the {{ pageName }} page;
      <Footer></Footer>
    </div>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'User',
  components: {Footer},
  data () {
    return {
      pageName: 'user'
    }
  }
}
</script>

<style scoped>

</style>
