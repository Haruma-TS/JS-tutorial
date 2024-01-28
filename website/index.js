function generatePassword(
  passwordLength,
  includeUpperCase,
  includeLowerCase,
  includeNumbers,
  includeSymbols
) {
  const upperCaseChars = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
  const lowerCaseChars = upperCaseChars.toLowerCase();
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_-=";

  let allowedChars = "";
  let password = "";
  allowedChars += includeUpperCase ? upperCaseChars : "";
  allowedChars += includeLowerCase ? lowerCaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (passwordLength <= 0) {
    return "(password length must be at least 1)";
  }

  if (allowedChars.length === 0) {
    return "(At least 1 set of characters needs to be selected)";
  }
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}
const passwordLength = 12;
const includeUpperCase = true;
const includeLowerCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeUpperCase,
  includeLowerCase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated password: ${password}`);
