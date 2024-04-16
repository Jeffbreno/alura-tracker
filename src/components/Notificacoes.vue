<template>
    <div class="notificacoes">
        <div class="card text-white" :class="contextoBackgroud[notificacao.tipo]" v-for="notificacao in notificacoes"
            :key="notificacao.id">
            <h5 class="card-header alert text-card" :class="contextoTitulo[notificacao.tipo]">{{ notificacao.titulo }}
            </h5>
            <div class="card-body alert">
                <p class="card-text fw-bold">{{ notificacao.texto }}</p>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { TipoNotificacao } from '@/interfaces/INotificacao';
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'NotificacoesVue',
    data() {
        return {
            contextoTitulo: {
                [TipoNotificacao.SUCESSO]: 'alert-success',
                [TipoNotificacao.FALHA]: 'alert-danger',
                [TipoNotificacao.ATENCAO]: 'alert-warning',
            },
            contextoBackgroud: {
                [TipoNotificacao.SUCESSO]: 'bg-success',
                [TipoNotificacao.FALHA]: 'bg-danger',
                [TipoNotificacao.ATENCAO]: 'bg-warning',
            }
        }
    },
    setup() {
        const store = useStore()
        return {
            notificacoes: computed(() => store.state.notificacoes)
        }
    }
})
</script>

<style scoped>
.text-card {
    font-size: .8em;
}

.card-text {
    font-size: .7em;
    padding-bottom: 10px;
}

.notificacoes {
    position: absolute;
    right: 0;
    top: 0;
    width: 300px;
    padding: 15px;
    z-index: 110;
}
</style>