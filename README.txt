Proyecto Web I: BANCA SIMPLE

- Desarrollado en PHP y MySQL
- Utilizando XAMP para armar tu servidor Local
- Sistema Banca Simple
	-Usuario se registra
	-Usuario realiza la apertura de una o 		mas cuentas de Banca Simple
	-Usuario Inicia Session
	-Usuario realiza operaciones de
	 DEPOSITO y RETIRO
	-Usuario consulta su historial de 
	operaciones
	-Usuario cierra Session	
- Para que funcione es necesario IMPORTAR la    BD de la carpeta.( la BD se llama banca)

- Si configuraste el XAMP de otra manera  o cambiaste el NOMBRE DE LA BD tendras que modificar en todos los .php de la  Aplicacion  
que realizen consultas a la BD
          
	 $host = '127.0.0.1';
         $user = 'root';
         $password = '';
         $database = 'banca';