<template>
  <i :class="bem.block()" :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useNamespace } from "../../utils/lib/create";
import { iconProps } from "./icon"
export default defineComponent({
  name:'ZIcon',
  props: iconProps,
  setup(props, ctx) {
    const bem = useNamespace('icon');
    const style = computed(() => {
      if(!props.color && !props.size) return {}
      return {
        ...(props.color ? {color: props.color} : {}),
        ...(props.size ? {fontSize: props.size + "px"} : {})
      }
    })
    return{
      bem,
      style
    }
  },
  
})
</script>