const Discord = require('discord.js');
const Google = require('./commands/google')
const ytdl = require('ytdl-core');

var bot = new Discord.Client();
var prefix = ("/");
var randum = 0;
var queue = []

bot.on('ready',() => {
    bot.user.setPresence({ game: { name: 'vous servir !', type: 0}});
    console.log("Bot fonctionnel !");
});
function playMusic(url, connection) {
    // connection c'est la variable qui représente la connexion vocale au channel
    
    const stream = ytdl(url, { filter: 'audioonly' });
    const dispatcher = connection.playStream(stream);
    connection.playStream(stream) // et le truc de ytdl on le met la dedans
    dispatcher.on('end', () => {
        playQueue(connection)
        // Quand la musique est fini, on execute la fonction checkQueue()
        // On lui donne la variable connection parce que c'est nécessaire pour la suite
    })
}

function playQueue(connection) {
    // On regarde si il reste des éléments dans la queue et on joue le premier
    if (queue.length > 0) {
        let music = queue.shift() // On supprime le premier élément mais on le récupère juste pour lancer la musique
        playMusic(music, connection)
    } else {
        connection.leave() // Sinon on quitte le channel
    }
}


bot.login('NDE4NDc5NjU0MTE5Mjc2NTQ1.DXiLWg.wR5pp0VXf-8c8bYxcACwmiOHGi4');
bot.on('guildMemberAdd', function (member) {
    member.createDM().then (function(channel) {
        return channel.send('Je te souhaite la bienvenue'+ ' ' + member.displayName )
    console.log('Erreur Mp')   
    })

})
 
bot.on('message', message => {
    if (message.content.startsWith('!lecture')) {
        let url = message.content.split(' ')[1]
        if (!url) return message.channel.send("Il manque un Url !")

        console.log('Lien !');
        const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) {
            return message.reply('Il faut être dans un channel vocal!');
        }
        voiceChannel.join()
            .then(connection => {
                queue.push(url)
                playQueue(connection)
            });
    }
});  

bot.on('message', message => {
    if (message.content === '!stop') {
        message.guild.member(bot.user.id).voiceChannel.leave();
        console.log('Déconnecté du channel vocal !')

    }
});


bot.on("message", message => {
    if (message.content.startsWith('Bonjour')){
        message.channel.send("Salut, comment allez-vous ? https://gph.is/2bZufS7");
        console.log('Bonjour')
    }
    
    if (message.content.startsWith('bonjour')){
        message.channel.send("Salut, comment allez-vous ? https://gph.is/2bZufS7");
        console.log('Bonjour')
    }
    
  
    if (message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
            .setTitle("Les commandes dispo : ")
            .setColor("#57D5C4")
            .addField("!lecture + [Url]", "Ajoute la musique de l'Url à la playlist")
            .addField("!stop", "Arrête la musique en cours de lecture")
            .addBlankField(true)
            .addField("!google + [mot à rechercher]", "recherche sur Google le mot demandé et donne le lien des résultats")
            .setFooter("Voilà voilà")
        message.channel.send(help_embed);
        console.log("Aide commande")
        }
        
    if (message.content.startsWith('ça va')) {
        random();
        if (randnum ==1) {
            message.channel.send("Je vais bien ! https://media.giphy.com/media/Zg7clvqHE3CdW/giphy.gif")
            console.log(randnum);
        }

        if (randnum ==2) {
            message.channel.send("Je vais très mal ! https://media.giphy.com/media/IX0WdUDvDsCB2/giphy.gif")
            console.log(randnum);
        }
    }
    
    if (message.content.startsWith('sa va')){
        random();
        if (randnum ==1) {
            message.channel.send("Je vais bien ! https://media.giphy.com/media/Zg7clvqHE3CdW/giphy.gif")
            console.log(randnum);
        }

        if (randnum ==2) {
            message.channel.send("Je vais très mal ! https://media.giphy.com/media/IX0WdUDvDsCB2/giphy.gif")
            console.log(randnum);
        }
    
    }

        
    if (message.content.startsWith('Bye')) {
        random();
        if (randnum ==1) {
            message.channel.send("J'attends désespérement ton retour ! https://media.giphy.com/media/l41Yko95OitJfzBJe/giphy.gif")
            console.log(randnum);
        }

        if (randnum ==2) {
            message.channel.send("Bon vent ! https://gph.is/1sCW76X")
            console.log(randnum);
        }
    
    }

    if (message.content.startsWith('bye')) {
        random();
        if (randnum ==1) {
            message.channel.send("J'attends désespérement ton retour ! https://media.giphy.com/media/l41Yko95OitJfzBJe/giphy.gif")
            console.log(randnum);
        }

        if (randnum ==2) {
            message.channel.send("Bon vent ! https://gph.is/1sCW76X")
            console.log(randnum);
        }
    
    }
    if (message.content.startsWith('au revoir')) {
        random();
        if (randnum ==1) {
            message.channel.send("J'attends désespérement ton retour ! https://media.giphy.com/media/l41Yko95OitJfzBJe/giphy.gif")
            console.log(randnum);
        }

        if (randnum ==2) {
            message.channel.send("Bon vent ! https://gph.is/1sCW76X")
            console.log(randnum);
        }
    
    }

    if (message.content.startsWith('Au revoir')) {
        random();
        if (randnum ==1) {
            message.channel.send("J'attends désespérement ton retour ! https://media.giphy.com/media/l41Yko95OitJfzBJe/giphy.gif")
            console.log(randnum);
        }

        if (randnum ==2) {
            message.channel.send("Bon vent ! https://gph.is/1sCW76X")
            console.log(randnum);
        }
    
    }
    if (message.content === "Pourquoi Hoso ?"){
        message.channel.send("Mon nom vient du mot diffusion en Japonnais ^^ https://gph.is/2ga6BHg");
        console.log('Pourquoi ?')
    }
    
    if (message.content === "pourquoi Hoso ?"){
        message.channel.send("Mon nom vient du mot diffusion en Japonnais ^^ https://gph.is/2ga6BHg");
        console.log('Bonjour')
    }
    Google.parse(message)
    
})


function random(min, max) {
    min = Math.ceil(1)
    max = Math.floor(2)
    randnum= Math.floor(Math.random()* (max- min +1) + min);


}

