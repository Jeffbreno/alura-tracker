<template>
  <main class="container-fluid" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="row flex-nowrap">
      <BarraLateral @aoTemaAlterado="trocarTema" />
      <div class="col py-3" style="border: 1px solid #000;">
        <h3>Gerenciamento de Tarefaz</h3>
        <p class="lead">
          <RouterView></RouterView>
        </p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral
  },
  data() {
    return {
      modoEscuroAtivo: false
    }
  },
  methods: {
    trocarTema(modoEscuroAtivo: boolean): void {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>
