var gulp = require("gulp");
var server = require("gulp-webserver");
var data = require("./src/data/data.json");




gulp.task("server",function(){
    gulp.src("src")
        .pipe(server({
                open:true,
            port:"8282",
            livereload:true,
            middleware:function(req,res,next){

                if(req.url === "/info"){
                    res.end(JSON.stringify(data))
                }
                next();
            }
            }))
})

