var lista = [
    { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 },
    { nome: 'Emilly', sobrenome: 'Barbosa', idade: 46 },
    { nome: 'Vitória', sobrenome: 'Costa', idade: 83 },
    { nome: 'Erick', sobrenome: 'Ferreira', idade: 16 }
];

function buscar(nome, valor, lista){
    return lista.filter(
        function(elemento) {
            return elemento[nome] === valor;
        }
    );
}
console.log(buscar("nome", "Tânia", lista));