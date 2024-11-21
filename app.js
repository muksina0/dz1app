var  grade = Number(prompt('Введите оценку от 1 до 10').trim());

if (grade >= 5 && grade <= 10 ) {
    alert('Cпасибо за высокую оценку!')
}else if (grade < 5) {
    alert('Мы работаем над улучшением сервиса')
}else {

    alert('Введите оценку от 1 до 10')
}
  
