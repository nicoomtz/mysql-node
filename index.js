var pool = require('./bd');

var obj = {
  id_emp: '23',
  nombre: 'Juan',
  apellido: 'Lopez',
  trabajo: 'Programador',
  edad: 22,
  salario: 100000,
  mail: 'juan-lopez@bignet.com'
};

pool.query('select * from empleados').then(function (res) {
  console.log(res);
});

pool.query('insert into empleados set?', [obj]);
