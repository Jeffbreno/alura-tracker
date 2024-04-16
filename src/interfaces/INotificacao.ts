export enum TipoNotificacao {
    SUCESSO,
    FALHA,
    ATENCAO
}

export default interface INotificacao {
    id: number,
    tipo: TipoNotificacao,
    titulo: string,
    texto: string
}