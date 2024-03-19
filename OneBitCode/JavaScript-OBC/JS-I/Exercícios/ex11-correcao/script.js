let fila =[];
let opcao = "";

do{
    let pacientes = "";
    for(let i = 0; i < fila.length; i++){
        pacientes += (i + 1) + " - " + fila[i] + "\n";
    }

    opcao = prompt("Pacientes: \n" + pacientes+
    "\n1. Novo paciente \n2. Consultar um paciente \n3. Sair");

    switch(opcao){
        case "1":
            const novoPaciente = prompt("Qual é o nome do paciente?");
            fila.push(novoPaciente);
            alert(novoPaciente + " adicionado à fila")
            break
        case "2":
            let pacienteConsultado = fila.shift();
            if(pacienteConsultado){
                alert(pacienteConsultado + " foi consultado com sucesso");
            }else{
                alert("Não há pacientes")
            }
            break
        case "3":
        alert("Encerrando");
            break
        default:
            alert("Opção Inválida")

    }
}while(opcao !== "3");
