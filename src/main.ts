import { Client } from 'discord.js'

const a = 3

console.log(a, process.env.DISCORD_APPLICATION_ID)

const client = new Client({ intents: [] })

console.log(client)