chrome.storage.local.get(["JSONExtens1ondata"], (res) => {
    require.config({ paths: { 'vs': 'monaco/min/vs' } });
    require(['vs/editor/editor.main'], function () {
        monaco.editor.setTheme('vs-dark');
        var editor = monaco.editor.create(document.getElementById('container'), {
            value: JSON.stringify(res.JSONExtens1ondata, null, "\t"),
            language: 'json',
            readOnly: true
        });
        window.addEventListener("resize", function () {
            editor.layout();
        });
    });
})
