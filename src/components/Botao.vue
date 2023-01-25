<template>
  <button :class="btn" @click="clicado" :disabled="desabilitado">
    <span class="fa-xs">
      <i :class="icone"></i>
    </span>
    <span>{{ texto }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BotaoVue",
  emits: ['clicado'],
  props: {
    desabilitado: {
      type: Boolean
    },
    btn:{
      type: String,
      required: true
    },
    icone: {
      type: String,
      required: true
    },
    texto: {
      type: String,
      required: true
    },
  },
  methods: {
    clicado () : void {
      this.$emit('clicado')
    }
  }
});
</script>
