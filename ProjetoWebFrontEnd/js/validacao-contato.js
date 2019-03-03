
   
      /* Validate & Submit Form */
      $('form').validate({
          messages: {
          nombre: {
            required: 'Por favor preencha o seu nome.',
              },              
          email: {
              required: 'Adicionar o seu e-mail.',
              },             
          celular: {
            required: 'Qual o seu telefone?',
              },
          mensage: {
            required: 'Uma mensagem...',
              },   
        },
        onkeyup: false,
          errorElement : 'div',
        errorPlacement: function(error, element) {
          error.appendTo(element.parent().siblings('.input-error'));
        }
      });
