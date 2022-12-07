import add from '../../utils/add';

test('Test the reducer addition', () => {
  expect([1, 2, 3, 4, 5].reduce(add)).toBe(15);
});

export {};
