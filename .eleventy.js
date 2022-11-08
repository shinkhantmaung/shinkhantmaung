const fs = require("fs");

module.exports = function(eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
          ready: function(err, bs) {
    
            bs.addMiddleware("*", (req, res) => {
              const content_404 = fs.readFileSync('./public/404.html');
              // Add 404 http status code in request header.
              res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
              // Provides the 404 content without redirect.
              res.write(content_404);
              res.end();
            });
          }
        }
      });

    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/admin");
    eleventyConfig.addPassthroughCopy("./src/assets/css/style.css");

    return {
        dir : {
            input : "src",
            output : "public"
        }
    };
  
  };