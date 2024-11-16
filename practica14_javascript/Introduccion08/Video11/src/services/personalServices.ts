import mysql from 'mysql2/promise';
import { Personal, PersonalNuevo } from '../typesPersonal';

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
    catch (err) {
        return { error: "No se puede obtener el personal" };
    }
}

export const encuentraPersonal = async (id: number) => {
    try {
        const [results] = await conexion.query('SELECT * FROM personal WHERE id = ? LIMIT 1', id);
        return results;
    }
    catch (err) {
        return { error: "No se puede encontrar el personal" };
    }
}

export const agregarPersonal = async (nuevo: PersonalNuevo) => {
    try {
        const [results] = await conexion.query('INSERT INTO personal (nombre, direccion, telefono, estatus) VALUES (?, ?, ?, ?)', [nuevo.nombre, nuevo.direccion, nuevo.telefono, nuevo.estatus]);
        return results;
    }
    catch (err) {
        return { error: "No se puede agregar el personal" };
    }
}

export const modificarPersonal = async (modificado: Personal) => {
    try {
        const [results] = await conexion.query('UPDATE personal SET direccion = ?, telefono = ?, estatus = ? WHERE id = ?', [modificado.direccion, modificado.telefono, modificado.estatus, modificado.id]);
        return results;
    }
    catch (err) {
        return { error: "No se puede modificar el personal" };
    }
}

export const eliminarPersonal = async (id: number) => {
    try {
        const [results] = await conexion.query('DELETE FROM personal WHERE id = ?', id);
        return results;
    }
    catch (err) {
        return { error: "No se puede eliminar el personal" };
    }
}