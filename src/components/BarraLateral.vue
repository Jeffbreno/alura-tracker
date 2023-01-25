<template>
  <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
    <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span style="font-size: 38px;" class="pe-none me-2">
          <!-- <i class="fa-brands fa-bootstrap"></i> -->
          <img src="../assets/logo_jbal.png" :width="90" alt="LogoMarca">
        </span>
        <!-- <span class="fs-5 d-none d-sm-inline">Bootstrap + VUE</span> -->
      </a>
      <hr>
      <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        <li class="nav-item">
          <router-link to="/" class="nav-link align-middle px-0">
            <i class="fa-solid fa-list-check me-2"></i>
            <span class="ms-1 d-none d-sm-inline">Tarefas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projetos" class="nav-link align-middle px-0">
            <i class="fa-solid fa-diagram-project me-2"></i>
            <span class="ms-1 d-none d-sm-inline">Projetos</span>
          </router-link>
        </li>
      </ul>
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
      modoEscuroAtivo: false
    }
  },
  computed: {
    textoBotao() {
      if (this.modoEscuroAtivo) {
        return 'Desativa modo escuro'
      }
      return 'Ativar modo escuro'
    }
  },
  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo
      this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
    }
  }
})
</script>
