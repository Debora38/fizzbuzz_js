describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  it("should print fizz if num is divisible by 3", function() {
    expect(fizzbuzz.checks_fizzbuzz(3)).toBe("fizz");
    expect(fizzbuzz.checks_fizzbuzz(9)).toBe("fizz");
    expect(fizzbuzz.checks_fizzbuzz(36)).toBe("fizz");
    expect(fizzbuzz.checks_fizzbuzz(93)).toBe("fizz");
  });

  it("should check num is divisible by 5", function() {
    expect(fizzbuzz.checks_fizzbuzz(5)).toBe("buzz");
    expect(fizzbuzz.checks_fizzbuzz(40)).toBe("buzz");
    expect(fizzbuzz.checks_fizzbuzz(95)).toBe("buzz");
    expect(fizzbuzz.checks_fizzbuzz(35)).toBe("buzz");
  });

  it("should check num is divisible by 15", function() {
    expect(fizzbuzz.checks_fizzbuzz(15)).toBe("fizzbuzz");
    expect(fizzbuzz.checks_fizzbuzz(45)).toBe("fizzbuzz");
    expect(fizzbuzz.checks_fizzbuzz(90)).toBe("fizzbuzz");
  });

  it("should check another num and return it", function() {
    expect(fizzbuzz.checks_fizzbuzz(97)).toBe(97);
    expect(fizzbuzz.checks_fizzbuzz(37)).toBe(37);
    expect(fizzbuzz.checks_fizzbuzz(8)).toBe(8);
    expect(fizzbuzz.checks_fizzbuzz(44)).toBe(44);
  });
});
