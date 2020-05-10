const completado = {
    alias: 'c',
    default: 'true'
};

const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        completado,
        descripcion
    })
    .command('borrar', 'borra un registro', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}