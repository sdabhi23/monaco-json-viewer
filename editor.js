chrome.storage.local.get(["JSONExtens1ondata"], (res) => {
    require.config({ paths: { 'vs': 'monaco/min/vs' } });
    require(['vs/editor/editor.main'], function () {
        var editor = monaco.editor.create(document.getElementById('container'), {
            value: JSON.stringify(res.JSONExtens1ondata, null, "\t"),
            language: 'json',
            readOnly: true,
            theme: 'vs-dark',
            scrollBeyondLastLine: false
        });
        window.addEventListener("resize", function () {
            editor.layout();
        });
    });
})
