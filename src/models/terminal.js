const Terminal =(sequelize, type) =>{
    return sequelize.define('terminales',{
        id_terminal:{
            type: type.INTEGER, 
            primarykey: true,
            autoIncrement: true
        },
        nombreTerminal: type.STRING,
        callepTerminal: type.STRING,
        callesTerminal: type.STRING,
        username: type.STRING(99),
        contraseña: type.STRING,
    crearTerminal: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false 
        },
        actualizarTerminal: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }   
    }, {
        timestamps: false, 

    })
}
module.exports = Terminal 