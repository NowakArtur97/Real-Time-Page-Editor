const API_GATEWAY = "API_GATEWAY_URL";
const API = `${API_GATEWAY}/real-time-page-editor-deployment`;

document.addEventListener("DOMContentLoaded", () => {
  function deployFiles() {
    const getCodeFromEditor = (type) =>
      document.getElementById(`editor__${type}`).value.replace(/[\r\n]/gm, "");

    const html = getCodeFromEditor("html");
    const css = getCodeFromEditor("css");
    const js = getCodeFromEditor("js");

    const body = JSON.stringify({
      html,
      css,
      js,
    });
    console.log(API);
    console.log(body);
    fetch(API, {
      method: "POST",
      body,
    })
      .then((response) => response.json())
      .then((body) => console.log(body))
      .catch((error) => console.error(error.toString()));
  }

  document
    .querySelector(".deploy_button")
    .addEventListener("click", deployFiles);
});
