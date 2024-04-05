export class Fila {

    private elementos: any[];

    constructor() {
        this.elementos = [];
    }

    enfileirar(elemento: any): void {
        this.elementos.push(elemento);
    }

    desenfileirar(): any | undefined {
        return this.elementos.shift();
    }

    estaVazia(): boolean {
        return this.elementos.length === 0;
    }
}

export class RoboDeLimpeza{

    private filaDeTarefas: Fila;

    constructor() {
        this.filaDeTarefas = new Fila();
    }

    async adicionarUmatarefa(tarefa: string): Promise<void> {
        this.filaDeTarefas.enfileirar(tarefa);
    }

    async executarProximaTarefa(): Promise<string> {
        const tarefa = this.filaDeTarefas.desenfileirar();
        return tarefa;
    }

    async executarTodasTarefas(): Promise<string> {

        let resultado = "";

        while (!this.filaDeTarefas.estaVazia()) {
            const tarefa = this.filaDeTarefas.desenfileirar();
            resultado += tarefa;
        }

        return resultado;
    }
}


