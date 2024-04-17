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
import { defineComponent } from 'vue';
import useNotificador from '@/hooks/notificador'
import { ALTERAR_PROJETO, CADASTRAR_PROJETO } from '@/store/tipo-acoes';

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
                this.store.dispatch(ALTERAR_PROJETO, {
                    id: this.id,
                    nome: this.nomeDoProjeto
                }).then(() => this.success()).catch(() => { this.error() });
            } else {
                this.store.dispatch(CADASTRAR_PROJETO, this.nomeDoProjeto).then(() => {
                    this.success();
                }).catch(() => {
                    this.error();
                })

            }
        },
        success() {
            this.nomeDoProjeto = ''
            this.notificar(TipoNotificacao.SUCESSO, 'Sucesso', 'Seu projeto foi cadasrado')
            this.$router.push('/projetos')
        },
        error() {
            this.nomeDoProjeto = ''
            this.notificar(TipoNotificacao.FALHA, 'Atenção', 'Erro inesperado, o comando falhou')
            this.$router.push('/projetos')
        }
    },
    setup() {
        const store = useStore()
        const { notificar } = useNotificador();
        return { store, notificar }
    }
})
</script>