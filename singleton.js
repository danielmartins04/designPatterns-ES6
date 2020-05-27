//Singleton - Tem como objetivo criar uma única instância de uma função construtora e retorná-la toda vez em que for necessário utilizá-la.
function Pessoa() {
    if (!Pessoa.instance) {
        Pessoa.instance = this;
    }

    return Pessoa.instance;
}

const p2 = Pessoa.call({name: 'Daniel'});
const p3 = Pessoa.call({name: 'Custom name'});

console.log(p2);
console.log(p3);