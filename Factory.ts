
interface Funcionario {
    getNome(): string;
    getCargo(): string;
}

class Professor implements Funcionario {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    getNome(): string {
        return this.nome;
    }

    getCargo(): string {
        return "Professor";
    }
}

class FuncionarioAdministrativo implements Funcionario {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    getNome(): string {
        return this.nome;
    }

    getCargo(): string {
        return "Funcionário Administrativo";
    }
}


interface FuncionarioFactory {
    criarFuncionario(nome: string): Funcionario;
}

class ProfessorFactory implements FuncionarioFactory {
    criarFuncionario(nome: string): Funcionario {
        return new Professor(nome);
    }
}

class FuncionarioAdministrativoFactory implements FuncionarioFactory {
    criarFuncionario(nome: string): Funcionario {
        return new FuncionarioAdministrativo(nome);
    }
}

let professorFactory = new ProfessorFactory();
let administrativoFactory = new FuncionarioAdministrativoFactory();

let professor = professorFactory.criarFuncionario("João Silva");
let administrativo = administrativoFactory.criarFuncionario("Maria Santos");

console.log("Professor: " + professor.getNome() + ", Cargo: " + professor.getCargo());
console.log("Funcionário Administrativo: " + administrativo.getNome() + ", Cargo: " + administrativo.getCargo());
