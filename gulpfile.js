const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

// Tarefa para otimizar imagens
gulp.task('imagemin', async function (done) {
  gulp.src('./source/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
    .on('end', done)
});

// Tarefa para compilar Sass
gulp.task('sass', function() {
  gulp.src('source/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
});

// Tarefa para minificar JavaScript
gulp.task('uglify', function() {
  gulp.src('source/scripts/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

// Tarefa padrão que executa todas as tarefas acima
gulp.task('default', gulp.series('sass', 'uglify'));

gulp.task('default', gulp.series('imagemin', function (done) {

    console.log('Tarefa padrão concluída!');
    done();
  }));

// Tarefa para observar mudanças e executar tarefas automaticamente
gulp.task('watch', function() {
  gulp.watch('source/images/**/*', { ignoreInitial: false }, gulp.series('imagemin'));
  gulp.watch('source/styles/**/*.scss', { ignoreInitial: false }, gulp.series('sass'));
  gulp.watch('source/scripts/**/*.js', { ignoreInitial: false }, gulp.series('uglify'));
});
