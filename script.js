<html>
<head>
<script language="JavaScript">

function validanome(nome){
		

		
	var expressao;

		expressao = /[a-zA-Z ]/;

		if(expressao.test(String.fromCharCode(nome.keyCode)))
		{
			return true;
		}
		else
		{
			return false;
		}
};

function mascaracpf(o,f){
    v_obj=o
    v_fun=f
    setTimeout('mascara()',1)
};
 
function mascara(){
    v_obj.value=v_fun(v_obj.value)
};
 
function cpf(v){
 
    //Remove tudo o que não é dígito
    v=v.replace(/\D/g,"")
 
   
        //Coloca um ponto entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d)/,"$1.$2")
 
        //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v=v.replace(/(\d{3})(\d)/,"$1.$2")
 
        //Coloca um hífen entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
 
    
 
    return v
 
};

function validacpf( cpf ){
	var formato = /^\d{3}.\d{3}.\d{3}-\d{2}$/i;
	
	if(!formato.test(cpf))
	{
		window.alert("CPF inválido. Tente novamente.");
		document.cadastro.tx_cpf.value='';
		document.cadastro.tx_cpf.focus();
		return false;
	}


function verificaemail()
{
	if(document.forms[0].email.value.length == 0){
		alert('por favor, informe o seu EMAIL.');
			document.frmEnvia.email.focus();
			returne false;
	}
	return true;
	}
	
function validaemail(){
	if (document.forms[0].email.value ==""
	|| document.forms[0].email.value.indexOf('@')== -1
	|| document.forms[0].email.value.indexOf('.')==-1)
	{
		alert("Por favor, informe um E-mail válido!");
		return false;
	}
}

function validasenha(){
	
		if(document.cadastro.senha.length < 4){
		alert ("Senha tem que conter mais que 4 caracteres.")
		return false;
	}
	
};


function validacampo()
{
if(document.cadastro.nome.value=="")
{
alert("O Campo nome é obrigatório!");
return false;
}
else
if(document.cadastro.email.value=="")
{
alert("O Campo email é obrigatório!");
return false;
}
else
if(document.cadastro.endereco.value=="")
{
alert("O Campo endereço é obrigatório!");
return false;
}
else
if(document.cadastro.cidade.value=="")
{
alert("O Campo Cidade é obrigatório!");
return false;
}
else
if(document.cadastro.login.value=="")
{
alert("O Campo Login é obrigatório!");
return false;
}
else
if(document.cadastro.senha.value=="")
{
alert("Digite uma senha!");
return false;
}
else
return true;
}

}

function validapromo{	
preencheu = false;
	elementosForm = form.getElementsByTagName('input');
	if (document.cadastro.sim[0].checked == false
	&& document.cadstro.nao[1].checked == false){
		alert('Por favor, selecione se sim ou não.');
		return false;
	}
	returne true
	
	}	
		
	
	function imprimivalores(){
		var cpf = document.getElementById("cpf");
		var nome = document.getElementById("nome");
		var endereco = document.getElementById("endereco");
		var cidade = document.getElementById("cidade");
		var sexo = document.getElementById("sexo");
		var fone = document.getElementById("fone");
		var email = document.getElementById("email");
		var promo = document.getElementById("promo");
		var obs = document.getElementById("obs");
		

	var texto = cpf + nome + endereco + cidade + sexo + fone + email + promo + obs;
	return true
	}
	
</script>
</head>
</html>