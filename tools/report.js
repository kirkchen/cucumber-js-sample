var Report = require('cucumber-html-report');

var options = {
  source:    './cucumber_report.json', // source json
  dest:      './reports',          // target directory (will create if not exists)
  title:     'Cucumber Report',    // Title for default template. (default is Cucumber Report)
};

var report = new Report(options);
report.createReport();
