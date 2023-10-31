//Задание 1
//Найдите сумму num1 и num2. Добавьте слушатель события на кнопку "Задание 1" и выведите результат на экран.

const buttonOne = document.querySelector(".b-1");
const resultOne = document.querySelector("#resultOne");

const makeOne = () => {
  const num1 = 5;
  const num2 = 10;
  const sum = num1 + num2;
  resultOne.textContent = sum;
};

buttonOne.addEventListener("click", makeOne); //Слушатель уже добавлен

//Задание 2
//Найдите разность num1 и num2. Добавьте слушатель события на кнопку "Задание 2" и выведите результат на экран.

const buttonTwo = document.querySelector(".b-2");
const resultTwo = document.querySelector("#resultTwo");

const makeTwo = () => {
  const num1 = 20;
  const num2 = 7;
  const difference = num1 - num2;
  resultTwo.textContent = difference;
};

buttonTwo.addEventListener("click", makeTwo);

//Задание 3
//Найдите произведение num1 и num2. Добавьте слушатель события на кнопку "Задание 3" и выведите результат на экран.

const buttonThree = document.querySelector(".b-3");
const resultThree = document.querySelector("#resultThree");

const makeThree = () => {
  const num1 = 8;
  const num2 = 4;
  const productOfNumbers = num1 * num2;
  resultThree.innerHTML = productOfNumbers;
};

buttonThree.addEventListener("click", makeThree);

//Задание 4
//Найдите результат операции деления num1 на num2. Добавьте слушатель события на кнопку "Задание 4" и выведите результат на экран.

const buttonFour = document.querySelector(".b-4");
const resultFour = document.querySelector("#resultFour");

const makeFour = () => {
  const num1 = 16;
  const num2 = 2;
  const divisionONumbers = num1 / num2;
  resultFour.innerHTML = divisionONumbers;
};

buttonFour.addEventListener("click", makeFour);

//Задание 5
//Возведите число num в степень power. Добавьте слушатель события на кнопку "Задание 5" и выведите результат на экран.
//Подсказка: Используйте метод Math.pow(a,b)

const buttonFive = document.querySelector(".b-5");
const resultFive = document.querySelector("#resultFive");

const makeFive = () => {
  const num = 3;
  const power = 4;
  const exponential = Math.pow(num, power);
  resultFive.textContent = exponential;
};

buttonFive.addEventListener("click", makeFive);

//Задание 6
//Найдите результат от деления num1 на num2. Добавьте слушатель события на кнопку "Задание 6" и выведите результат на экран.

const buttonSix = document.querySelector(".b-6");
const resultSix = document.querySelector("#resultSix");

const makeSix = () => {
  const num1 = 20;
  const num2 = 5;
  const division = num1 / num2;
  resultSix.textContent = division;
};

buttonSix.addEventListener("click", makeSix);

//Задание 7
//Найдите остаток от деления num1 на num2. Добавьте слушатель события на кнопку "Задание 7" и выведите результат на экран.

const buttonSeven = document.querySelector(".b-7");
const resultSeven = document.querySelector("#resultSeven");

const makeSeven = () => {
  const num1 = 25;
  const num2 = 7;
  const balance = num1 % num2;
  resultSeven.textContent = balance;
};

buttonSeven.addEventListener("click", makeSeven);

//Задание 8
//Найдите остаток от деления num1 на 10. Добавьте слушатель события на кнопку "Задание 8" и выведите результат на экран.

const buttonEight = document.querySelector(".b-8");
const resultEight = document.querySelector("#resultEight");

const makeEight = () => {
  const num1 = 123;
  const divisionBy10 = num1 % 10;
  resultEight.textContent = divisionBy10;
};

buttonEight.addEventListener("click", makeEight);

//Задание 9
//Найдите остаток от деления num1 на 100. Добавьте слушатель события на кнопку "Задание 9" и выведите результат на экран.

const buttonNine = document.querySelector(".b-9");
const resultNine = document.querySelector("#resultNine");

const makeNine = () => {
  const num1 = 4567;
  const divisionBy100 = num1 % 100;
  resultNine.textContent = divisionBy100;
};

buttonNine.addEventListener("click", makeNine);

//Задание 10
//Найдите символ по индексу 2 в строке "Hello". Добавьте слушатель события на кнопку "Задание 10" и выведите результат на экран.

const buttonTen = document.querySelector(".b-10");
const resultTen = document.querySelector("#resultTen");

const makeTen = () => {
  const str = "Hello";
  const secondIndex = str[2];
  resultTen.textContent = secondIndex;
};

buttonTen.addEventListener("click", makeTen);

//Задание 11
//Выведите на экран результат операции 5 взятое по модулю 2. Добавьте слушатель события на кнопку "Задание 11" и выведите результат на экран.

const buttonEleven = document.querySelector(".b-11");
const resultEleven = document.querySelector("#resultEleven");

const makeEleven = () => {
  const num1 = 5;
  const num2 = 2;
  const result = Math.abs(num1 % num2);
  resultEleven.textContent = result;
};

buttonEleven.addEventListener("click", makeEleven);

