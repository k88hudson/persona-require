require(['persona-sso'], function(personaSSO) {
  var sso = personaSSO({
    audience: 'http://localhost:8000',
    iframe: document.getElementById('persona-iframe'),
    onlogin: function(data) {
      console.log( "The main app is aware of being logged in");
    },
    onlogout: function() {
      console.log( "The main app is aware of being logged out" );
    },
    onready: function() {
      console.log( "The main app is aware of being ready");
    }
  });
  sso.watch();
});
