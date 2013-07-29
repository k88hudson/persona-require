require(['persona-sso'], function(personaSSO) {
  var sso = personaSSO({
    iframe: document.getElementById('persona-iframe'),
    onlogin: function(data) {
      console.log( "Look we are logged in", data);
    },
    onlogout: function() {
      console.log( "Logged out!" );
    }
  });
  sso.watch();
});
