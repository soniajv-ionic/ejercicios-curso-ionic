let cuenta = 'ES600049150051234567892';
let codigoPais = cuenta.substring(0,2);
let digitosControl = cuenta.substring(2,4);
let codigoEntidadBancaria = cuenta.substring(4,8);
let codigoOficinaBancaria = cuenta.substring(8,12);
let numCuenta = cuenta.substring(12);
console.log(`El codigo del pais es ${codigoPais}, los digitos de control son ${digitosControl}, el Código de la entidad bancaria es ${codigoEntidadBancaria}, el Código de la oficina bancaria es ${codigoOficinaBancaria} y el numero de cuenta es ${numCuenta}`);