//Задание 12
//Объедините строки str1 и str2. Добавьте слушатель события на кнопку "Задание 12" и выведите результат на экран.

const buttonTwelve = document.querySelector(".b-12");
const resultTwelve = document.querySelector("#resultTwelve");

const makeTwelve = () => {
  const str1 = "Hello, ";
  const str2 = "World!";
  const greeting = `${str1} ${str2}`;
  resultTwelve.textContent = greeting;
};

buttonTwelve.addEventListener("click", makeTwelve);

//Задание 13
//Найдите длину строки str. Добавьте слушатель события на кнопку "Задание 13" и выведите результат на экран.

const buttonThirteen = document.querySelector(".b-13");
const resultThirteen = document.querySelector("#resultThirteen");

const makeThirteen = () => {
  const str = "JavaScript";
  const stringLength = str.length;
  resultThirteen.textContent = stringLength;
};

buttonThirteen.addEventListener("click", makeThirteen);

//Задание 14
//Приведите строку str к нижнему регистру. Добавьте слушатель события на кнопку "Задание 14" и выведите результат на экран.

const buttonFourteen = document.querySelector(".b-14");
const resultFourteen = document.querySelector("#resultFourteen");

const makeFourteen = () => {
  const str = "JavaScript";
  const lowercase = str.toLowerCase();
  resultFourteen.textContent = lowercase;
};

buttonFourteen.addEventListener("click", makeFourteen);

//Задание 15
//Приведите строку str к верхнему регистру. Добавьте слушатель события на кнопку "Задание 15" и выведите результат на экран.

const buttonFifteen = document.querySelector(".b-15");
const resultFifteen = document.querySelector("#resultFifteen");

const makeFifteen = () => {
  const str = "JavaScript";
  const uppercase = str.toUpperCase();
  resultFifteen.textContent = uppercase;
};

buttonFifteen.addEventListener("click", makeFifteen);

//Задание 16
//Получите подстроку из строки str, начиная с индекса 3 и до конца строки. Добавьте слушатель события на кнопку "Задание 16" и выведите результат на экран.
//Подсказка: Используйте для получения подстроки из строки используйте метод substring()

const buttonSixteen = document.querySelector(".b-16");
const resultSixteen = document.querySelector("#resultSixteen");

const makeSixteen = () => {
  const str = "JavaScript";
  const extractedSubstring = str.substring(3);
  resultSixteen.textContent = extractedSubstring;
};

buttonSixteen.addEventListener("click", makeSixteen);

//Задание 17
//Получите подстроку из строки str, начиная с индекса 3 и до индекса 7 (не включая его). Добавьте слушатель события на кнопку "Задание 17" и выведите результат на экран.
//Подсказка: Используйте для получения подстроки из строки используйте метод substring()

const buttonSeventeen = document.querySelector(".b-17");
const resultSeventeen = document.querySelector("#resultSeventeen");

const makeSeventeen = () => {
  const str = "JavaScript";
  const extractedSubstring = str.substring(3, 7);
  resultSeventeen.textContent = extractedSubstring;
};

buttonSeventeen.addEventListener("click", makeSeventeen);

//Задание 18
//Замените все вхождения подстроки 'world' на 'JavaScript' в строке str. Добавьте слушатель события на кнопку "Задание 18" и выведите результат на экран.
//Подсказка: Для замены подстрок в строке используйте метод replace()
const buttonEighteen = document.querySelector(".b-18");
const resultEighteen = document.querySelector("#resultEighteen");

const makeEighteen = () => {
  const str = "Hello, world!";
  const searchString = /world/g;
  const replacement = "JavaScript";
  const newString = str.replace(searchString, replacement);
  resultEighteen.innerHTML = newString;
};

buttonEighteen.addEventListener("click", makeEighteen);

//Задание 19
//Получите подстроку из строки str, начиная с индекса 7 и длиной 6 символов. Добавьте слушатель события на кнопку "Задание 19" и выведите результат на экран.

const buttonNineteen = document.querySelector(".b-19");
const resultNineteen = document.querySelector("#resultNineteen");

const makeNineteen = () => {
  const str = "Hello, world!";
  const extractedSubstring = str.slice(7, 13);
  resultNineteen.innerHTML = extractedSubstring;
};

buttonNineteen.addEventListener("click", makeNineteen);

//Задание 20
//Найдите максимальное число из чисел 10, 25, 5, 30, 15. Добавьте слушатель события на кнопку "Задание 20" и выведите результат на экран.
//Подсказка: для нахождения максимального числа из заданных используйте метод Math.max()

const buttonTwenty = document.querySelector(".b-20");
const resultTwenty = document.querySelector("#resultTwenty");

const makeTwenty = () => {
  const maxNumber = Math.max(10, 25, 5, 30, 15);
  resultTwenty.innerHTML = maxNumber;
};

buttonTwenty.addEventListener("click", makeTwenty);

// Задание 21
// Выведите на экран случайное целое число от 1 до 10. Добавьте слушатель события на кнопку "Задание 21" и выведите результат на экран.

const buttonTwentyOne = document.querySelector(".b-21");
const resultTwentyOne = document.querySelector("#resultTwentyOne");

