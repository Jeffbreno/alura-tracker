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
import { defineComponent, ref } from 'vue';
import useNotificador from '@/hooks/notificador'
import { ALTERAR_PROJETO, CADASTRAR_PROJETO } from '@/store/tipo-acoes';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'FormularioVue',
    props: {
        id: {
            type: String
        }
    },
    setup(props) {
        const router = useRouter();
        const store = useStore();
        const { notificar } = useNotificador();
        const nomeDoProjeto = ref("");

        if (props.id) {
            const projeto = store.state.projeto.projetos.find((proj) => proj.id == props.id);
            nomeDoProjeto.value = projeto?.nome || ''
        }
        
        const salvar = () => {
            if (props.id) {
                store.dispatch(ALTERAR_PROJETO, {
                    id: props.id,
                    nome: nomeDoProjeto.value
                }).then(() => success()).catch(() => { error() });
            } else {
                store.dispatch(CADASTRAR_PROJETO, nomeDoProjeto).then(() => {
                    success();
                }).catch(() => {
                    error();
                })
            }
        }

        const success = () => {
            nomeDoProjeto.value = ''
            notificar(TipoNotificacao.SUCESSO, 'Sucesso', 'Seu projeto foi cadasrado')
            router.push('/projetos')
        }

        const error = () => {
            nomeDoProjeto.value = ''
            notificar(TipoNotificacao.FALHA, 'Atenção', 'Erro inesperado, o comando falhou')
            router.push('/projetos')
        }

        return { nomeDoProjeto, salvar }
    }
})
</script>