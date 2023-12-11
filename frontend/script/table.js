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
                      <td>${item.numero}</td>
                      <td>${item.logradouro}</td>
                      <td>${item.bairro}</td>
                      <td>${item.cidade}</td>
                      <td>${item.complemento}</td>
                      <td>${item.cep}</td>
                      <td>${item.uf}</td>
                    </tr>`;
        tbody.append(row);
      });
    }
  });