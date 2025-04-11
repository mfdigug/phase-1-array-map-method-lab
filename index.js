const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  const casedTutorials = tutorials.map(function (tutorial) {
  const parts = tutorial.split(" ");
  const capitalizedParts = parts.map(function (part) {
    return part.charAt(0).toUpperCase() + part.slice(1);
  });
  return capitalizedParts.join(" ");
});
return casedTutorials
};
