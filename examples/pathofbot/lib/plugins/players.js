function inject (bot) {
  bot._client.on('D2GS_PLAYERJOINED', ({ playerId, charName }) => {
    bot.playerList.push({ id: playerId, name: Buffer.from(charName).toString() })
  })

  bot._client.on('D2GS_PLAYERLEFT', (playerId) => {
    const index = bot.playerList.findIndex(e => e.playerId === playerId)
    bot.playerList.splice(index, 1)
  })
}

module.exports = inject
