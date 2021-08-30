// SCROLL ANCORA
$(document).ready(function () {
    var $win = $(window)
    $win.on('scroll', function () {
        if ($win.scrollTop() >= "400") {
            $(".cursor").addClass('-active')
        } else {
            $(".cursor").removeClass('-active')
        }
    })

    console.log($('.cursor'))
    $('.cursor').on('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

});
// VALIDAÇÃO CPF

    $('#cpf').blur(function () {
      let cpfInput = $('#cpf')
      let cpfValue = $('#cpf').val()
      let soma = 0;
      let resto;
  
      if (cpfValue == "00000000000" || cpfValue.length != 11) {
        cpfInput.addClass('border-danger')
      }
  
      for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpfValue.substring(i - 1, i)) * (11 - i);
      }
      resto = soma % 11;
      if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
      } else {
        resto = 11 - resto;
      }
  
      if (resto != parseInt(cpfValue.substring(9, 10))) {
        cpfInput.addClass('border-danger');
        return false;
      }
  
      soma = 0
      for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpfValue.substring(i - 1, i)) * (12 - i);
      }
      resto = soma % 11;
      if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
      } else {
        resto = 11 - resto;
      }
      if (resto != parseInt(cpfValue.substring(10, 11))) {
        cpfInput.addClass('border-danger');
        return false;
      }
      cpfInput.removeClass('border-danger')
      return true;
    })
  
  
  /* Verificação do email */
  
  $('#email').blur(function () {
    let field = $('#email').val();
    usuario = field.substring(0, field.indexOf("@"));
    dominio = field.substring(field.indexOf("@") + 1, field.length);
    if ((usuario.length >= 1) &&
      (dominio.length >= 3) &&
      (usuario.search("@") == -1) &&
      (dominio.search("@") == -1) &&
      (usuario.search(" ") == -1) &&
      (dominio.search(" ") == -1) &&
      (dominio.search(".") != -1) &&
      (dominio.indexOf(".") >= 1) &&
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
      $('#email').removeClass('border-danger')
    } else {
      $('#email').addClass('border-danger')
    }
  })
  
 