<template>
  <transition name="my-fade">
	  <div class="toast" v-if="show">{{content}}
    </div>
  </transition>
</template>

<script>
export default {
	name: 'toast',
	props: {
	},
  data() {
    return {
      show: true,
      content: '',
      duration: 1500,
      location: 'center',
    }
  }
}
</script>
<style scoped>
.toast {
    position: fixed;
    z-index: 999999;
    line-height: 18px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 30px;
    text-align: center;
    color: #fff;
    border-radius: 12px;
    background: #323232;
    opacity: .9;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    font-size: 26px;
}

.my-fade-enter {
  opacity: 0
}
.my-fade-enter-active, .my-fade-leave-active {
  transition: opacity .4s
}
.my-fade-leave-active {
	opacity: 0;
}

</style>

