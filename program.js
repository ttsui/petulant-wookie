exports.startsWithDate = function(input) {
  return input.match(/^\d\d [A-Z]{3} /) !== null;
};

exports.insertBeforeLastTwoWords = function(line, text) {
  var result;
  var splitLines = line.split(' ');
  var lineBeforeLastTwoWords = splitLines.slice(0, -2)

  lineBeforeLastTwoWords.push(text);

  result = lineBeforeLastTwoWords.concat(splitLines.slice(-2));

  return result.join(' ');
};

exports.combineDateLinesWithNonDateLine = function(lines) {
  var i;
  var result = [];

  for (i=0; i < lines.length; i++) {
    if (exports.startsWithDate(lines[i])) {
      result.push(lines[i]);
    } else {
      preceedingLine = result.pop();

      if (preceedingLine !== undefined) {
        result.push(exports.insertBeforeLastTwoWords(preceedingLine, lines[i]));
      }
    }
  }

  return result;
};

exports.groupIntoColumns = function(line) {
  var result;
  var splitLine = line.split(' ');

  var date = splitLine.slice(0, 2).join(' ');
  var description = splitLine.slice(2, -2).join(' ');
  var transactionAmount = splitLine[splitLine.length - 2];
  var balance = splitLine[splitLine.length - 1];

  result = [].concat(date, description, transactionAmount, balance);

  return result.join('\t');
}
