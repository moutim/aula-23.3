/* 
--data-raw '{
    "descricao": "Acidente envolvendo 2 carros e uma moto.",
    "dataHora": "2022-05-22 03:52:00",
    "categoria": "Trânsito",
    "endereco": {
        "logradouro": "Av Paulista",
        "numero": "1578",
        "bairro": "Bela Vista",
        "cep": "01310-200"
    }
}'
*/

const verifyDescricao = (descricao) => {
  if (!descricao) {
    throw new Error(JSON.stringify({ status: 400, message: 'A descricao é um campo obrigatorio'}));
  }

  if (typeof descricao !== 'string') {
    throw new Error(JSON.stringify({ status: 400, message: 'A descricao precisa ser do tipo string'}));
  }
};

const isDateInFuture = (date) => {
    return date > Date.now()
}

const verifyDate = (date) => {
  const dateFormat = /\d{4}(.\d{2}){2}(\s|T)(\d{2}.){2}\d{2}/;

  if (!date) {
    throw new Error(JSON.stringify({ status: 400, message: 'A chave data deve ser obrigatoria'}))
  }
  console.log(date)
  if (!dateFormat.test(date)) {
      throw new Error(JSON.stringify({ status: 400, message: 'A data deve ter o formato "dd/mm/aaaa"'}))
  }
  if (isDateInFuture(date)) {
      throw new Error(JSON.stringify({ status: 400, message: 'Não pode ser uma data no futuro."'}))
  }
};


const verifyAddress = (endereco) => {
  if (!endereco) {
    throw new Error(JSON.stringify({ status: 400, message: 'A chave `endereco` é obrigatoria' }))
  }
  
  const { logradouro, numero, bairro, cep } = endereco;

  if (!logradouro || !numero || !bairro || !cep) {
    throw new Error(JSON.stringify({
      status: 400,
      message: 'A chave `endereco` precisa conter as chaves: `logradouro`, `numero`, `bairro` e `cep`' 
    }));
  }
};

const verifyCategoria = (categoria) => {
    const minNumber = 3;

  if (!categoria) {
      throw new Error(JSON.stringify({ status: 400, message: 'A categoria é um campo obrigatorio'}));
    }
  
    if (typeof categoria !== 'string') {
      throw new Error(JSON.stringify({ status: 400, message: 'A categoria precisa ser do tipo string'}));
    }

    if (categoria <= minNumber){
        throw new Error(JSON.stringify({ status: 400, message: 'A categoria precisa ter mais de três letras'}));
    }
};

const verifyBody = (req, res) => {
  const { descricao, dataHora, categoria, endereco } = req.body;

  verifyDescricao(descricao);
  verifyDate(dataHora);
  verifyCategoria(categoria)
  verifyAddress(endereco);
};

module.exports = verifyBody;