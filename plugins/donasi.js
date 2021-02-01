let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085768105325]
│ • Dana [085768105325]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285768105325
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
