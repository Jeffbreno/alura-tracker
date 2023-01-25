<template>
    <div class="row">
        <!-- <div class="col-2"></div> -->
        <div class="col-2" style="border: 1px solid #000">
            <Cronometro :tempoEmSegundos="tempoEmSegundos" />
        </div>
        <div class="col-5" style="border: 1px solid #000">
            <Botao @clicado="iniciar" btn="btn btn-success" icone="me-2 fa-solid fa-play" texto="Play"
                :desabilitado="cronometroRodando" />
            <Botao @clicado="finalizar" btn="btn btn-danger" icone="me-2 fa-solid fa-stop" texto="Stop"
                :desabilitado="!cronometroRodando" />
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';
import Botao from './Botao.vue';

export default defineComponent({
    name: 'TemporizadorVue',
    emits: ['aoTemporizadorFinalizado'],
    components: {
        Cronometro,
        Botao
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },
    methods: {
        iniciar() {
            this.cronometroRodando = true
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1
            }, 1000)
        },
        finalizar() {
            this.cronometroRodando = false
            clearInterval(this.cronometro)
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0
        }

    }
});
</script>

