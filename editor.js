chrome.storage.local.get(["JSONExtens1ondata"], (res) => {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  const themeOptions = {
    dark: "vs-dark",
    light: "vs-light",
  };

  var editorTheme = "";

  if (darkThemeMq.matches) {
    editorTheme = themeOptions["dark"];
  } else {
    editorTheme = themeOptions["light"];
  }

  // TODO: Find a way to apply the new theme.
  //       One of the most naive ways is to just reload the tab
  darkThemeMq.addEventListener("change", (e) => {
    if (e.matches) {
      editorTheme = themeOptions["dark"];
    } else {
      editorTheme = themeOptions["light"];
    }
  });

  require.config({ paths: { vs: "monaco/min/vs" } });
  require(["vs/editor/editor.main"], function () {
    var editor = monaco.editor.create(document.getElementById("container"), {
      value: JSON.stringify(res.JSONExtens1ondata, null, "\t"),
      language: "json",
      readOnly: true,
      theme: editorTheme,
      scrollBeyondLastLine: true,
      fontSize: 16,
    });
    window.addEventListener("resize", function () {
      editor.layout();
    });
  });
});
