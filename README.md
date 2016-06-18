# autoform-timepicker

用于Meteor Autoform的简单时间输入控件，以秒为单位的值便于查询和计算。Autoform提供了基础的time控件,其实是使用html5的input。
A time picker for Meteor Autoform. Values in seconds easy to query and calculate.
A basic time control in Autoform is such an input:
```html
<input type="time" />
```
它存储的值是字符串,如"12:23"。有时我们需要数值型。
It store string value, e.g. "12:23". Sometimes we need numeric value.


Installation
------------
```
$ meteor add lukialee:autoform-timepicker
```

Usage
------------
把属性step设置为1，我们才能输入秒。如果省略它或者设置为60，就只显示小时和分。

Setting the attribute "step" to 1, then we could enter second. If omit that or set to 60, the input only show hour and minute.

Define schema:
```js
EventsSchema = new SimpleSchema({
  /* ... */
  startTime: {
    label: "Start Time",
    type: Number,
    decimal:true,
    optional: true,
    autoform: {
        afFieldInput: {
            type: "html5_time_in_seconds",
            step:1 
        }
    }
  },
  endTime: {
    label: "End Time",
    type: Number,
    decimal:true,
    optional: true,
    autoform: {
        afFieldInput: {
            type: "html5_time_in_seconds",
            step:1
        }
    }
  }
});
```