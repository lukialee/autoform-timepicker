Package.describe({
  name: 'lukialee:autoform-timepicker',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A time picker. Values in seconds easy to query and calculation. 简单的时间输入控件 以秒为单位的值便于查询和计算。',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/lukialee/autoform-timepicker.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use(['ecmascript','templating', 'ui', 'blaze']);
  api.use('aldeed:autoform@5.8.1');

  api.addFiles([
    'inputTypes/time-picker/html5_time_in_seconds.js',
    'inputTypes/time-picker/html5_time_in_seconds.html'
  ], 'client');


});
