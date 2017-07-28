@echo off 
echo ### Chaveamento para Wifi/Ethernet ###

REM ==============================================================
REM Batch para chaveamento entre as redes físicas e wi-fi PORTO
REM Autor: Vinicius Morais - Fornax
REM ==============================================================

REM Para Descobrir O que inserir nessas variaveis: 
REM    1) execute o seguinte codigo no prompt de comando: netsh interface show interface
REM    2) No Campo "Nome" você verá os nomes das interfaces Wi-Fi e Ethernet
REM    3) SE o texto retornar em Inglês na execução do comando do item 1, a variável find_var deve ser alterada para  "Disconnected"
REM    4) A variável nome_rede_wifi é a rede na qual vc quer se conectar quando for habilitado o wifi.

REM IMPORTANTE: EXECUTE COMO ADMINISTRADOR

REM INICIO VARIAVEIS
set interface_wifi=Wi-Fi 
set interface_fisico=Ethernet
set nome_rede_wifi=FUNC_PREST
set find_var="Desconectado"
REM FIM VARIAVEIS

REM NÃO EDITE A PARTIR DESTE PONTO
netsh interface show interface name=%interface_wifi% | find %find_var% /I /C
if %errorlevel% equ 0 (
  echo     Wi-Fi descontectado. Desabilitando Ethernet e Habilitando Wi-Fi
  
  netsh interface set interface %interface_wifi% Enable
  timeout 3 >nul
  netsh wlan connect name=%nome_rede_wifi%
  netsh interface set interface %interface_fisico% Disable
  
) else (
  echo     Wi-Fi Conectado. Desabiitando Wi-Fi e Habilitando Ethernet
  netsh interface set interface %interface_wifi% Disable
  netsh interface set interface %interface_fisico% Enable
)
echo ### Completado ###
timeout /t 2

