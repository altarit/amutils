function isLuhnValid(num) {
  const str = String(num);
  const ints = new Array(str.length);
  for (let i = 0; i < str.length; i++) {
    ints[i] = Number.parseInt(str.substring(i, i + 1), 0);
  }
  for (let i = ints.length - 2; i >= 0; i -= 2) {
    let j = ints[i] * 2;
    if (j > 9) {
      j = j % 10 + 1;
    }
    ints[i] = j;
  }
  let sum = 0;
  for (let i = 0; i < ints.length; i++) {
    sum += ints[i];
  }
  if (sum % 10 === 0) {
    return true; // valid number
  } else {
    return false; // invalid number
  }
}

function addCheckDigit(number) {
  for (let k = 0; k < 10; k++) {
    if (isLuhnValid(number + k)) {
      return number + k;
    }
  }
}

function addLeadingZeros(num, size) {
  let str = String(num);
  while (str.length < size) {
    str = '0' + str;
  }
  return str;
}

export function generateImsi(max = 1, first, additionalSeq = 0) {
  let constPart;
  let startSeq;
  if (!first || first.length < 7) {
    constPart = '7400002';
    startSeq = 0;
  } else {
    constPart = first.substr(0, 7);
    let temps = first.substr(7, 7);
    while (temps.length < 8) {
      temps += '0';
    }
    startSeq = Number.parseInt(temps, 0);
  }
  const result = [];
  for (let i = 0; i < max; i++) {
    result.push(constPart + addLeadingZeros(startSeq + i + additionalSeq, 8));
  }
  return result.join('\n');
}

export function generateIccid(max = 1, first, additionalSeq = 0) {
  let constPart;
  let startSeq;
  if (!first || first.length < 11) {
    constPart = '89593000015';
    startSeq = 0;
  } else {
    constPart = first.substr(0, 11);
    let temps = first.substr(11, 7);
    while (temps.length < 7) {
      temps += '0';
    }
    startSeq = Number.parseInt(temps, 0);
  }
  const result = [];
  console.log('generateIccid: ' + constPart + ' ' + startSeq + ' ' + additionalSeq);
  for (let i = 0; i < max; i++) {
    result.push(addCheckDigit(constPart + addLeadingZeros(startSeq + i + additionalSeq, 7)));
    console.log(constPart + addLeadingZeros(startSeq + i, 7));
  }
  return result.join('\n');
}

export function generateImei(max = 1, first) {
  let constPart;
  let startSeq;
  if (!first || first.length < 7) {
    constPart = '4200001';
    startSeq = Math.floor(Math.random() * 9000000);
  } else {
    constPart = first.substr(0, 7);
    let temps = first.substr(7, 7);
    while (temps.length < 7) {
      temps += '0';
    }
    startSeq = Number.parseInt(temps, 0);
  }
  const result = [];
  console.log('generateImei: ' + constPart + ' ' + startSeq);
  for (let i = 0; i < max; i++) {
    result.push(addCheckDigit(constPart + addLeadingZeros(startSeq + i, 7)));
    console.log(constPart + addLeadingZeros(startSeq + i, 7));
  }
  return result.join('\n');
}

export function generateSimOut(max = 1, firstImsi, firstIccid) {
  console.log('Generating ' + max + ' rows...');
  const buf = [];
  for (let i = 0; i < max; i++) {
    const row = [];
    const imsi = generateImsi(1, firstImsi, i);
    row.push(imsi);
    row.push(imsi);
    row.push(generateIccid(1, firstIccid, i));
    row.push('1234');
    row.push('12345678');
    row.push('4321');
    row.push('80808080');
    row.push('RANDOMTEXT001122');
    row.push('IDONTKNOWWHATTOWRITEHERE00112233');
    buf.push(row.join(' '));
  }

  return buf.join('\n');
}
