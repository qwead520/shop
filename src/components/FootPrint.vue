<template>
    <div>
        I'm the {{ pageName }} page;
      <Footer></Footer>
    </div>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'FootPrint',
  components: {Footer},
  data () {
    return {
      pageName: 'footprint'
    }
  }
}
</script>

<style scoped>

</style>
