const fs = require('fs');
const colors = require('colors');

const makeFile = async (base, limit, show) => {
  try {
    let salida = `=======================\nTabla del ${base}\n=======================\n`;

    for (let index = 1; index <= limit; index++) {
      salida += `${base} x ${index} = ${base * index}\n`;
    }
    if (show) console.log(salida);

    const nameFile = `${base}-table.txt`;
    fs.writeFileSync(`./files/${nameFile}`, salida);
    return nameFile;
  } catch (error) {
    return error;
  }
};

module.exports = {
  makeFile: makeFile,
};
