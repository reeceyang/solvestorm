function tojQueryObject(anExam) {
  // Make a wrapper for the exam
  var $examWrapper = $("<div>", {
    class: "exam-wrapper"
  });
  // Add the exam's name to examWrapper
  $examWrapper.append($("<h1>", {
    class: "exam-name"
  }).append(anExam.name));
  // Add the exam's author to examWrapper
  $examWrapper.append($("<h3>", {
    class: "exam-author"
  }).append("By " + anExam.author));

  // Add problems to examWrapper
  var problems = anExam.problems;
  for (i in problems) {
    problem = problems[i];
    // Make a wrapper for the problem
    var $problemWrapper = $("<div>", {
      class: "problem-wrapper",
      id: problem.id
    })
    // Add problem number
    $problemWrapper.append($("<h2>", {
      class: "problem-number"
    }).append("Problem " + (parseInt(i) + 1) + "."));
    // Add problem text
    $problemWrapper.append($("<p>", {
      class: "problem-text"
    }).append(problem.text));
    // Add choices differently based on problem type
    if (problem.type == "single-choice") {
      var choices = problem.choices;
      // Make a wrapper for the choices
      var $choiceWrapper = $("<div>", {
        class: "choice-wrapper"
      })
      for (j in choices) {
        choiceText = choices[j];
        // Place each choice in a paragraph element with a radio button
        $choice = $("<p>", {
          class: "choice"
        });
        $choice.append($("<input>", {
          class: "choice-radiobutton",
          type: "radio",
          name: problem.id
        }))
        // Add choice text to choice
        $choice.append(choiceText);
        // Add the choice to the choice wrapper
        $choiceWrapper.append($choice);
      }
      // Add the choice wrapper to the problem wrapper
      $problemWrapper.append($choiceWrapper);
    } else {
      // The problem type doesn't match, insert an error message
      $problemWrapper.append($("<p>").append("Error: Problem type corrupted"));
    }
    // Add the problem wrapper to the exam wrapper
    $examWrapper.append($problemWrapper);
  }
  // Add a submit button
  $examWrapper.append($("<button>").append("Submit").click(submit))
  return $examWrapper;
}

function submit() {

}
