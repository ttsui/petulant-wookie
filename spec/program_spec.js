var program = require('../program');
var startsWithDate = program.startsWithDate;
var insertBeforeLastTwoWords = program.insertBeforeLastTwoWords;
var combineDateLinesWithNonDateLine = program.combineDateLinesWithNonDateLine;
var groupIntoColumns = program.groupIntoColumns;

describe('program', function() {
  it('distinguishs lines start with date format dd mmm', function() {
    expect(startsWithDate('01 MAY ABC')).toBe(true);
    expect(startsWithDate('ABC 01 MAY')).toBe(false);
    expect(startsWithDate('ABC')).toBe(false);
    expect(startsWithDate(' 01 MAY ABC')).toBe(false);
    expect(startsWithDate('01 MAYABC')).toBe(false);
  });

  it('inserts text before last two words of given line', function() {
    expect(insertBeforeLastTwoWords('one two three five six', 'four')).toEqual('one two three four five six'); 
    expect(insertBeforeLastTwoWords('two three', 'one')).toEqual('one two three'); 
    expect(insertBeforeLastTwoWords('two', 'one')).toEqual('one two'); 
  });

  it('inserts lines not starting with date into preceeding line', function() {
    expect(combineDateLinesWithNonDateLine(['01 MAY ABC 1 2',
                                            'DEF']))
      .toEqual(['01 MAY ABC DEF 1 2']);
    expect(combineDateLinesWithNonDateLine(['01 MAY ABC 1 2',
                                            'DEF',
                                            '02 MAY ABC 1 2']))
      .toEqual(['01 MAY ABC DEF 1 2',
                '02 MAY ABC 1 2']);
    expect(combineDateLinesWithNonDateLine(['01 MAY ABC 1 2',
                                            '02 MAY ABC 1 2',
                                            'DEF']))
      .toEqual(['01 MAY ABC 1 2',
                '02 MAY ABC DEF 1 2']);
    expect(combineDateLinesWithNonDateLine(['DEF',
                                            '01 MAY ABC 1 2']))
      .toEqual(['01 MAY ABC 1 2']);
  });

  it('group into four columns separated with tabs', function() {
    expect(groupIntoColumns('01 MAY ABC DEF 1 2')).toEqual('01 MAY\tABC DEF\t1\t2');
  });

});
