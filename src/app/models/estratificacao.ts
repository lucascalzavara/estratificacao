import { Grupo } from "./grupo";

export class Estratificacao{
    nomeUsuario: string = ''
    dataNascimento?: Date;
    telefone: string = '';
    endereco: string = '';
    numero: string = '';
    complemento: string = '';
    servicoSaude: string = '';
    servicoSaudeEspecifico: string = '';
    municipio: string = '';
    cartaoSus: string = '';
    nomeInscricaoProficional: string = '';
    informacoesAdicionais: string = '';
    
    data?: Date;
    grupos: Grupo[] = [];

    total: number = 0;
    resultado: string = '';
    direcionamento: string = '';
    css: string = '';
    local: string = '';

    resumida: boolean = true;
}