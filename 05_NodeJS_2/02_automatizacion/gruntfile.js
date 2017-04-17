module.exports = function(grunt) {

    let configuracion = {
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            min: {
                src: '<%= pkg.name %>.js',
                dest: '<%= pkg.name %>.min.js'
            }
        },
        watch: {
            scripts: {
                files: ["./*.js"],
                tasks: ["uglify"],
                options: {
                    spawn: false
                }
            }
        },
        concat: {
            options: {
                separator: "\n// ________________\n"
            },
            dist: {
                src: ["./*.js"],
                dest: '<%= pkg.name %>.todo.js'
            }
        }
    };
    grunt.initConfig(configuracion);

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-concat");

    grunt.registerTask('comprime', ['uglify']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('concatenar', ['concat']);

    function enUnCambio(accion, rutaFichero, destino) {
        grunt.log.writeln(destino + ": " + rutaFichero + " tiene " + accion);
    }
    grunt.event.on("watch", enUnCambio);
};