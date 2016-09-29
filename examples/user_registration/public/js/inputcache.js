window.inputcache = (function() {
  function InputCache() {
  }

  var inputcache = {
    select: function() {
      this.ids = arguments;

      return this;
    },

    perform: function(cb) {
      var ic = this;

      window.addEventListener('beforeunload', function() {
        var cacheJson = {};

        for(var i = 0; i < ic.ids.length; i++)
          cacheJson[ic.ids[i]] = $('#' + ic.ids[i]).val();
        cb(cacheJson);
      })
    }
  }

  return inputcache;
}());
