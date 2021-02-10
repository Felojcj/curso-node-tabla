const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '',
      consola = '',
      multiplication = Array.from({ length: hasta }, (v, k) => (k + 1) * base) // is an arrow function that assign (k) index number of current element to that element (v) value.

    multiplication.forEach((el, index) => {
      salida += `${base} * ${index + 1} = ${el}\n`;
      consola += `${base} ${'*'.cyan} ${index + 1} ${'='.cyan} ${el}\n`;
    })
    if (listar) {
      console.log(`
      ======================
        Tabla del: ${base}
      ======================
      `.green)
      console.log(consola)
    }

    fs.writeFileSync(`./salida/table-${base}.txt`, salida)

    return `table-${base}.txt`
  } catch (err) {
    throw err
  }
}

module.exports = {
  crearArchivo
}
