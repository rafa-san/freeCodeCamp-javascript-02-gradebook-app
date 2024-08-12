// Step 1
function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  let average = sum / scores.length;
  return average;
}

//console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
//console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));


// Step 2
function getGrade(score) {
  let grade;
  if (score === 100) {
    grade = "A++";
  } else if (score >= 90 && score <= 99) {
    grade = "A";
  } else if (score >= 80 && score <= 89) {
    grade = "B";
  } else if (score >= 70 && score <= 79) {
    grade = "C";
  } else if (score >= 60 && score <= 69) {
    grade = "D";
  } else {
    grade = "F";
  }
  return grade;
}

//console.log(getGrade(90));
//console.log(getGrade(82));
//console.log(getGrade(56));




// Step 3
function hasPassingGrade(score) {
  if (getGrade(score) != "F") {
    return true;
  } else {
    return false;
  }
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));



// Step 4

/* 
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  if (hasPassingGrade(studentScore) === true) {
    return "Class average: " + getAverage(totalScores) + ". " + "Your grade: " + getGrade(studentScore) + ". " + "You passed the course.";
  } else {
    return "Class average: " + getAverage(totalScores) + ". " + "Your grade: " + getGrade(studentScore) + ". " + "You failed the course.";
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 77));


*/