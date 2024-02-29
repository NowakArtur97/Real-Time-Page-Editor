document.addEventListener("DOMContentLoaded", () => {
  const getCodeFromEditor = (type) =>
    document.getElementById(`editor__${type}`);

  const outputElement = document.querySelector(".output__iframe");
  const htmlCodeElement = getCodeFromEditor("html");
  const cssCodeElement = getCodeFromEditor("css");
  const jsCodeElement = getCodeFromEditor("js");

  function loadCodeToEditor() {
    outputElement.contentDocument.body.innerHTML =
      htmlCodeElement.value + "<style>" + cssCodeElement.value + "</style>";

    outputElement.contentWindow.eval(jsCodeElement.value);
  }

  document
    .querySelectorAll("textarea")
    .forEach((textarea) =>
      textarea.addEventListener("input", loadCodeToEditor)
    );
});
