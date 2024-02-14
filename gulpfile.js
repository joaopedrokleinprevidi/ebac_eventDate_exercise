const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', () => {
  return gulp.src('src/*.scss')  // Selecione todos os arquivos Sass
    .pipe(sourcemaps.init())  // Inicializa os sourcemaps
    .pipe(sass().on('error', sass.logError))  // Compila Sass
    .pipe(sourcemaps.write('.'))  // Grava os sourcemaps no mesmo diretório
    .pipe(gulp.dest('dist/css'));  // Salva o CSS resultante no destino selecionado
});

gulp.task('watch', () => {
  gulp.watch('src/*.scss', gulp.series('sass'));
}); //Inicializa observação para ver se tem modificações (automatiza a compilação)

gulp.task('default', gulp.series('sass', 'watch')); 