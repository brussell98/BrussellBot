module.exports = function(bot, settingsManager, member, oldMember) {
	if (member.nick !== oldMember.nick) {
		let nickEventChannel = settingsManager.getEventSetting(member.guild.id, 'nicknamechanged');
		if (nickEventChannel !== null) {
			if (member.nick !== null)
				bot.createMessage(nickEventChannel, `\`[${new Date().toUTCString()}]\` **Nickname Change:** ${member.user.username} \`\`is now nicknamed\`\` ${member.nick}`);
			else
				bot.createMessage(nickEventChannel, `\`[${new Date().toUTCString()}]\` **Nickname Change:** ${member.user.username} \`\`removed their nickname\`\``);
		}
	}
}