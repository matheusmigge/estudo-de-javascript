//var foi a primeira forma criada para se tratar de variáveis. Ela não tem muitas regras de uso, e pode inclusive ser omitida na declaração, pois o JavasScript automaticamente interpreta como um var

const teste_de_var = false;

if (teste_de_var === true) {
    
    altura = 5;
    comprimento = 7;
    
    area = altura * comprimento;
    
    console.log(area); // vai sair 35, exatamente o resultado de 5x7
}

//let foi criada juntamento com a const, como novos padrões de uso, em que let seria uma variável que poderá ter seu valor alterado futuramente, e const, como valores que não podem sofrer alterações futuras

const teste_de_let = false;

if (teste_de_let === true) {
    
    let altura = 5;
    let comprimento = 7;
    let area = altura * comprimento;
    
    console.log(area); // vai sair 35

    altura = 7;
    area = altura * comprimento;
    console.log(area); // vai sair 49, pois tanto as variáveis altura como área tiveram seu valores modificados, e isso vai ser permitido

}

// const é o oposto de let, ou seja, armazena valores que não podem ser ser modificados posteriormente

const teste_de_const = true;

if (teste_de_const === true) {
    
    const altura = 5;
    const comprimento = 7;
    const area = altura * comprimento;
    
    console.log(area); // vai sair 35

    altura = 7; // a aplicação vai parar aqui, pois não permitirá a modificação da constante
    area = altura * comprimento;
    console.log(area);

}