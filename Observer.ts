
interface Observer {
    update(evento: string): void;
}


class Aluno implements Observer {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    update(evento: string): void {
        console.log(this.nome + ": Evento recebido - " + evento);
    }
}


interface Subject {
    registrarObserver(observer: Observer): void;
    removerObserver(observer: Observer): void;
    notificarObservers(evento: string): void;
}


class EventoUniCesumar implements Subject {
    private observers: Observer[] = [];

    registrarObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removerObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notificarObservers(evento: string): void {
        this.observers.forEach(observer => observer.update(evento));
    }
}


let evento = new EventoUniCesumar();

let aluno1 = new Aluno("João");
let aluno2 = new Aluno("Maria");

evento.registrarObserver(aluno1);
evento.registrarObserver(aluno2);

evento.notificarObservers("Aula de hoje cancelada");

evento.removerObserver(aluno1);

evento.notificarObservers("Palestra sobre carreira profissional");
