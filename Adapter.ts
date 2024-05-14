
interface Funcionario {
    getNome(): string;
    getCargo(): string;
}

class FuncionarioUniCesumar implements Funcionario {
    private nome: string;
    private cargo: string;

    constructor(nome: string, cargo: string) {
        this.nome = nome;
        this.cargo = cargo;
    }

    getNome(): string {
        return this.nome;
    }

    getCargo(): string {
        return this.cargo;
    }
}


class ProfessorAdapter implements Funcionario {
    private professor: Professor;

    constructor(professor: Professor) {
        this.professor = professor;
    }

    getNome(): string {
        return this.professor.getNome();
    }

    getCargo(): string {
        return "Professor";
    }
}


class adapter {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    getNome(): string {
        return this.nome;
    }
}

let Adapter = new adapter("João Silva");
let funcionario = new ProfessorAdapter(adapter);

console.log("Nome: " + funcionario.getNome());
console.log("Cargo: " + funcionario.getCargo());
