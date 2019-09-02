import stringHelper from './string-helper';

const { formatNumber } = stringHelper

describe('string helper', () => {
  test('format without comma', () => {
    const result1 = formatNumber(100.99);
    const result2 = formatNumber(999);
    expect(result1).toEqual('100.99');
    expect(result2).toEqual('999');
  });

  test('format with comma', () => {
    const result1 = formatNumber(123456.78);
    const result2 = formatNumber(123456789.01);
    expect(result1).toEqual('123,456.78');
    expect(result2).toEqual('123,456,789.01');
  });
});
