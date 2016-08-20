var config = require('config');

module.exports = {
  token: config.get('token'),
  shardCount: config.get('shardCount'),
  disableEvents: config.get('disableEvents'),
  commandSets: config.get('commandSets'),
  reloadCommand: config.get('reloadCommand'),
  evalCommand: config.get('evalCommand'),
  adminIds: config.get('adminIds'),
  logTimestamp: config.get('logTimestamp'),
  cleverbot: config.get('cleverbot'),
  inviteLink: config.get('inviteLink'),
  errorMessage: config.get('errorMessage'),
  carbonKey: config.get('carbonKey'),
  abalBotsKey: config.get('abalBotsKey'),
  cycleGames: config.get('cycleGames'),
  bannedGuildIds: config.get('bannedGuildIds'),
  whitelistedGuildIds: config.get('whitelistedGuildIds')
};
