function validarRenavam(renavam) {

            //var renavam = document.getElementById('renavam').value;
            var MODULO_11 = 11;
            var multiplicador = 2;
            var soma = 0;

            for (var i = renavam.length - 2; i > -1; i--) {
                if (multiplicador > 9) {
                    multiplicador = 2;
                }
                soma += parseInt(renavam[i]) * multiplicador++;
            }
            var digito = soma % MODULO_11;
            digito = (digito == 0 || digito == 1) ? 0 : MODULO_11 - digito; 
            var valido =  digito == parseInt(renavam[renavam.length - 1]);

            alert("RENAVAM É: " + valido);
        }