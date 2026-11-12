jest.autoMockOff();
import { createFormatIcu } from './createFormatIcu';

describe('format icu', () => {
  it('formats simple string', () => {
    const formatter = createFormatIcu();
    const result = formatter.format({
      translation: 'result is {number, number}',
      params: { number: 42000 },
      language: 'en',
    });
    expect(result).toEqual('result is 42,000');
  });

  it('replaces a function argument with its result only', () => {
    const formatter = createFormatIcu();
    const element = { type: 'br' };
    const br = () => element;
    const result = formatter.format({
      translation: 'first{br}second{br}third',
      params: { br },
      language: 'en',
    });
    expect(result).toEqual(['first', element, 'second', element, 'third']);
  });

  it('fixes invalid locale', () => {
    const formatter = createFormatIcu() as any;
    expect(formatter.getLocale('en_GB')).toEqual('en-GB');
    expect(formatter.getLocale('en_GB-nonsenceeeee')).toEqual('en-GB');
    expect(formatter.getLocale('cs CZ')).toEqual('cs-CZ');
  });
});
