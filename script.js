let numeros = [] //vetor para armazenar os números

function Adicionar(){
    var num = window.document.getElementById('txtn')
    var res = window.document.getElementById('txtnum')
    var msg = window.document.getElementById('msg')
    var n = Number(num.value)
    
    if(n <= 0 || n > 100){
        alert('Por favor, digite um número entre 1 e 100')
        
    }else if (numeros.includes(n)){ //verifica se o número já foi adicionado 
        alert('Número já foi adicionado')
    }else {
        numeros.push(n) //adiciona o número ao vetor 
        res.innerHTML += `Valor adicionado: ${n}\n` //exibe no textarea
        num.value = '' // limpa o campo de entrada 
        num.focus() // deixa o curso no campo de entrada 
        }
}

function Finalizar(){
    var msg = window.document.getElementById('msg')

    if(numeros.length == 0 ){
        alert('Adicione valores antes de finalizar')
    }else{

        let total = numeros.length;
        let soma = numeros.reduce((acc, curr) => acc + curr, 0)
        let media = soma / total;
        let maior = Math.max(...numeros);
        let menor = Math.min(...numeros);
        
    msg.innerHTML = `
        <p>${total} números foram adicionados</p>
        <p>A soma dos valores adicionados é ${soma}</p>
        <p>A média dos valores adicionados é ${media.toFixed()}</p>
        <p>O maior valor é:  ${maior}</p>
        <p> O menor valor é: ${menor}</p>
        
      `
    }
   
}