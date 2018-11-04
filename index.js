// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

attack = false;
client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(attack) {
  if(message.content.includes("H-Hewwo IsaBewwe UwU"))
    message.delete();
  }

  if(message.author.bot) return;
  
  if(message.author.username === "Isabelle") {
    if(attack)
      message.channel.send("Hi.");
  }

  if(message.content.includes("Praise Cthulhu")) {
    message.channel.send("https://i.pinimg.com/originals/09/91/97/09919738945ad1493b7c93d99715cceb.gif")
  }
  else if(message.content.includes("Cthulhu")) {
    fifty50 = Math.floor(Math.random() * 2);
      if( fifty50 == 1 )
        message.channel.send("HOW DARE YOU SPEAK MY NAME MORTAL");
      else
        message.channel.send("H-Hewwo, I'm Cthulhu UwU. Please luv me");
 }
  


  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.


  if(command === "test") {
    const sMessage = args.join(" ");
    bot.guilds.get("508132867252027418").channels.get("508132867252027414").send(sMessage);
  }
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

  if(command === "attacktrue") {
    message.delete();
    attack = true;
  }

  if(command === "attackfalse") {
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    attack = false;
  }

  if(command === "attackjon") {
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    sortaRand = Math.floor(Math.random() * 5);
    if(sortaRand == 0)
      message.channel.send("Peope Die...\nBeauty Fades\nLove changes\nAnd you will always be alone.\nIsn't that right JonTron?");
    if(sortaRand == 1)
      message.channel.send("We feel most alive when we are closest to death.\nWouldn't you say JonTron?");
    if(sortaRand == 2)
      message.channel.send("Everybody is a book of blood; wherever we're opened, we're red.\nWouldn't you say JonTron?");
    if(sortaRand == 3)
      message.channel.send("You're so cute I could put you in a pie.\nIsn't that right JonTron?");
    if(sortaRand == 4)
      message.channel.send("Hope not ever to see Heaven.\nI have come to lead you to the other shore;\nInto eternal darkness;\nInto fire and into ice.\nIsn't that right JonTron?");
  }


  
  if(command === "verse") {
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    message.channel.send("May the merciful gods, if indeed there be such, guard those hours when no power of the will, or drug that the cunning of man devises, can keep me from the chasm of sleep. Death is merciful, for there is no return therefrom, but with him who has come back out of the nethermost chambers of night, haggard and knowing, peace rests nevermore. Fool that I was to plunge with such unsanctioned frensy into mysteries no man was meant to penetrate; fool or god that he was — my only friend, who led me and went before me, and who in the end passed into terrors which may yet be mine!");
  }

  if(command === "speak") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  
  if(command === "spam") {
    for(var i = 0; i < 10; i++) {
      message.channel.send("This is spam test.")
    }

  }
  if(command === "ragnarokbdv370zly167") {
    // get the delete count, as an actual number.
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: args[0]});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});

client.login(config.token);