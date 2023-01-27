<template>
  <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 text-bg-dark">
    <div class="d-flex flex-column flex-shrink-0 text-center px-3 pt-2 min-vh-100">
      <a href="/" class="align-items-center text-white text-decoration-none">
        <span style="font-size: 38px;" class="pe-none me-2">
          <img class="img-fluid" src="../assets/logo_jbal.png" :width="100" alt="LogoMarca">
        </span>
      </a>
      <hr>
      <div class="text-center">
        <button class="btn btn-secondary" @click="alterarTema"
        data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">
          <li v-bind:class="[activeClass]"></li>
          <!-- {{ textoBotao }} -->
        </button>
        <hr>
      </div>
      <ul class="hover nav nav-pills flex-column mb-sm-auto mb-0" id="menu">
        <li class="nav-item">
          <router-link to="/" class="nav-link text-white">
            <i class="fa-solid fa-list-check me-2"></i>
            <span class="ms-1 d-none d-sm-inline">Tarefas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projetos" class="nav-link text-white">
            <i class="fa-solid fa-diagram-project me-2"></i>
            <span class="ms-1 d-none d-sm-inline">Projetos</span>
          </router-link>
        </li>
      </ul>
      <hr>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BarraLateral',
  emits: ['aoTemaAlterado'],
  data() {
    return {
      modoEscuroAtivo: false,
      activeClass: 'fa-solid fa-moon',
    }
  },
  computed: {
    textoBotao() {
      if (this.modoEscuroAtivo) {
        return 'Desativar modo escuro'
      }
      return 'Ativar modo escuro'
    }
  },
  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo
      this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
      if (this.modoEscuroAtivo) {
        this.activeClass = 'fa-solid fa-sun'
      } else {
        this.activeClass = 'fa-solid fa-moon'
      }
    }
  }
})
</script>
