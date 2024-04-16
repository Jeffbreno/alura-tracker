<template>
    <section>
        <h4>Criar novo Projeto</h4>
        <form class="row mb-3" @submit.prevent="salvar" novalidate>
            <div class="col-9 col-sm-11">
                <input type="text" class="form-control" v-model="nomeDoProjeto" id="nomeDoProjeto"
                    placeholder="Nome do Projeto" required />
            </div>
            <div class="col-1">
                <button type="submit" class="btn btn-primary">Salvar</button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { TipoNotificacao } from '@/interfaces/INotificacao';
import { useStore } from '@/store';
import { ADICIONA_PROJETO, ALTERA_PROJETO, NOTIFICAR } from '@/store/tipos-mutacoes';
import { defineComponent } from 'vue';
import useNotificador from '@/hooks/notificador'

export default defineComponent({
    name: 'FormularioVue',
    props: {
        id: {
            type: String
        }
    },

    mounted() {
        if (this.id) {
            const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
            this.nomeDoProjeto = projeto?.nome || ''
        }
    },
    data() {
        return {
            nomeDoProjeto: ''
        }
    },
    methods: {
        salvar() {
            if (this.id) {
                this.store.commit(ALTERA_PROJETO, {
                    id: this.id,
                    nome: this.nomeDoProjeto
                })
            } else {
                this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)

            }
            this.nomeDoProjeto = ''
            this.notificar(TipoNotificacao.SUCESSO, 'Sucesso', 'Seu projeto foi cadasrado')
            this.$router.push('/projetos')
        },
    },
    setup() {
        const store = useStore()
        const { notificar } = useNotificador();
        return { store, notificar }
    }
})
</script>