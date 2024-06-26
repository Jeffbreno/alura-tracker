import { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { NOTIFICAR } from "@/store/tipos-mutacoes";
import INotificacao from "@/interfaces/INotificacao";
import { EstadoProjeto, projeto } from "./modulos/projeto";
import { EstadoTarefa, tarefa } from "./modulos/tarefas";

export interface Estado {
  tarefa: EstadoTarefa,
  projeto: EstadoProjeto
  notificacoes: INotificacao[],
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    tarefa: {
      tarefas: []
    },
    projeto: {
      projetos: []
    },
    notificacoes: [],
  },
  mutations: {
    [NOTIFICAR](state, novaNotificacao: INotificacao) {
      novaNotificacao.id = new Date().getTime()
      state.notificacoes.push(novaNotificacao)
      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
      }, 3000)
    }
  },
  modules: {
    projeto,
    tarefa
  }
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
