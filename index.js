var notifier = require('node-notifier');
var fs = require('fs');

var filePath = process.argv[2] ? process.argv[2] :null;
var appName = process.argv[3] ? process.argv[3] : 'APP';

notifier
    .notify({
        'title': 'Watching ' + appName,
        'message': 'Running...',
        'wait': false,
        'icon': __dirname + '/Alarm.png'
    }, function (err, data) {
    })
    .on('click', function () {});

fs.watchFile(filePath, function (curr, prev) {
    notifier
        .notify({
            'title': appName,
            'message': 'Changed!',
            'wait': false,
            'icon': __dirname + '/Alert.png'
        }, function (err, data) {})
        .on('click', function () {});
});
