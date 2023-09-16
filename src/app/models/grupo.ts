import { Sintoma } from "./sintoma";

export interface Grupo{
    nome: string;
    sintomas: Sintoma[];
    detalhes: string;
}