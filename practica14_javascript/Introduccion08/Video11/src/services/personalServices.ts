import mysql from 'mysql2/promise';
import { z } from 'zod';
import { Personal, PersonalNuevo } from '../typesPersonal';

// validaciones con zod
const personalSchema = z.object({

    nombre: z.string().min(2, "Minimo 2 caracteres").max(200, "Maximo 200 caracteres"),
    direccion: z.string().min(2).max(300),
    telefono: z.string().min(10).max(15),
    estatus: z.number().int().positive().min(1).max(2, "Los valores permitidos son 1 o 2")
}).refine(data => data.nombre == "TEC DE CULIACAN", {
    message: "La dirección debe ser TEC DE CULIACAN",
    path: ["direccion"]
})

const conexion = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'pw2024',
    port: 3307 // tuve que cambiar el puerto en mi caso a 3307 porque ya estaba ocupado el 3306
    //xovxyw-keCnej-nawqy0
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
        const validacion = personalSchema.safeParse(nuevo);
        if (!validacion.success) {
            return { error: validacion.error };
        }
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