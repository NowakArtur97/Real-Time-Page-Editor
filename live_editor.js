document.addEventListener("DOMContentLoaded", () => {
  const getCodeFromEditor = (type) =>
    document.getElementById(`editor__${type}`);

  const outputElement = document.querySelector(".output__iframe");
  const htmlCodeElement = getCodeFromEditor("html");
  const cssCodeElement = getCodeFromEditor("css");
  const jsCodeElement = getCodeFromEditor("js");

  const deployButtonElement = document.querySelector(".deploy_button");

  function loadCodeToEditor() {
    const htmlCode = htmlCodeElement.value;
    const cssCode = cssCodeElement.value;
    const jsCode = jsCodeElement.value;

    if (htmlCode?.length > 0 || cssCode?.length > 0 || jsCode?.length) {
      deployButtonElement.classList.add("deploy_button--visible");
    } else {
      deployButtonElement.classList.remove("deploy_button--visible");
    }

    outputElement.contentDocument.body.innerHTML =
      htmlCode + "<style>" + cssCode + "</style>";

    outputElement.contentWindow.eval(jsCode);
  }

  document
    .querySelectorAll("textarea")
    .forEach((textarea) =>
      textarea.addEventListener("input", loadCodeToEditor)
    );
});
