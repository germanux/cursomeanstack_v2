var [gulp, concat, uglify] = [require("gulp"), require("gulp-concat"), require("gulp-uglify")];

gulp.task("default", tareasEnComprimir);
gulp.watch("source/*.js", tareasEnComprimir);

function tareasEnComprimir(fichero) {
    //  GLOB
    var glob = gulp.src(["source/*.js", "!source/3.js"]);

    glob.pipe(concat("funciones.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("build/"));

    console.log("Modificando con Gulp: " + fichero.path);
}