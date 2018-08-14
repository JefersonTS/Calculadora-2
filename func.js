function calcula1() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    var n4 = parseFloat(document.getElementById("n4").value);
    var media;
    var mensagem1;
    media = (n1 + n2 + n3 + n4) / 4;

    if ((media >= 0) && (media < 7)) {
        mensagem1 = "Reprovado";
    }
    else if ((media >= 7) && (media <10)){
        mensagem1 = "Aprovado"
    }
    else {
        mensagem1 = "Média inválida"
    }
    document.getElementById("mensagem1").innerHTML = mensagem1;
}

function calcula2() {
    var nu1 = parseFloat(document.getElementById("nu1").value);
    var nu2 = parseFloat(document.getElementById("nu2").value);
    var media2;
    var mensagem2;
    media2 = (nu1 + nu2) / 2;

    if ((media2 >= 0) && (media2 < 3)) {
        mensagem2 = "Reprovado";
    }
    else if ((media2 >= 3) && (media2 <7)) {
        mensagem2 = "Exame";
    }
    else if ((media2 >= 7) && (media2 <= 10)) {
        mensagem2 = "Aprovado"
    }
    else {
        mensagem2 = "Média inválida"
    }
    document.getElementById("mensagem2").innerHTML = mensagem2;
}

function calcula3() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var mensagem3;
    if (num1 < num2){
        mensagem3 = "O menor numero é : " + num1;
    }
    else if (num1 > num2) {
        mensagem3 = "O menor número é : " + num2;
    }
    else {
        mensagem3 = "Números Iguais"
    }
    document.getElementById("mensagem3").innerHTML = mensagem3;
}

