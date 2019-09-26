<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" @click="clickEvent()"></use>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  },
  methods:{
      clickEvent(){
          if(this.iconClass == 'edit'){
          this.$emit('svg-Edit-click')
          }else if(this.iconClass == 'delete'){
          this.$emit('svg-Delect-click')
          }
      }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.ml{
    margin-left: 30px;
    padding: 2px;
}
</style>
