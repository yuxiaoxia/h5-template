import Vue from 'vue'
import Loading from './loading'
import utils from 'utils'

let instance;
let LoadingConstructor = Vue.extend(Loading);
let initInstance = () => {
  instance = new LoadingConstructor({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
}

let isShowing = false;

let show = (text) => {
  if (!isShowing) {
    isShowing = true;
    initInstance();
    instance.show = true;
    instance.text = text ? text : '正在加载';

    utils.prevent();
  }
}

let hide = () => {
  instance.show = false;
  isShowing = false;
  utils.recover();
}
export default {
  install(Vue) {
    Vue.prototype.$loading = {
      show,
      hide
    }
  }
}