function calcula4() {
    var nume1 = parseInt(document.getElementById("nume1").value);
    var nume2 = parseInt(document.getElementById("nume2").value);
    var nume3 = parseInt(document.getElementById("nume3").value);

    if ((nume1 > nume2) && (nume1 > nume3)) {
        document.getElementById("mensagem4").innerHTML = "O maior numero é : " + nume1;
    }
    else if ((nume2 > nume1) && (nume2 > nume3)) {
        document.getElementById("mensagem4").innerHTML = "O maior número é : " + nume2;
    }
    else if ((nume3 > nume1) && (nume3 > nume2))  {
        document.getElementById("mensagem4").innerHTML = "O maior número é : " + nume3;
    }
    else {
        document.getElementById("mensagem4").innerHTML = "Números iguais";
    }
}
function calcula5() {
    var numer1 = parseInt(document.getElementById("numer1").value);
    var numer2 = parseInt(document.getElementById("numer2").value);
    var op = document.getElementById("op").value;
    var media = ((numer1 + numer2 ) / 2 );
    var mensagem5;

    if ( op == 1 ) {
        mensagem5 = media;
    }
    else if ( op == 2 ){
        if (numer1 > numer2) {
            mensagem5 = numer1 - numer2;
        }
        else if(numer2 > numer1) {
            mensagem5 = numer2 - numer1;
        }
        else {
            mensagem5 = "Números iguals"
        }
    }
    else if ( op == 3 ) {
        mensagem5 = numer1 * numer2;
    }
    else if ( op == 4 ) {
        mensagem5 = numer1 / numer2;
    }
    else {
        mensagem5 = "Entrada inválida, escolha entre as opções de 1 a 4";
    }

    document.getElementById("mensagem5").innerHTML = mensagem5;
}
function calcula6() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var opc = document.getElementById("opc").value;
    var mensagem6;
    var mensagem6_1;

    if ( opc == "A" ) {
        mensagem6 = "A Raiz quadrada do 1º número pelo 2º é : " + (Math.pow(numero1, numero2));
        mensagem6_1 = ""
    }
    else if (opc == "B") {
        mensagem6 = "A Raiz quadrada do 1º número é : " + Math.pow(numero1, 2);
        mensagem6_1 = "A Raiz quadrada do 2º número é : " + Math.pow(numero2, 2);
    }
    else if ( opc == "C" ){
        mensagem6 = "A Raiz cúbica do 1º número é : " + Math.pow(numero1, 1/3);
        mensagem6_1 = "A Raiz cpubica do 2º número é : " + Math.pow(numero2, 1/3);
    }
    else {
        mensagem6 = "Entrada inválida, escolha entre as opções A, B, C e D"
    }

    document.getElementById("mensagem6").innerHTML = mensagem6;
    document.getElementById("mensagem6_1").innerHTML = mensagem6_1;
}
function calcula7() {
    var n_1 = document.getElementById("n_1").value;
    var mensagem7;

    if ( n_1 <= 500 ) {
        mensagem7 = n_1 * 1.3;
    }
    else {
        mensagem7 = "Seu salário é superior a 500 reais, portanto voçê não recebe o beneficio!"
    }
    document.getElementById("mensagem7").innerHTML = mensagem7;
}
function calcula8() {
    var n_2 = document.getElementById("n_2").value;
    var mensagem8;

    if ( n_2 <= 300 ) {
        mensagem8 = n_2 * 1.35;
    }
    else {
        mensagem8 = n_2 * 1.15;
    }
    document.getElementById("mensagem8").innerHTML = mensagem8;
}
function calcula9() {
    var n_3 = document.getElementById("n_3").value;
    var smedio;
    var mensagem9;

    if (n_3 > 400) {
        smedio = (n_3 * 1.3);
        mensagem9 = smedio;
    }
    else if ((n_3 > 300) && (n_3 <= 400)) {
        smedio = (n_3 * 1.25);
        mensagem9 = smedio;
    }
    else if ((n_3 > 200) && (n_3 <=300)) {
        smedio = (n_3 * 1.2);
        mensagem9 = smedio;
    }
    else {
        smedio = (n_3 * 1.1);
        mensagem9 = smedio;
    }
    document.getElementById("mensagem9").innerHTML = mensagem9;
}
function calcula10() {
    var custo = document.getElementById("custo").value;
    var distribuidor;
    var imposto;
    var arredondado;
    var mensagem10;

    if (custo <= 12000) {
        distribuidor = (custo * 1.05);
        arredondado = parseFloat(distribuidor.toFixed(2));
        mensagem10 = arredondado;
    }
    else if ((custo > 12000) && (custo <= 25000)) {
        distribuidor = (custo * 1.1);
        imposto = (distribuidor * 1.15);
        arredondado = parseFloat(imposto.toFixed(2));
        mensagem10 = arredondado;

    }
    else {
        distribuidor = (custo * 1.15);
        imposto = (distribuidor * 1.20);
        arredondado = parseFloat(imposto.toFixed(2));
        mensagem10 = arredondado;
    }
    document.getElementById("mensagem10").innerHTML = mensagem10
}
function calcula11() {
    var salario = document.getElementById("salario").value;
    var aumento;
    var arredondado2;
    var mensagem11;

    if (salario <= 300) {
        aumento = (salario * 1.15);
        arredondado2 = parseFloat(aumento.toFixed(2));
        mensagem11 = arredondado2;
    }
    else if ((salario > 300) && (salario <= 600)) {
        aumento = (salario *1.1);
        arredondado2 = parseFloat(aumento.toFixed(2));
        mensagem11 = arredondado2;
    }
    else if ((salario > 600) && (salario <= 900)) {
        aumento = (salario *1.05);
        arredondado2 = parseFloat(aumento.toFixed(2));
        mensagem11 = arredondado2;
    }
    else {
        mensagem11 = salario;
    }
    document.getElementById("mensagem11").innerHTML = mensagem11;
}
function calcula12(){
    var salario1 = parseFloat(document.getElementById("salario1").value);
    var grat;
    var imposto;
    var arredondado3;
    var mensagem12;

    if (salario1 <= 350) {
        grat = (salario1 + 100);
        imposto = grat - (grat * 0.07);
        arredondado3 = parseFloat(imposto.toFixed(2));
        mensagem12 = arredondado3;
    }
    else if ((salario1 > 350) && (salario1 <= 600)) {
        grat = (salario1 + 75);
        imposto = grat - (grat * 0.07);
        arredondado3 = parseFloat(imposto.toFixed(2));
        mensagem12 = arredondado3;
    }
    else if ((salario1 > 600) && (salario1 <= 900)) {
        grat = (salario1 + 50);
        imposto = grat - (grat * 0.07);
        arredondado3 = parseFloat(imposto.toFixed(2));
        mensagem12 = arredondado3;
    }
    else if (salario1 > 900) {
        grat = (salario1 + 35);
        imposto = grat -  (grat * 0.07);
        arredondado3 = parseFloat(imposto.toFixed(2));
        mensagem12 = arredondado3;
    }
    document.getElementById("mensagem12").innerHTML = mensagem12;
}
function calcula13(){
    var preco = document.getElementById("preco").value;
    var preco2,mensagem13,mensagem13_1;
    var arredondado4;


    if (preco <= 50) {
        preco2 = (preco * 1.05);
        arredondado4 = parseFloat(preco2.toFixed(2));
        mensagem13_1 = arredondado4;
    }
    else if ((preco > 50) && (preco <= 100)) {
        preco2 = (preco * 1.1);
        arredondado4 = parseFloat(preco2.toFixed(2));
        mensagem13_1 = arredondado4;
    }
    else {
        preco2 = (preco * 1.15);
        arredondado4 = parseFloat(preco2.toFixed(2));
        mensagem13_1 = arredondado4;
    }

    if (preco2 <= 80) {
        mensagem13 = "Barato"
    }
    else if ((preco2 > 80) && (preco2 <= 120)) {
        mensagem13 = "Normal"
    }
    else if ((preco2 > 120) && (preco2 <= 200)) {
        mensagem13 = "Caro"
    }
    else {
        mensagem13 = "Muito Caro"
    }
    document.getElementById("mensagem13_1").innerHTML = "Novo preço : " + mensagem13_1;
    document.getElementById("mensagem13").innerHTML = "Este produto é : " + mensagem13;
}
function calcula14(){
    var salario = document.getElementById("salario2").value;
    var sal2,mensagem14,arredondado5;

    if (salario < 300) {
        sal2 = (salario * 1.5);
        arredondado5 = parseFloat(sal2.toFixed(2));
        mensagem14 = arredondado5;
    }
    else if ((salario >= 300) && (salario < 500)) {
        sal2 = (salario * 1.4);
        arredondado5 = parseFloat(sal2.toFixed(2));
        mensagem14 = arredondado5;
    }
    else if ((salario >= 500) && (salario < 700)) {
        sal2 = (salario * 1.3);
        arredondado5 = parseFloat(sal2.toFixed(2));
        mensagem14 = arredondado5;
    }
    else if ((salario >= 700) && (salario < 800)) {
        sal2 = (salario * 1.2);
        arredondado5 = parseFloat(sal2.toFixed(2));
        mensagem14 = arredondado5;
    }
    else if ((salario >= 800) && (salario < 1000)) {
        sal2 = (salario * 1.1);
        arredondado5 = parseFloat(sal2.toFixed(2));
        mensagem14 = arredondado5;
    }
    else {
        sal2 = (salario * 1.05);
        arredondado5 = parseFloat(sal2.toFixed(2));
        mensagem14 = arredondado5;
    }
    document.getElementById("mensagem14").innerHTML = "R$ : " + mensagem14
}
function calcula15() {
    var esc = parseInt(document.getElementById("esc").value);
    var valor = parseFloat(document.getElementById("valor").value);
    var renda, mensagem15, arredondado6;

    switch (esc) {

        case 1:
            renda = (valor * 0.03);
            arredondado6 = parseFloat(renda.toFixed(2));
            mensagem15 = arredondado6;

            break;

        case 2:
            renda = (valor * 0.04);
            arredondado6 = parseFloat(renda.toFixed(2));
            mensagem15 = arredondado6;

            break;

        default: alert("teste"); mensagem15 = "nada";

    }
    document.getElementById("mensagem15").innerHTML = mensagem15;
}
function calcula16() {
    var prec = document.getElementById("prec").value;
    var cod = document.getElementById("cod").value;
    var mensagem16, mensagem16_1, nprec, desc, arredondado7, arredondado7_1;

    if (prec < 30) {
        mensagem16 = "O Preço do produto referente ao código " + cod + " é: R$: " + prec;
        mensagem16_1 = "Tem desconto de R$ 0,00";
    }
    else if ((prec >= 30 ) && (prec < 100)) {
        desc = (prec * 0.1);
        nprec = (prec - (prec * 0.1));
        arredondado7 = parseFloat(desc.toFixed(2));
        arredondado7_1 = parseFloat(nprec.toFixed(2));
        mensagem16 = "O novo preço do produto referente ao código " + cod + " é R$: " + arredondado7_1;
        mensagem16_1 = "Tem desconto de R$ " + arredondado7;
    }
    else {
        desc = (prec * 0.15);
        nprec = (prec - (prec * 0.15));
        arredondado7 = parseFloat(desc.toFixed(2));
        arredondado7_1 = parseFloat(nprec.toFixed(2));
        mensagem16 = "O novo preço do produto referente ao código " + cod + " é R$: " + arredondado7_1;
        mensagem16_1 = "Tem desconto de R$ " + arredondado7;
    }
    document.getElementById("mensagem16").innerHTML = mensagem16;
    document.getElementById("mensagem16_1").innerHTML = mensagem16_1;
}
function calcula17() {
    var senha = document.getElementById("senha1").value;
    var mensagem17;

    if (senha != "4531") {
        mensagem17 = "Login NÃO efetuado com sucesso.";
        alert("Senha incorreta, Digite novamente!!!");
    }
    else {
        mensagem17 = "Login efetuado com sucesso.";
        alert("Senha correta, seu login está em andamento!!!");
    }
    document.getElementById("mensagem17").innerHTML = mensagem17;
}
function calcula18() {
    var idade = document.getElementById("idad").value;
    var mensagem18;

    if ((idade >= 0) && (idade <= 17)){
        mensagem18 = "Você NÃO é maior de idade!!!";
    }
        else if (idade > 17) {
            mensagem18 = "Você ja é maior de idade!!!";
        }
    else {
        mensagem18 = "Idade INCORRETA!!!";
    }
    document.getElementById("mensagem18").innerHTML = mensagem18;
}
function calcula19() {
    var alt = document.getElementById("alt").value;
    var sexo = document.getElementById("sex").value;
    var mensagem19, imc, arredondado8;

    if (alt > 0) {
        if (sexo === "Masc") {
            imc = ((72.7 * alt) - 58);
            arredondado8 = parseFloat(imc.toFixed(2));
            mensagem19 = arredondado8;
        }
            else if (sexo === "Fem") {
                imc = ((62.1 * alt) - 44.7);
                arredondado8 = parseFloat(imc.toFixed(2));
                mensagem19 = arredondado8;
            }
        else {
            mensagem19 = "Preencha os campos corretamente!";
        }
    }
    else {
        alert("Preencha os campos corretamente.");
        mensagem19 = "Digite uma altura e/ou sexo corretos.";
    }
    document.getElementById("mensagem19").innerHTML = mensagem19;
}
function calcula20() {
    var id = document.getElementById("id").value;
    var mensagem20;

    if (id > 0) {
        if ((id >= 5) && (id <= 7)) {
            mensagem20 = "Sua categoria é INFANTIL";
        }
            else if ((id >= 8) && (id <= 10)) {
                mensagem20 = "Sua categoria é JUVENIL";
            }
                else if ((id >= 11) && (id <= 15)) {
                    mensagem20 = "Sua categoria é ADOLESCENTE";
                }
                    else if ((id >= 16) && (id <= 30)) {
                        mensagem20 = "Sua categoria é ADULTO";
                    }
        else {
            mensagem20 = "Sua categoria é SENIOR"
        }
    }
    else {
        alert("Idade inválida.");
        mensagem20 = "Digite uma idade válida.";
    }
    document.getElementById("mensagem20").innerHTML = mensagem20;
}
function calcula21() {
    var preco = document.getElementById("preco21").value;
    var cod1 = document.getElementById("cod1").value;
    var mensagem21;

    if (cod1 == 1) {
        mensagem21 ="O teu produto tem procedência 'Sul' e o valor de R$" + preco;
    }
        else if (cod1 == 2) {
            mensagem21 ="O teu produto tem procedência 'Norte' e o valor de R$" + preco;
        }
            else if (cod1 == 3) {
                mensagem21 ="O teu produto tem procedência 'Leste' e o valor de R$" + preco;
            }
                else if (cod1 == 4) {
                    mensagem21 ="O teu produto tem procedência 'Oeste' e o valor de R$" + preco;
                }
                    else if ((cod1 == 5) && (cod1 == 6)) {
                        mensagem21 ="O teu produto tem procedência 'Nordeste' e o valor de R$" + preco;
                    }
                        else if ((cod1 >= 6) && (cod1 <= 9)) {
                            mensagem21 = "O teu produto tem procedência 'Sudeste' e o valor de R$" + preco;
                        }
                            else if ((cod1 >= 10) && (cod1 <= 20)) {
                                mensagem21 = "O teu produto tem procedência 'Centro-Oeste' e o valor de R$" + preco;
                            }
                                else if ((cod1 >= 21) && (cod1 <=30)) {
                                    mensagem21 = "O teu produto tem procedência 'Nordeste' e o valor de R$" + preco;
                                }


    document.getElementById("mensagem21").innerHTML = mensagem21;
}
function calcula22() {
    var idade1 = document.getElementById("idade1").value;
    var peso = document.getElementById("peso").value;
    var mensagem22;

    if (idade1 < 20) {
        if (peso <= 60) {
            mensagem22 = "9";
        }
            else if ((peso > 60) && (peso <= 90)) {
                mensagem22 = "8";
            }
        else {
            mensagem22 = "7";
        }
    }
    else if ((idade1 >= 20) && (idade1 <= 50)) {
        if (peso <= 60) {
            mensagem22 = "6";
        }
            else if ((peso > 60) && (peso <=90)) {
                mensagem22 = "5";
            }
        else {
            mensagem22 = "4";
        }
    }
    else {
        if (peso <= 60) {
            mensagem22 = "3";
        }
            else if ((peso > 60) && (peso <=90)) {
                mensagem22 = "2";
            }
        else {
            mensagem22 = "1";
        }
    }
    document.getElementById("mensagem22").innerHTML = mensagem22;
}
function calcula23() {
    var codi = document.getElementById("codi").value;
    var quanti = document.getElementById("quanti").value;
    var ptotal, pdesconto, mensagem23;


    if ((codi >= 1) && (codi <=10)) {
        ptotal = 10 * quanti;
        if (ptotal <= 250) {
            pdesconto = ptotal - (ptotal * 0.05);
            mensagem23 = ("O Valor Unitário do produto comprado é R$10,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 5% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
        else if ((ptotal > 250) && (ptotal <= 500)) {
            pdesconto = ptotal - (ptotal * 0.1);
            mensagem23 = ("O Valor Unitário do produto comprado é R$10,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 10% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
        else {
            pdesconto = ptotal - (ptotal * 0.15);
            mensagem23 = ("O Valor Unitário do produto comprado é R$10,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 15% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
    }
    else if ((codi > 10) && (codi <= 20)) {
        ptotal = 15 * quanti;
        if (ptotal <= 250) {
            pdesconto = ptotal - (ptotal * 0.05);
            mensagem23 = ("O Valor Unitário do produto comprado é R$15,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 5% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
        else if ((ptotal > 250) && (ptotal <= 500)) {
            pdesconto = ptotal - (ptotal * 0.1);
            mensagem23 = ("O Valor Unitário do produto comprado é R$15,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 10% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
        else {
            pdesconto = ptotal - (ptotal * 0.15);
            mensagem23 = ("O Valor Unitário do produto comprado é R$15,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 15% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
    }
    else if ((codi > 20) && (codi <= 30)) {
        ptotal = 20 * quanti;
        if (ptotal <= 250) {
            pdesconto = ptotal - (ptotal * 0.05);
            mensagem23 = ("O Valor Unitário do produto comprado é R$20,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 5% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
        else if ((ptotal > 250) && (ptotal <= 500)) {
            pdesconto = ptotal - (ptotal * 0.1);
            mensagem23 = ("O Valor Unitário do produto comprado é R$20,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 10% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
        else {
            pdesconto = ptotal - (ptotal * 0.15);
            mensagem23 = ("O Valor Unitário do produto comprado é R$20,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 15% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
    }
    else if ((codi > 30) && (codi <= 40)) {
        ptotal = 30 * quanti;
        if (ptotal <= 250) {
            pdesconto = ptotal - (ptotal * 0.05);
            mensagem23 = ("O Valor Unitário do produto comprado é R$30,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 5% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
        else if ((ptotal > 250) && (ptotal <= 500)) {
            pdesconto = ptotal - (ptotal * 0.1);
            mensagem23 = ("O Valor Unitário do produto comprado é R$30,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 10% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
        else {
            pdesconto = ptotal - (ptotal * 0.15);
            mensagem23 = "O Valor Unitário do produto comprado é R$30,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 15% </br>" + "O preço com desconto será: R$" + pdesconto;
        }
    }
    else {
        mensagem23 = ("Código Invalido");
    }
    document.getElementById("mensagem23").innerHTML = mensagem23;
}
function calcula24() {
    var preco24 = parseFloat(document.getElementById("val").value);
    var categoria = parseInt(document.getElementById("categoria").value);
    var situacao = document.getElementById("refri").value;
    var aumento;
    if (preco24 <= 25){
        switch (categoria){
            case 1: aumento = preco24*0.05;
                break;
            case 2: aumento = preco24*0.08;
                break;
            case 3: aumento = preco24*0.10;
                break;
            default: aumento = 0;
        }
    }
    else {
        switch(categoria){
            case 1: aumento = preco24*0.12;
                break;
            case 2: aumento = preco24*0.15;
                break;
            case 3: aumento = preco24*0.18;
                break;
            default: aumento = 0;
        }

    }
    var imposto;
    if((categoria ==2) || (situacao == 'R')){
        imposto = preco24*0.05;
    }
    else {
        imposto = preco24*0.08;
    }
    var novo;
    novo = preco24 + aumento + imposto;
    var classificacao;
    if((novo <= 50.00) && (novo < 120)) {
        classificacao = "Aceitavel";
    }
    else {
        classificacao = "Caríssimo";
    }
    document.getElementById("mensagem24").innerHTML = "O aumento é de : " + aumento;
    document.getElementById("mensagem24_2").innerHTML = "O valor do imposto é : " + imposto;
    document.getElementById("mensagem24_3").innerHTML = "O novo preço é : " + novo;
    document.getElementById("mensagem24_4").innerHTML = "E sua Classificação é : " + classificacao;
}
function calcula25(){
    var horast = document.getElementById("horast").value;
    var horasf = document.getElementById("horasf").value;
    var form1 = horast - (2/3 * (horasf));
    var h = (form1 * 60);
    var mensagem25;

    if (h >= 2400) {
        mensagem25 = "Prêmio de 500 reais";
    }
        else if ((h > 1800) && (h < 2400)){
        mensagem25 = "Prêmio de 400 reais";
        }
            else if ((h >= 1200) && (h < 1800)){
            mensagem25 = "Prêmio de 300 reais";
            }
                else if ((h >= 600) && (h < 1200)){
                mensagem25 = "Prêmio de 200 reais";
                }
                    else if (h < 600){
                        mensagem25 = "Prêmio de 100 reais";
                    }
    else {
        mensagem25 = "Inválido";
    }
    document.getElementById("mensagem25").innerHTML = mensagem25;
}
