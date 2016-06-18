/**
 * Created by lukia on 4/18/16.
 */
TimeUtil = {
    hmsToTimeVal: function(timeStr){
        var timeArr = timeStr.split(":");
        if(timeArr.length==3)
            return parseInt(timeArr[0])*3600 + parseInt(timeArr[1])*60+parseInt(timeArr[2]);
        else if(timeArr.length==2)
            return parseInt(timeArr[0])*3600 + parseInt(timeArr[1])*60;
    },
    hmToTimeVal: function(timeStr){
        var timeArr = timeStr.split(":");
        return parseInt(timeArr[0])*3600 + parseInt(timeArr[1])*60;
    },
    valToHM: function (val) {
        var tempValForHour = val % 3600;
        var hour = (val - tempValForHour) / 3600;
        var tempValForMin = tempValForHour % 60;
        var min = (tempValForHour - tempValForMin) / 60;
        if (hour < 10)hour = "0" + hour;
        if (min < 10)min = "0" + min;
        return hour + ":" + min;
    },
    valToHMS: function (val) {
        var tempValForHour = val % 3600;
        var hour = (val - tempValForHour) / 3600;
        var tempValForMin = tempValForHour % 60;
        var min = (tempValForHour - tempValForMin) / 60;
        var sec = tempValForMin;
        if (hour < 10)hour = "0" + hour;
        if (min < 10)min = "0" + min;
        if (sec < 10)sec = "0" + sec;
        return hour + ":" + min + ":" + sec;
    },
    formatHM:function(time) {
        if (!time) {
            return '';
        }
        var hour   = time.hour   < 10 ? '0' + time.hour   : time.hour;
        var minute = time.minute < 10 ? '0' + time.minute : time.minute;
        return hour + ':' + minute;
    },
    convertToTimeVal: function(timeObj){
        if(timeObj)
            return timeObj.hour*60*60 + timeObj.minute*60 + timeObj.second;

        return 0;
    },
    valToFullDateStr: function (date, sep) {
        if(!sep)sep = "-";
        return moment(date).format('YYYY'+sep+'MM'+sep+'DD');
    },

    
    formatYMDHMS : function(date, sep){
        var s = this.formatYMD(date, sep);

        var hours = date.getHours();
        if (hours < 10) {
            hours = ('0' + hours);
        }
        var minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = ('0' + minutes);
        }
        var seconds = date.getSeconds();
        if (seconds < 10) {
            seconds = ('0' + seconds);
        }
        return s + ' ' + hours + ':' + minutes + ':' + seconds;
    },
    formatYMD: function(date, sep) {
        if (!date) {
            return '';
        }
        if (typeof date === 'string' || typeof date === 'number') {
            date = new Date(date);
        }
        var month = date.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        var theDate = date.getDate();
        theDate = theDate < 10 ? '0' + theDate : theDate;
        if (typeof sep !== 'string') {
            return date.getFullYear() + '年' + month + '月' + theDate + '日';
        }
        return date.getFullYear() + sep + month + sep + theDate;
    },

};
