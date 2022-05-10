 var num = 1
 var result = 0
 
 while (num != 0) {
     num = parseFloat(prompt("Digite um numero: (0 para sair)"));
     result += num;
     alert("valor acumulado é: " + result);
   }
