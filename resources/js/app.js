require('./bootstrap');
let Turbolinks = require("turbolinks");
Turbolinks.start();
// changes the default 500ms threshold to show progress bar
Turbolinks.BrowserAdapter.prototype.showProgressBarAfterDelay = function() {
    return this.progressBarTimeout = setTimeout(this.showProgressBar, 50);
};
