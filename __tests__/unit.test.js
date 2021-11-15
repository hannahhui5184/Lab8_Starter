// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// module.exports = { isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor };

// Tests for isPhoneNumber
test('Checks (909)943-2321 is a valid phone number', () => {
  expect(functions.isPhoneNumber('(909)943-2321')).toBe(true);
});

test('Checks (909) 943-2321 is a valid phone number', () => {
  expect(functions.isPhoneNumber('(909) 943-2321')).toBe(true);
});

test('Checks (909)9432321 is not a valid phone number', () => {
  expect(functions.isPhoneNumber('(909)9432321')).toBe(false);
});

test('Checks 8881234567 is not a valid phone number', () => {
  expect(functions.isPhoneNumber('8881234567')).toBe(false);
});

// Tests for isEmail
test('Checks someone@gmail.com is a valid email', () => {
  expect(functions.isEmail('someone@gmail.com')).toBe(true);
});

test('Checks f@gh.co is a valid email', () => {
  expect(functions.isEmail('f@gh.co')).toBe(true);
});

test('Checks fgh.co is not a valid email', () => {
  expect(functions.isEmail('fgh.co')).toBe(false);
});

test('Checks f@ghco is not a valid email', () => {
  expect(functions.isEmail('f@ghco')).toBe(false);
});

// Tests for isStrongPassword
test('Checks helloWorld6452 is a strong password', () => {
  expect(functions.isStrongPassword('helloWorld6452')).toBe(true);
});

test('Checks h_EelloWorld is a strong password', () => {
  expect(functions.isStrongPassword('h_EelloWorld')).toBe(true);
});

test('Checks !!helloWorld62 is not a strong password', () => {
  expect(functions.isStrongPassword('!!helloWorld62')).toBe(false);
});

test('Checks fs is not a strong password', () => {
  expect(functions.isStrongPassword('fs')).toBe(false);
});

// Tests for isDate
test('Checks 1/1/3003 is a valid date', () => {
  expect(functions.isDate('1/1/3003')).toBe(true);
});

test('Checks 21/21/0000 is a valid date', () => {
  expect(functions.isDate('21/21/0000')).toBe(true);
});

test('Checks 1/1/200 is not a valid date', () => {
  expect(functions.isDate('1/1/200')).toBe(false);
});

test('Checks 11/200 is not a valid date', () => {
  expect(functions.isDate('11/200')).toBe(false);
});

// Tests for isHexColor
test('Checks FFFFFF is a valid hex color', () => {
  expect(functions.isHexColor('FFFFFF')).toBe(true);
});

test('Checks #ABCD41 is a valid hex color', () => {
  expect(functions.isHexColor('#ABCD41')).toBe(true);
});

test('Checks #CD41 is not a valid hex color', () => {
  expect(functions.isHexColor('#CD41')).toBe(false);
});

test('Checks #ABSD41 is not a valid hex color', () => {
  expect(functions.isHexColor('#ABSD41')).toBe(false);
});
