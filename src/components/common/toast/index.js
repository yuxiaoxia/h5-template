import ToastComponent from './toast'
import Vue from 'vue'

let VueToast = Vue.extend(ToastComponent)

const Toast = (config) => {
  let newToast = new VueToast({
    el: document.createElement('div'),
    data() {
      return {
        ...config,
      }
    }
  })
  document.body.appendChild(newToast.$el);
  newToast.show = true
  setTimeout(() => {
    newToast.show = false
  }, config.duration || newToast.$data.duration)
}

export default {
    install (Vue, config={}) {
        Vue.prototype.$toast = Toast;
    }
};


