<template>
  <main class="conteudo container-fluid" :class="{ 'modo-escuro': modoEscuroAtivo }">
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
      modoEscuroAtivo: false,
      activeClass: null
    }
  },
  methods: {
    trocarTema(modoEscuroAtivo: boolean): void {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>

<style>
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro {
  --bg-primario: #36363a;
  --texto-primario: #ddd;
  color: var(--texto-primario);
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>