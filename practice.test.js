import { capitalize, reverse, calculator, caesarCipher, analyzeArray } from "./practice";

test("capitalizes first letter", () => {
  expect(capitalize("string")).toBe("String");
});
test("capitalizes first letter", () => {
  expect(capitalize("moby")).toBe("Moby");
});

test("reverses string", () => {
  expect(reverse("string")).toBe("gnirts");
});
test("reverses string", () => {
  expect(reverse("Moby")).toBe("yboM");
});

test("calculator add", () => {
  expect(calculator.add(2, 7)).toBe(9);
});
test("calculator subtract", () => {
  expect(calculator.subtract(2, 7)).toBe(-5);
});
test("calculator divide", () => {
  expect(calculator.divide(7, 4)).toBeCloseTo(1.75);
});
test("calculator multiply", () => {
  expect(calculator.multiply(7, 4)).toBe(28);
});

test ("z becomes a", () => {
  expect(caesarCipher('xyz')).toBe('yza');
});
test ("keeping same case", () => {
  expect(caesarCipher('aBCd')).toBe('bCDe');
});
test ("punctuation stays same", () => {
  expect(caesarCipher('ab.cd')).toBe('bc.de');
})

test ('return info object from array', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});