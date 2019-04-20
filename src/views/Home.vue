<template>
  <div class="home">
    <div class="real-1px">测试</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { getHotSearch } from 'api'
export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  mounted() {
    this.$toast({content: '11111'})
    // this.$loading.show()
    this.getData()
  },
  methods: {
    async getData() {
      const {data, code} = await getHotSearch({
        type: 1
      })
      console.log(code)
    }
  },
};
</script>
<style lang="scss" scoped>
.home{
  font-size:28px;
  .real-1px {
    width: 100px;
    height: 100px;
    border: 1px solid transparent;
    border-image: svg(1px-border param(--color #00b1ff)) 2 2 stretch;
    color: $basecolor;
  }
}
</style>

