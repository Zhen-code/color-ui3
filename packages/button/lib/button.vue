<template>
  <button
    :class="classs"
    @click="handleClick"
    :disabled="disabled"
  >
    <i v-if="loading" class="z-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
export default defineComponent({
  name: "ZButton", // ✅ 定义 name
  props: {
    type: {
      type: String as PropType<
        "primary" | "success" | "warning" | "danger" | "info" | "default"
      >,
      default: "primary",
      validator: (val: string) => {
        return [
          "default",
          "primary",
          "success",
          "warning",
          "danger",
          "info",
        ].includes(val);
      },
    },
    size: {
      type: String as PropType<ComponentSize>,
    },
    icon: {
      type: String,
      default: "",
    },
    loading: Boolean,
    disabled: Boolean,
    round: Boolean,
  },

  emits: ["click"],
  setup(props, ctx) {
    const classs = computed(() => [
      "z-button",
      "z-button--" + props.type,
      props.size ? "z-button--" + props.size : "",
      {
        "is-disabled": props.disabled, // 状态全部以 is-开头
        "is-loading": props.loading,
        "is-round": props.round,
      },
    ]);
    const handleClick = (e) => {
      ctx.emit("click", e);
    };
    return {
      classs,
      handleClick,
    };
  },
});
</script>