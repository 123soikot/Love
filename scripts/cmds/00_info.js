const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "cliff",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const botName = "Ex 卝 বয়ফ্রেন্ডヅ";
		const botPrefix = ".";
		const authorName = "Ex 卝 বয়ফ্রেন্ডヅ";
		const ownAge = "18";
		const teamName = "Github team";
		const authorFB = "https://www.facebook.com/mdsakhoyat.hosen.9";
		const authorInsta = "Thead469";
		const tikTok = "tiktok.com/@Cliffthegreat0";
		const urls = JSON.parse(fs.readFileSync('cliff.json'));
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `《  Bot & Owner Info 》
Name: {botName}
Bot Prefix: {.}
owner: {soikot }
age : {18+}
Facebook: {https://www.facebook.com/mdsakhoyat.hosen.9}
\Instagram: {SOIKoT1}
\TikTok: ${tikTok}
\Datee: ${}
\Time: ${time}
\Team: ${teamName}
\Uptime: ${uptimeString}
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
