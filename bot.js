const{ Telegraf } = require('telegraf')

const bot = new Telegraf('1926175449:AAGxzdrLrxyGHEVIp4b84I2S3-cZDpgtrW8');

bot.start((ctx) => {
    ctx.reply('Bienvenidos al Grupo de Metodos Nivelacion - I\n'+
    '\nFui creado para realizar una automatizacion de las cosas que se necesitan a la mano\n'+
    '\n Si Tu deseas saber alguna de las cosas que puede ayudarte a realizar este pob puedes escribir /help\n'+
    '\nCreado y desarrolado por: \n Ing. Francisco Daniel Martinez.\n  El dia 26 Enero del 2021.'
    );
    
    
})

bot.help((ctx) => {
    ctx.reply('Aqui Tinenes las distintas cosas que puedes hacer conmigo\n'+
    '\n/programa              Aqui se te hara llegar el programa de la materia\n'+
    '\n/clase                 Aqui tendras la direccion del link para la sesion de meet\n'+
    '\n/maestro               Aqui tendras los datos de la maestra, recuerda, el tambien suele estar ocupado.\n'+
    '\n/clave                 Aqui tienes la clave del ID de acceso a class room.\n'+
    '\n/fecha                 Si deseas saber la hora y la fecha actual.\n'+
    '\n/programador           Necesitas ayuda sobre el bot? o algun error de este.\n'+
    '\n/settings               Aqui Tienes las tecnologias de que me hace funcionar, recuerda soy un robot, no un humano.');
})

bot.settings((ctx) => {
    ctx.reply('Hola'+ ' '+ctx.from.first_name + ' '+ 'Soy el TecInfCom_bot y estoy en mi version 2.0.2 asi que no soy perfecto\n'+
    '\nEstoy Creado con Node.js en su version 6.14.10\n'+
    '\nMe ayudo de la API de TELEGRAF en su version 4.0.1\n'+
    '\nYa vivo en la nube, asi que estoy las 24hrs Trabajo con lenguaje de Java Script y actualmente vivo en Heroku, es muy guapo mi creador por cierto, lo puedes buscar en Instagram como @pakopank_97\n'+
    '\nMi creador dice que soy como el asistente del grupo.\n'+
    '\nSi deseas a alguien como yo con lo que tu deseas, consulta a mi creador con el comando /programador el te atendera, el es humano y puede crear mas como yo.\n'+
    '\nAdios' + ' '+ctx.from.first_name + ' '+ 'Gracias por querer saber mas de mi.');
})

bot.command('programa', (ctx) => {
    ctx.reply('Hola' + ' '+ctx.from.first_name + ' '+'Aqui tienes el programa de la materia, es un placer ayudarte.');
    ctx.replyWithDocument({
        source :'docs/DOSIFICACIÓN Tecnologias Agosto 2021.pdf'
    });
})

bot.command('clase', (ctx) => {
    ctx.reply('Hola' + ' '+ctx.from.first_name + ' '+ ' aqui tienes lo que necesitas.');
    ctx.reply('Tema: LE07 Tecnologías de la Educación y comunicación en la Educación\n'+
    '\nHora: Este es una reunión recurrente Reunirse en cualquier momento\n'+
    
    '\nUnirse a la reunión meet\n'+
    '\nhttps://meet.google.com/lookup/cd53ge37gh?authuser=0&hs=179\n'+
    
    '\nID de reunión: cd53ge37gh\n'+
    '\nCódigo de acceso: 285 403 893#');
})

bot.command('maestro', ctx=> {
    ctx.reply('Hola'+' '+ctx.from.first_name+' '+'aqui estan los datos');
    ctx.reply('Su correo es:        franciscomartinez@cudeoriente.edu.mx\n'+
    '\nSu numero telefonico es: 55 8613 5682\n'+
    '\nMaestro' + ' '+ ctx.from.first_name+' '+'Solicita su ayuda\n'+
    '\nRecuerda que la maestro tambien esta ocupado, no te desesperes.');
})

bot.command('clave', ctx =>{
    ctx.reply('Hola'+ ' '+ctx.from.first_name+' '+ 'La clave que necesitas es\n r2uh5iu\n'+
    '\nRecuerda que todo es en la platafroma de \nhttps://classroom.google.com/c/MzgwMDk5NjUyOTY5?cjc=r2uh5iu\n'+
    '\nRecuerda que es unicamente con el correo institucional\n');
})
//Fecha desde el sistema con el metodo replyWithHTML
bot.command('fecha', (ctx) =>
{
  let fecha = new Date();
  let dia = ("0" + fecha.getDate()).slice(-2);
  let mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
  let anio = fecha.getFullYear();
  let horas = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();

  ctx.replyWithHTML("Fecha y hora en el sistema:<b> "+dia + "/" + mes + "/" + anio+" "+horas+ ":" +minutos+ ":" +segundos+"</b>");
});

bot.hears(/tarea/i, (ctx) => {
    ctx.reply('No digan tarea, eso es muy malo para todos. No es cierto, son importantes, se los dice su amigo el BOT.');
})

bot.hears(/tareas/i, (ctx) => {
    ctx.reply('Si son TAREAS, son muchas, no olviden hacerlas, y mandarlas por classroom.');
})

//Escuchar Palabra especifica en un contexto.
bot.hears(/gracias/i, (ctx) => {
    ctx.reply('Por nada, para eso estoy ' + ' '+ctx.from.first_name);
})

bot.on('voice', ctx => {
    ctx.reply('No mandes audios, no tengo oidos, mejor escribe :D');
})

bot.command('programador', ctx =>{
    ctx.reply('Hola'+ ' '+ctx.from.first_name+' '+ 'si deseas aportar algo a mi,'+'los datos de la persona que me realizo son:\n'+
    '\nSu Nombre es Francisco Daniel Martinez, es Tecnico en programacion y Ingeniero en Sistemas Computacionales.\n'+
    '\nSi deseas contratar su servicio para realizar una aplicacion, pagina web, una computadora a tu medida, uun bot como yo, o cualquiero cosa que se te pueda imaginar, contactalo.\n'+
    '\n Tel: 5586135682\n'+
    '\nCorreo Electronico: franiciscodaniel97@gmail.com\n'+
    '\nPuedes Visitar su Pagina Web para conocer un poco mas de el:\n'+
    '\nhttps://pakopank97.github.io/portafolio/n');

    //ctx.reply('Aqui tienes su CV actualizado')

    /*ctx.replyWithDocument({
        source :'docs/CV 2021 enero.pdf'
    });
    */
})
//Mandar Documentos
bot.command('congreso', ctx =>{
    ctx.reply('Hola'+ ' '+ ctx.from.first_name + ' ' + "Aqui tienes los datos del congreso y los talleres." );
    ctx.replyWithDocument({
        source : 'docs/Programa Congreso Cartel.pdf'
    })
    ctx.replyWithDocument({
        source : 'docs/TALLERES_CONGRESO VIRTUAL.docx'
    })
})

bot.on('sticker', ctx => {
    ctx.reply('Que lindo sticker'+' '+ ctx.from.first_name+' '+'Esta muy bonito ♥');
})
//Esto Nos inicia el bot
bot.launch()