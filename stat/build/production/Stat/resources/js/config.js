Stat = {};

Stat.config = {
    Margin          : 10,
    Padding         : 10,  
    selLanguage     : '4_4', //4_4 = en_GB
    buttonMargin    : '10 15 10 15',
    fieldMargin     : 15,
    labelWidth      : 150,
    maxWidth        : 400,
    numWidth		: 30,
    winWidth        : 900,  //We use this for the initial Width and height
    winHeight       : 500,
    gridNumberCol   : 150,
    radioMargin     : 10,
    panelGrey       : '#e5e6ef',
    secondsToHuman  : function(seconds) {
        var numdays     = Math.floor(seconds / 86400); 
        var numhours    = Math.floor((seconds % 86400) / 3600);
        var numminutes  = Math.floor(((seconds  % 86400) % 3600) / 60);
        var numseconds  = ((seconds % 86400) % 3600) % 60;
        return  padDigits(numdays,2) + ":" + padDigits(numhours,2) + ":" + padDigits(numminutes,2) + ":" + padDigits(numseconds,2);

        function padDigits(number, digits) {
            return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
        }
    },
    bytesToHuman : function (fileSizeInBytes) {
        if((fileSizeInBytes == 0)||(fileSizeInBytes == null)){
            return '0 kb';
        }
        var i = -1;
        var byteUnits = [' kb', ' Mb', ' Gb', ' Tb', 'Pb', 'Eb', 'Zb', 'Yb'];
        do {
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        } while (fileSizeInBytes >= 1024);

        return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
    }
}

