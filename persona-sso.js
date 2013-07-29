define([], function() {
    var noop = function(){};
    var personaSSO = function(options) {
      var self = this;
      self.iframe = options.iframe || document.getElementById("persona-frame");
      self.onlogin = options.onlogin || noop;
      self.onlogout = options.onlogout || noop;
      self.audience = options.audience || '/';
      self.watch = function() {
          window.addEventListener('message', function(e) {
            var message = JSON.parse(e.data);
            var type = message.type;
            var data = message.data;
            if (type === 'onlogin') {
              self.onlogin(data);
            }
            if (type === 'onlogout') {
              self.onlogout();
            }
          });
          self.iframe.src = self.audience + '/include.html';
      }
      return self;
    };
    return personaSSO;
});
