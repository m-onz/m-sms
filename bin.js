// https://wiki.teltonika-networks.com/wikibase/index.php?title=RUT955_SMS_Gateway_(legacy_WebUI)&mobileaction=toggle_view_mobile
// SMS POST/Get usage

var http = require('http')
var crypto = require('./crypto.js')
var message = 'hello!!'
var sked_pass = crypto.generateKey('test')
var user = 'monz'
var password = ''
var routerURL = 'http://192.168.1.1/cgi-bin/'

// get messages
http.get(`${routerURL}/sms_list?username=${user}&password=${password}`
, function (stream) {
  stream.on('data', function (i) { console.log(i.toString()); })
})

/*
var enc = crypto.encrypt(message, sked_pass)
http.get(`${routerURL}/sms_send?username=${user}&password=${password}&number=07497597953&text=${enc}`
, function (stream) {
  stream.on('data', function (i) { console.log(i.toString()); })
})
*/

/*
read messages and decrypt SKED messages
send SKED messages
send plaintesxt messages
receive plaintext messages
*/
