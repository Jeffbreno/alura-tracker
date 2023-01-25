<template>
  <header>
    <h1>
      <img src="../assets/logo_jbal.png" :width="180" alt="LogoMarca">
    </h1>
    <button class="button" @click="alterarTema">
      {{ textoBotao }}
    </button>

    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
      <li class="nav-item">
        <router-link to="/" class="nav-link align-middle px-0">
          <i class="fa-solid fa-list-check bi me-2"></i>
          <span class="ms-1 d-none d-sm-inline">Tarefas</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/projetos" class="nav-link align-middle px-0">
          <i class="fa-solid fa-diagram-project bi me-2"></i>
          <span class="ms-1 d-none d-sm-inline">Projetos</span>
        </router-link>
      </li>
    </ul>
  </header>
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

<!-- <style scoped>
header {
  padding: 1rem;
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}

.painel .li {
  margin: 8px 0;
}

.link {
  color: #fff;
}

.link:hover {
  color: #FAF0CA;
}

.link.router-link-active {
  color: #FAF0CA;
}
</style> -->
