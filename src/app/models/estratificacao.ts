import { Grupo } from "./grupo";

export class Estratificacao{
    nomeUsuario: string = ''
    grupos: Grupo[] = [];
    ocupacao: string = '';
    numeroProntuario: string = '';
    nomeInscricaoProficional: string = '';
    municipio: string = '';
    cartaoSus: string = '';
    servicoSaude: string = '';
    data?: Date ;
    contrarreferencia: string = '';

    total: number = 0;
    resultado: string = '';
    direcionamento: string = '';
    css: string = '';
}