function toNum(expr) {
  let i = 0;

  function skipSpaces() {
    while (expr[i] === " ") i++;
  }

  function parseNumber() {
    skipSpaces();
    let start = i;
    while (/[0-9]/.test(expr[i])) i++;
    return parseInt(expr.slice(start, i));
  }

  function parseFactor() {
    skipSpaces();

    if (expr[i] === "(") {
      i++;
      let val = parseExpression();
      skipSpaces();
      i++;
      return val;
    }

    if (expr.startsWith("Sqrt", i)) {
      i += 4;
      skipSpaces();
      i++;
      let val = parseExpression();
      i++;
      return Math.sqrt(val);
    }

    if (expr.startsWith("Pow", i)) {
      i += 3;
      skipSpaces();
      i++;
      let a = parseExpression();
      skipSpaces();
      i++;
      let b = parseExpression();
      i++;
      return Math.pow(a, b);
    }

    return parseNumber();
  }

  function parseTerm() {
    let val = parseFactor();
    while (true) {
      skipSpaces();
      if (expr[i] === "*") {
        i++;
        val *= parseFactor();
      } else if (expr[i] === "/") {
        i++;
        val /= parseFactor();
      } else {
        break;
      }
    }
    return val;
  }

  function parseExpression() {
    let val = parseTerm();
    while (true) {
      skipSpaces();
      if (expr[i] === "+") {
        i++;
        val += parseTerm();
      } else if (expr[i] === "-") {
        i++;
        val -= parseTerm();
      } else {
        break;
      }
    }
    return val;
  }

  let result = parseExpression();
  result = Math.trunc(result);

  return Object.is(result, -0) ? 0 : result;
}