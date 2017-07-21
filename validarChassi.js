function validarChassi(chassi) {

            var chassiValido = true;
            chassi = chassi.toUpperCase();

            // Não pode ter tamanho diferente de 17 caracteres
            if(chassi.length != 17) {
                chassiValido = false;
            }

            // Não pode começar com 0
            if(chassiValido) {
                chassiValido = chassi.substring(0, 1) != "0";
            }

            // Não pode ter caracter especial ou as legras I O ou Q
            if(chassiValido) {
                var regEx = new RegExp("[^0-9A-Z]|[IOQ]");
                chassiValido = !regEx.test(chassi);    
            }

            // Ultimos 4 caracteres precisam ser numéricos
            if(chassiValido) {
                var FimChassi = chassi.substr(chassi.length - 4);
                var regEx = new RegExp("[^0-9]");
                chassiValido = !regEx.test(FimChassi);
            }

            // Depois do terceiro digito, não pode repetir o mesmo caracter mais de seis vezes
            if(chassiValido) {
                var pedacoChassi = chassi.substr(2, chassi.length -1);
                var regEx = new RegExp("(.)\\1{6}");
                chassiValido = !regEx.test(pedacoChassi);
            }

            alert("CHASSI É: " + chassiValido);
           // return chassiValido;
        }