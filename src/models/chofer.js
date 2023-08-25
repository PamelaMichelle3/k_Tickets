const chofer=(sequelize,type)=>{
    return sequelize.define('choferes',{
        id_chofer:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        cedula_chofer: type.STRING,
        nombres_chofer: type.STRING,
        apellidos_chofer: type.STRING,
       sexo_chofer: type.STRING,
       estado_civil_chofer: type.STRING,
       fecha_nacimiento_chofer : type.STRING,
       direccion_chofer : type.STRING,
       email_chofer : type.STRING,
       celular_chofer : type.STRING,
       tipo_licencia: type.STRING,
        fecha_emision_licencia: type.STRING,
        fecha_vencimiento_licencia: type.STRING,


        crearChofer:{
            type:'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        actualizarChofer:{
            type:'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, {
        timestamps:false,
    });
}
module.exports = chofer