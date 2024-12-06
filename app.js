const express = require(express);
const app = express();
const bodyParser = require(body-parser);
const fechaActual = new Date();

app.use(bodyParser.json());

let notes = [{id: 1, titulo: "Nota 1", contenido:"Pondre mi primera nota aqui", fecha:"10/8/2024"}];

//Obtener Todas las Notas
app.get(/notes, (req, res) => {
    res.json(notes);
});

//Agregar una Nota
app.post('/notes', (req, res) => {
    const { titulo, contenido } = req.body; // Variables recibidas desde el cuerpo de la solicitud

    // Validar que se envíen los datos necesarios
    if (!titulo || !contenido) {
        return res.status(400).json({ error: "El título y el contenido son obligatorios." });
    }

    // Crear nueva nota
    const fechaActual = new Date(); // Obtener la fecha actual
    const newNote = {
        id: notes.length + 1,
        titulo, // Usar la variable recibida
        contenido, // Usar la variable recibida
        fecha: ${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()} // Formato de fecha
    };

    // Agregar la nota a la lista
    notes.push(newNote);

    // Responder con la nueva nota
    res.status(201).json(newNote);
});

//Buscar Nota por Id
app.get(/notes/:id, (req, res) => {
    const note = notes.find(t => t.id === parseInt(req.params.id));
    if (!note){
        return res.status(404).send("Nota no Encontrada");
        res.json(note);
    }
});

//Eliminar una Nota por Id
app.delete(notes/:id, (req, res) => {
    notes = notes.filter(t => t.id !== parseInt(req.params.id));
    res.status(204).send();
});

//Iniciar el Servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(Servidor Corriendo en http://localhost:${PORT});
});

/*
app.get(/, (req, res) => {
    res.send(Bienbenido a la Api);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(Servidor Escuchando en el puerto ${PORT})
});
*/
