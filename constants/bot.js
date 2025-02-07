import { Telegraf, Markup } from "telegraf";

const token = '7659475623:AAEWtefvlVJaVn8XdPtCwYT69hoD1yMHPr8'
const bot = new Telegraf(token)
const webInfo = 'https://zanuda-dzmitry.github.io/telegram-mini-app/'

bot.command('start', (ctx) => {
    ctx.reply('Запускай!!!', Markup.keyboard([
        Markup.button.webApp(
            'Что то, куда то.',
            webInfo
        )
    ]))
    
})
bot.launch()