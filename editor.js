chrome.storage.local.get(["JSONExtens1ondata"], (res) => {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  const themeOptions = {
    dark: "vs-dark",
    light: "vs-light",
  };

  var editorTheme = "";

  if (darkThemeMq.matches) {
    console.log("Initial: Dark theme set");
    editorTheme = themeOptions["dark"];
  } else {
    console.log("Initial: Light theme set");
    editorTheme = themeOptions["light"];
  }

  // TODO: Find a way to apply the new theme.
  //       One of the most naive ways is to just reload the tab
  darkThemeMq.addEventListener("change", (e) => {
    if (e.matches) {
      console.log("Change: Dark theme set");
      editorTheme = themeOptions["dark"];
    } else {
      console.log("Change: Light theme set");
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
