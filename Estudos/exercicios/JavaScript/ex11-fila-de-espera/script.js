let pacientes = ["Gabriel", "Marcos", "Mateus"];
let escolha = "";
// let referencia = pacientes;


do{
    escolha = prompt("Bem vindo ao consultório!"+
    "\n1. Lista de pacientes"+
    "\n2. Adicionar novo paciente"+
    "\n3. Consultar paciente"+
    "\n4. SAIR")

    switch(escolha){
        case "1":
            for( i = 0 ; i <= pacientes.length - 1; i++){
                let lista = (i +1) + " - " + pacientes[i];
                console.log(lista)
                alert(lista);
            }

            break;

        case "2":
            let novoPaciente = prompt("Qual paciente será adicionado?");
            pacientes.push(novoPaciente);
            alert(novoPaciente + " adicionado com sucesso ao fim da fila!");
            break;

        case "3":
            let pacienteConsultado = pacientes.shift();
            alert(pacienteConsultado + " foi consultado com sucesso e saiu da fila!") 

            break;

        case "4":
            alert("Encerrando")
            break;
        default:
            alert("Opção Inválida");
    }
}while( escolha !== "4");