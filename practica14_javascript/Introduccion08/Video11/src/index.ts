import express from 'express';
import personalRutas from './routes/personalRutas';

//creamos la app a traves del paquete express
// y llamamos a su constructor

const app = express();

//configurar rutas para el aceso
//todo lo que se regresa al usuario es tipo JSON
app.use(express.json());

//puesto para escuchar la peticion del frontend
const puerto = 3001;
app.use('/api/personal', personalRutas);

app.get('/hola', (_req, res) => { //Se declara "req", pero su valor no se lee nunca.
    let fecha = new Date().toLocaleDateString();
    res.send("mundo con la fecha " + fecha + " con TypeScript");
})

//encendemos el servidor
app.listen(puerto, () => {
    console.log(`Servidor en ejecucion y escuchando en el puerto ${puerto}`);
});
