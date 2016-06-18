/**
 * Created by lukia on 16/6/5.
 */
AutoForm.addInputType("html5_time_in_seconds", {
    template: "afInputHTML5TimeInSecond",
    valueIn: function (value, atts) {
        var result;
        try {
            var inputValue = value;
            if(inputValue!=undefined)
                result = TimeUtil.valToHMS(inputValue);
            return result;
        }catch (err){
            console.log(err);
        }
    },
    valueOut: function () {
        var result;
        try {
            var inputValue = this.val();
            if (inputValue != undefined)
                result = TimeUtil.hmsToTimeVal(inputValue);
            return result;
        }catch (err){
            console.log(err);
        }
    }
});