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
                    <td class="editable" data-field="numero">${item.numero}</td>
                    <td class="editable" data-field="logradouro">${item.logradouro}</td>
                    <td class="editable" data-field="bairro">${item.bairro}</td>
                    <td class="editable" data-field="cidade">${item.cidade}</td>
                    <td class="editable" data-field="complemento">${item.complemento}</td>
                    <td class="editable" data-field="cep">${item.cep}</td>
                    <td class="editable" data-field="uf">${item.uf}</td>
                    <td><i class="ri-pencil-line edit-btn"></i></td>
                    <td><i class="ri-delete-bin-line"></i></td>
                  </tr>`;
      tbody.append(row);
    });
    
    $('.edit-btn').on('click', function() {
      const row = $(this).closest('tr');
      toggleEditMode(row);
    });
  }

  function toggleEditMode(row) {
      const checkIcon = row.find('.edit-btn');

      if (checkIcon.hasClass('ri-pencil-line')) {
          // Modo de leitura para modo de edição
          row.find('.editable').each(function() {
              const value = $(this).text();
              const inputField = $('<input type="text">').val(value);
              $(this).html(inputField);
          });

          // Altera o ícone para confirmar as alterações
          checkIcon.removeClass('ri-pencil-line').addClass('ri-check-line');
      } else {
          // Modo de edição para modo de leitura
          const idEndereco = row.find('#id_endereco').text();
          const updatedData = {
              numero: row.find('[data-field="numero"] input').val(),
              logradouro: row.find('[data-field="logradouro"] input').val(),
              bairro: row.find('[data-field="bairro"] input').val(),
              cidade: row.find('[data-field="cidade"] input').val(),
              complemento: row.find('[data-field="complemento"] input').val(),
              cep: row.find('[data-field="cep"] input').val(),
              uf: row.find('[data-field="uf"] input').val(),
          };

          $.ajax({
              url: `https://health-dhbx.onrender.com/endereco/${idEndereco}`,
              type: 'PUT',
              headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
              },
              data: JSON.stringify(updatedData),
              success: function(response) {
                  console.log('Dados atualizados com sucesso:', response);
                  // Recarrega os dados após a edição
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
              },
              error: function(error) {
                  console.error('Erro na atualização:', error);
                  // Recarrega os dados após o erro para restaurar o modo de leitura
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
              }
          });

          // Altera o ícone para voltar ao modo de leitura
          checkIcon.removeClass('ri-check-line').addClass('ri-pencil-line');
      }
  }
});
