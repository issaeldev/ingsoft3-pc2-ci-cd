const sum = require('./sum'); test('suma 4 + 6 = 10', () => { expect(sum(4, 6)).toBe(10); }); test('suma -3 + 8 = 5', () => { expect(sum(-3, 8)).toBe(5); });
