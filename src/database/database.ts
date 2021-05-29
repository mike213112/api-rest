import mariadb from 'mariadb';
import config from './config';

const connect = mariadb.createPool(config.database);

connect.getConnection()
    .then(connect => {
        console.log("Conexion Satisfactoria");
    }).catch(err => {
        console.log("Error con la base");
    });

export default connect;