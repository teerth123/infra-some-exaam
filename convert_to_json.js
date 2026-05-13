const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'a.js');
const outputPath = path.join(__dirname, 'questions.json');

const raw = fs.readFileSync(inputPath, 'utf8');

// The file contains CSV-like rows where each field is quoted and separated by commas.
// We'll parse by scanning for quoted fields to be robust against commas inside quotes.

function parseQuotedCSV(text) {
  const rows = [];
  // Split into lines first, but some lines may be concatenated; so find all quoted-record sequences.
  // We'll use a simple state machine to extract quoted fields in sequence.
  const fields = [];
  let i = 0;
  const n = text.length;
  while (i < n) {
    // find next '"'
    while (i < n && text[i] !== '"') i++;
    if (i >= n) break;
    i++; // skip opening quote
    let field = '';
    while (i < n) {
      if (text[i] === '"') {
        // check for escaped quote by another quote (""), treat as one quote
        if (i + 1 < n && text[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        i++; // skip closing quote
        break;
      }
      field += text[i++];
    }
    fields.push(field);
  }

  // Now fields array contains all quoted fields in order.
  // Group into logical rows by finding sequences where the 6th field is a single-letter answer (A-D).
  let j = 0;
  while (j + 5 < fields.length) {
    const candidate = fields.slice(j, j + 6);
    const sixth = (candidate[5] || '').trim().toUpperCase();
    if (/^[ABCD]$/.test(sixth)) {
      const first = candidate[0].trim();
      if (!first || /^Question/i.test(first)) {
        // skip header-like or empty
      } else {
        rows.push(candidate);
      }
      j += 6;
      continue;
    }

    // If not aligned, try to shift by one until we find a valid answer letter or reach safe limit.
    let found = false;
    for (let shift = 1; shift < 6 && j + shift + 5 < fields.length; shift++) {
      const cand = fields.slice(j + shift, j + shift + 6);
      if (/^[ABCD]$/.test((cand[5] || '').trim().toUpperCase())) {
        j = j + shift;
        found = true;
        break;
      }
    }
    if (!found) {
      // Give up on this position and advance by 6 to avoid infinite loop
      j += 6;
    }
  }

  return rows;
}

const rows = parseQuotedCSV(raw);

const result = rows.map(r => {
  const [question, a, b, c, d, ans] = r;
  const answer = (ans || '').trim().toUpperCase();
  const options = { A: (a||'').trim(), B: (b||'').trim(), C: (c||'').trim(), D: (d||'').trim() };
  const answerText = options[answer] || null;
  return { question: question.trim(), options, answer, answerText };
});

fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
console.log(`Wrote ${result.length} questions to ${outputPath}`);