const makeTwentyOne = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  resultTwentyOne.innerHTML = randomNumber;
};

buttonTwentyOne.addEventListener("click", makeTwentyOne);

//Задание 22
//Найдите минимальное число из чисел 10, 25, 5, 30, 15. Добавьте слушатель события на кнопку "Задание 21" и выведите результат на экран.
//Подсказка: для нахождения максимального числа из заданных используйте метод Math.min()

const buttonTwentyTwo = document.querySelector(".b-22");
const resultTwentyTwo = document.querySelector("#resultTwentyTwo");

const makeTwentyTwo = () => {
  const minNumber = Math.min(10, 25, 5, 30, 15);
  resultTwentyTwo.innerHTML = minNumber;
};

buttonTwentyTwo.addEventListener("click", makeTwentyTwo);

//Задание 23
//Выведите на экран результат возведения числа 2 в степень 5. Добавьте слушатель события на кнопку "Задание 23" и выведите результат на экран.
//Подсказка: Используйте метод Math.pow(a,b)

const buttonTwentyThree = document.querySelector(".b-23");
const resultTwentyThree = document.querySelector("#resultTwentyThree");

const makeTwentyThree = () => {
  const numberRaised = Math.pow(2, 5);
  resultTwentyThree.innerHTML = numberRaised;
};

buttonTwentyThree.addEventListener("click", makeTwentyThree);

//Задание 24
//Выведите на экран наименьшее число из чисел 7, 3, 11, 5, 9. Добавьте слушатель события на кнопку "Задание 24" и выведите результат на экран.

const buttonTwentyFour = document.querySelector(".b-24");
const resultTwentyFour = document.querySelector("#resultTwentyFour");

const makeTwentyFour = () => {
  const minNumber = Math.min(7, 3, 11, 5, 9);
  resultTwentyFour.innerHTML = minNumber;
};

buttonTwentyFour.addEventListener("click", makeTwentyFour);

//Задание 25
//Выведите на экран наибольшее число из чисел 7, 3, 11, 5, 9. Добавьте слушатель события на кнопку "Задание 25" и выведите результат на экран.

const buttonTwentyFive = document.querySelector(".b-25");
const resultTwentyFive = document.querySelector("#resultTwentyFive");

const makeTwentyFive = () => {
  const maxNumber = Math.max(7, 3, 11, 5, 9);
  resultTwentyFive.innerHTML = maxNumber;
};

buttonTwentyFive.addEventListener("click", makeTwentyFive);

//Задание 26
//Выведите на экран случайное число от 0 до 1 с точностью до 4 знаков после запятой. Добавьте слушатель события на кнопку "Задание 26" и выведите результат на экран.
//Подсказка: Используйте метод toFixed(4)

const buttonTwentySix = document.querySelector(".b-26");
const resultTwentySix = document.querySelector("#resultTwentySix");

const makeTwentySix = () => {
  const randomNum = Math.random().toFixed(4);
  resultTwentySix.textContent = randomNum;
};

buttonTwentySix.addEventListener("click", makeTwentySix);

//Задание 27
//Выведите на экран случайное целое число от 50 до 100. Добавьте слушатель события на кнопку "Задание 27" и выведите результат на экран.

const buttonTwentySeven = document.querySelector(".b-27");
const resultTwentySeven = document.querySelector("#resultTwentySeven");

const makeTwentySeven = () => {
  const randomNum = Math.floor(Math.random() * 51) + 50;
  resultTwentySeven.textContent = randomNum;
};

buttonTwentySeven.addEventListener("click", makeTwentySeven);

//Задание 28
//Округлите число 4.47 в большую сторону с помощью метода Math.ceil(). Добавьте слушатель события на кнопку "Задание 28" и выведите результат на экран.

const buttonTwentyEight = document.querySelector(".b-28");
const resultTwentyEight = document.querySelector("#resultTwentyEight");

const makeTwentyEight = () => {
  const roundingUp = Math.ceil(4.47);
  resultTwentyEight.innerHTML = roundingUp;
};

buttonTwentyEight.addEventListener("click", makeTwentyEight);

//Задание 29
//Получите квадратный корень из числа 16 с помощью метода Math.sqrt(). Добавьте слушатель события на кнопку "Задание 29" и выведите результат на экран.

const buttonTwentyNine = document.querySelector(".b-29");
const resultTwentyNine = document.querySelector("#resultTwentyNine");

const makeTwentyNine = () => {
  const sqrtNum = Math.sqrt(16);
  resultTwentyNine.textContent = sqrtNum;
};

buttonTwentyNine.addEventListener("click", makeTwentyNine);

//Задание 30
//Получите квадратный корень из числа 25 с помощью метода Math.sqrt(). Добавьте слушатель события на кнопку "Задание 30" и выведите результат на экран.

const buttonThirty = document.querySelector(".b-30");
const resultThirty = document.querySelector("#resultThirty");

const makeThirty = () => {
  const sqrtNum = Math.sqrt(25);
  resultThirty.textContent = sqrtNum;
};

buttonThirty.addEventListener("click", makeThirty);
