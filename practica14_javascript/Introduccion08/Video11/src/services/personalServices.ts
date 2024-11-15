import mysql from 'mysql2/promise';

const conexion = mysql.createPool({
    host: 'localhost',
    user: 'jacq',
    password: 'jacqui123',
    database: 'pw2024'
});

export const obtenerPersonal = async () => {
    try {
        const [results] = await conexion.query('SELECT * FROM personal');
        return results;
    }
    catch (error) {
        return { error: "No se puede obtener el personal" };
    }
}