import { Grupo } from "./grupo";

export class Estratificacao{
    nomeUsuario: string = ''
    grupos: Grupo[] = [];
    dataNascimento?: Date;
    telefone: string = '';
    nomeInscricaoProficional: string = '';
    municipio: string = '';
    cartaoSus: string = '';
    servicoSaude: string = '';
    data?: Date;
    referencia: string = '';
    contrarreferencia: string = '';
    endereco: string = '';
    numero: string = '';
    complemento: string = '';

    total: number = 0;
    resultado: string = '';
    direcionamento: string = '';
    css: string = '';
    local: string = '';

    resumida: boolean = true;
}