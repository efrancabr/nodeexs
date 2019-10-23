const prompt = require("prompt");

var schema = {
    properties: {
      name: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'O nome precisa ser apenas letras, espaços, ou caracteres',
        required: true
      },
      sobrenome: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'O sobrenome precisa ser apenas letras, espaços, ou caracteres',
        required: true
      },
      endereco: {
        required: true
      },
      email: {
        pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'O e-mail precisa estar no formato válido',
        required: true
      },
      cpf: {
        pattern: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
        message: 'Informe um cpf no formato válido',
        required: true
      }
    }
  };

prompt.start();

prompt.get(schema, function(_,result){
    console.log("Nome: " + result.name);
    console.log("Sbrenome: " + result.sobrenome);
    console.log("Endereco: " + result.endereco);
    console.log("Email: " + result.email);
    console.log("Cpf: " + result.cpf);
});