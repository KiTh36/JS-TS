import { isStrongPassword } from './password';
import { sumPositive, filterEven } from './arrayUtils';
import { normalizeSentence, countWords } from './stringUtils';
import { celsiusToFahrenheit,fahrenheitToCelsius } from './temperature';
// --- Завдання 1 ---
console.log('--- Temperature ---');
[0, 20, 100].forEach(c => console.log(`${c}°C = ${celsiusToFahrenheit(c)}°F`));
[32, 68, 212].forEach(f => console.log(`${f}°F = ${fahrenheitToCelsius(f)}°C`));

// --- Завдання 2 ---
console.log('--- Passwords ---');
['abc', 'Password1', '12345678', 'StrongPass9', 'weakpass'].forEach(p => {
    console.log(`${p} -> ${isStrongPassword(p)}`);
});

// --- Завдання 3 ---
console.log('--- Array Utils ---');
const numbers = [3, -1, 4, 0, 10, -5];
console.log('Array:', numbers);
console.log('Sum positive:', sumPositive(numbers));
console.log('Even numbers:', filterEven(numbers));

// --- Завдання 5 ---
console.log('--- String Utils ---');
const text = '  Hello   world from TypeScript   ';
console.log('Normalized:', normalizeSentence(text));
console.log('Word count:', countWords(text));


