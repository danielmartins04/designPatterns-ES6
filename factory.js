//Factory - Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o new, são consideradas funções Factory.
function Pessoa(customProperties) {
    return {
        name: 'Daniel',
        lastName: 'Martins',
        ...customProperties
    }
}

const p1 = Pessoa({name: 'Custom Name', age: 27});
console.log(p1);