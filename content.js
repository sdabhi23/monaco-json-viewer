/*jshint eqeqeq:true, forin:true, strict:true */
/*global chrome, console */
(() => {
  "use strict";

  const loadJsonViewer = () => {
    // First, check if it's a PRE and exit if not
    var bodyChildren = document.body.childNodes;
    var pre = bodyChildren[0];
    console.log("ready");
    if (bodyChildren.length === 1 || pre.tagName === "PRE") {
      // This is a 'plain text' page (just a body with one PRE child).
      // It might be JSON/JSONP, or just some other kind of plain text (eg CSS).

      // Hide the PRE immediately (until we know what to do, to prevent FOUC)
      pre.style.display = "none";
      var isJSON = true;

      try {
        const JSONdata = JSON.parse(pre.innerText);
        chrome.storage.local.set({ JSONExtens1ondata: JSONdata });
      } catch (error) {
        isJSON = false;
        pre.style.display = "initial";
      }

      if (isJSON) {
        var editor_node = document.createElement("iframe");
        editor_node.setAttribute("src", chrome.runtime.getURL("editor.html"));
        editor_node.setAttribute(
          "style",
          "border: 0px none; width: 100vw; height: 100vh;"
        );

        document.body.style.margin = "0px";
        document.body.style.padding = "0px";
        document.body.style.overflow = "hidden";
        document.body.appendChild(editor_node);

        console.log("editor loaded!");
      }
    }
  };

  document.addEventListener("DOMContentLoaded", loadJsonViewer, false);
})();
