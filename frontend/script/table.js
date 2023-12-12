$(document).ready(function() {
    const token = localStorage.getItem('token');
    const tableContainer = $('#table-container');
  
    if (token) {
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
          showLoginMessage();
        }
      });
    } else {
      showLoginMessage();
    }
  
    function showLoginMessage() {
      const message = '<p>Você precisa fazer login para visualizar os dados.</p>';
      tableContainer.html(message);
    }
  
    function populateTable(data) {
      const tbody = $('#data-table tbody');
      tbody.empty();
  
      data.forEach(function(item) {
        const row = `<tr>
                      <td id="id_endereco">${item.id_endereco}</td>
                      <td>${item.numero}</td>
                      <td>${item.logradouro}</td>
                      <td>${item.bairro}</td>
                      <td>${item.cidade}</td>
                      <td>${item.complemento}</td>
                      <td>${item.cep}</td>
                      <td>${item.uf}</td>
                      <td><i onclick="atualizarUsuario()" class="ri-pencil-line"></i></td>
                      <td><i class="ri-delete-bin-line"></i></td>
                    </tr>`;
        tbody.append(row);
      });
    }
  });

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