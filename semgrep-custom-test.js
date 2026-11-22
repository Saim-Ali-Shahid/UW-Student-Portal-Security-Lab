// Test file for semgrep-custom.yml (rule: no-eval)
// Only the line marked BAD should be flagged.

const userExpression = "2 + 2";

// BAD: runs text as code
const bad = eval(userExpression);

// SAFE: parses data only, never runs code
const safe = JSON.parse('{"total": 4}');
