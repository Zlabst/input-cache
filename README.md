# Input Cache
Get input data before the user leaves a page   
This is useful if you want to remember what your users had typed so far on your inputs.   

**This library requires jQuery as of right now**

## Example

```html
<!DOCTYPE html>
<html>
<head>
  <script type="text/javascript" src="jquery.min.js"></script>
  <script type="text/javascript" src="inputcache.js"></script>
</head>
<body>
  <form>
    <input type="text" id="first" /><br />
    <input type="text" id="second" /><br />
    <input type="text" id="third" /><br />

    <a href="http://google.com/">Leave</a>

    <script>
      $(document).ready(function() {
        inputcache.select("first",
                  "second",
                          "third")
                  .perform(function(cache) {
                      confirm(JSON.stringify(cache));
        });
      });
    </script>
  </form>
</body>
</html>
```

This example show a confirm box containing a stringified version of the cache before the user leaves the page.

## TODO
1. An an example folder with an example client and server
