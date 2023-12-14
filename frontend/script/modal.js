const modal = document.querySelector('.modal');
const cadastroEndereco = document.querySelector('.cadastro-crud a')
const closeModal = document.querySelector('.topo-modal i')
import table from "./table";

cadastroEndereco.addEventListener('click', () => {
    if(!modal.classList.contains('show-modal')) {
        modal.classList.add('show-modal');
    }
})

closeModal.addEventListener('click', () => {
    if(modal.classList.contains('show-modal')) {
        modal.classList.remove('show-modal');
    }
})


function submitCadastroEndereco() {

    const token = localStorage.getItem('token');

    let headers = {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
    };
  
    if (token) {
    
    let cep = document.getElementById("cep").value;
    let logradouro = document.getElementById("logradouro").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let complemento = document.getElementById("complemento").value;
    let uf = document.getElementById("uf").value;
    let numero = document.getElementById("numero").value;

    let data = {
        cep: cep,
        logradouro: logradouro,
        bairro: bairro,
        cidade: cidade,
        complemento: complemento,
        uf: uf,
        numero: numero,
    };

    fetch("https://health-dhbx.onrender.com/endereco", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            alert('Cadastro realizado com sucesso!');
            if(modal.classList.contains('show-modal')) {
              modal.classList.remove('show-modal');
            }
            $.ajax({
              url: 'https://health-dhbx.onrender.com/endereco',
              type: 'GET',
              headers: {
                  'Authorization': `Bearer ${token}`
              },
              success: function(data) {
                  populateTable(data);
              },
              error: function(error) {
                  console.error('Erro na requisição:', error);
              }
          });
            console.log(data);
    
        })
        .catch((error) => {
           console.log(error);
        });
    }
}

function consultaCEP(cep) {
    cep = cep.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cep.length !== 8) {
      alert('CEP inválido. Informe os 8 dígitos do CEP.');
      return;
    }

    $.ajax({
      url: 'https://viacep.com.br/ws/' + cep + '/json/',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        if (data.erro) {
          alert('CEP não encontrado.');
        } else {
          preencherCampos(data);
        }
      },
      error: function () {
        alert('Erro ao buscar o CEP. Tente novamente mais tarde.');
      }
    });
  }

  function preencherCampos(data) {
    $('#logradouro').val(data.logradouro);
    $('#bairro').val(data.bairro);
    $('#cidade').val(data.localidade);
    $('#uf').val(data.uf);
  }