function media() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var media = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3)) / 3;
    /*alert("A média é: " + media);*/
    /*document.write("A média de é: " + media); #limpa a tela*/

    document.getElementById("resultado").innerHTML = "A m&eacute;dia aritm&eacute;tica de " + num1 + ", " + num2 + " e " + num3 + " &eacute; " + media;

}
