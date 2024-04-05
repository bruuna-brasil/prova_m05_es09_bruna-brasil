import { Fila, RoboDeLimpeza } from './prova';
import { describe, it, expect, beforeEach } from '@jest/globals';

describe('Testes de unidade para a classe Fila', () => {
    let fila: Fila;

    beforeEach(() => {
        fila = new Fila();
    });

    it('deve enfileirar corretamente', () => {
        fila.enfileirar(1);
        expect(fila['elementos']).toEqual([1]);
    });

    it('deve desenfileirar corretamente', () => {
        fila.enfileirar(1);
        expect(fila.desenfileirar()).toBe(1);
    });

    it('deve verificar corretamente se a fila está vazia', () => {
        expect(fila.estaVazia()).toBe(true);
        fila.enfileirar(1);
        expect(fila.estaVazia()).toBe(false);
    });
});

describe('Testes de unidade para a classe RoboDeLimpeza', () => {
    let roboDeLimpeza: RoboDeLimpeza;

    beforeEach(() => {
        roboDeLimpeza = new RoboDeLimpeza();
    });

    it('deve adicionar uma tarefa corretamente', async () => {
        await roboDeLimpeza.adicionarUmatarefa("Limpar o chão");
        expect(roboDeLimpeza['filaDeTarefas']['elementos']).toEqual(["Limpar o chão"]);
    });

    it('deve executar a próxima tarefa corretamente', async () => {
        await roboDeLimpeza.adicionarUmatarefa("Limpar o chão");
        expect(await roboDeLimpeza.executarProximaTarefa()).toBe("Limpar o chão");
    });

    it('deve executar todas as tarefas corretamente', async () => {
        await roboDeLimpeza.adicionarUmatarefa("Limpar o chão");
        await roboDeLimpeza.adicionarUmatarefa("Limpar a mesa");
        expect(await roboDeLimpeza.executarTodasTarefas()).toBe("Limpar o chãoLimpar a mesa");
    });
});

describe('Testes de integração entre as classes Fila e RoboDeLimpeza', () => {
    let roboDeLimpeza: RoboDeLimpeza;

    beforeEach(() => {
        roboDeLimpeza = new RoboDeLimpeza();
    });

    it('deve adicionar e executar uma tarefa corretamente', async () => {
        await roboDeLimpeza.adicionarUmatarefa("Limpar o chão");
        expect(await roboDeLimpeza.executarProximaTarefa()).toBe("Limpar o chão");
    });

    it('deve executar todas as tarefas corretamente', async () => {
        await roboDeLimpeza.adicionarUmatarefa("Limpar o chão");
        await roboDeLimpeza.adicionarUmatarefa("Limpar a mesa");
        expect(await roboDeLimpeza.executarTodasTarefas()).toBe("Limpar o chãoLimpar a mesa");
    });
});

