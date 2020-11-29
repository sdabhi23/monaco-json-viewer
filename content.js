/*jshint eqeqeq:true, forin:true, strict:true */
/*global chrome, console */
(() => {

    "use strict";

    const loadJsonViewer = () => {

        // First, check if it's a PRE and exit if not

        var bodyChildren = document.body.childNodes;
        var pre = bodyChildren[0];
        console.log("ready")
        if (bodyChildren.length === 1 || pre.tagName === 'PRE') {
            // This is a 'plain text' page (just a body with one PRE child).
            // It might be JSON/JSONP, or just some other kind of plain text (eg CSS).

            // Hide the PRE immediately (until we know what to do, to prevent FOUC)
            pre.style.display = "none";
            var isJSON = true;

            try {
                const JSONdata = JSON.parse(pre.innerText);
                console.log(JSONdata);
                chrome.storage.local.set({"JSONExtens1ondata": JSONdata}, (trial) => console.log(trial));
            } catch (error) {
                isJSON = false;
                pre.style.display = "initial";
                console.log(error);
            }

            if (isJSON) {

                // var demo = [{ "id": "1", "username": "Monserrate33", "name": "Alexandre Haag" }, { "id": "2", "username": "Dejon_Torp", "name": "Alessandra Wuckert" }, { "id": "3", "username": "Adam.Wuckert53", "name": "Casimer Blick" }, { "id": "4", "username": "Ashlynn.Collier", "name": "Jacklyn Haag" }, { "id": "5", "username": "Dawson83", "name": "Stuart Nitzsche" }, { "id": "6", "username": "Orie69", "name": "Jedidiah Brekke Sr." }, { "id": "7", "username": "Candido.Moen92", "name": "Katelynn Davis" }, { "id": "8", "username": "Louie_Kris", "name": "Ilene Rogahn" }, { "id": "9", "username": "Antonette_Quigley81", "name": "Madelynn Marvin" }, { "id": "10", "username": "Adrain.Hyatt26", "name": "Garfield Pouros" }, { "id": "11", "username": "Julia_Lang", "name": "Ila Murazik" }, { "id": "12", "username": "Matteo_Will51", "name": "Mrs. Edyth Medhurst" }, { "id": "13", "username": "Immanuel68", "name": "Kristofer Quitzon" }, { "id": "14", "username": "Makenna38", "name": "Murl Crist" }, { "id": "15", "username": "Lonny_Satterfield14", "name": "Freddie Watsica" }, { "id": "16", "username": "Loren.Windler45", "name": "Denis Upton" }, { "id": "17", "username": "Judy98", "name": "Dr. Alden Rice" }, { "id": "18", "username": "Ariel49", "name": "Gussie Pollich" }, { "id": "19", "username": "Antone70", "name": "Conner Crona" }, { "id": "20", "username": "Marcus15", "name": "Kailyn Cummerata" }, { "id": "21", "username": "Dylan.Fay", "name": "Nola Morar" }, { "id": "22", "username": "Jovan0", "name": "Mr. Emma McDermott" }, { "id": "23", "username": "Werner21", "name": "Evangeline Hyatt" }, { "id": "24", "username": "Rosemary_Schultz", "name": "Marcelle Erdman" }, { "id": "25", "username": "Uriah_Stamm", "name": "Ophelia Bradtke" }, { "id": "26", "username": "Ansley35", "name": "Elfrieda Cole" }, { "id": "27", "username": "Derrick.OHara58", "name": "Kendall Gorczany" }, { "id": "28", "username": "Faustino75", "name": "Dorothea Armstrong" }]

                var editor_node = document.createElement('iframe');
                editor_node.setAttribute("src", chrome.runtime.getURL("editor.html"));
                editor_node.setAttribute("style", "border: 0px none; width: 100vw; height: 100vh;");

                document.body.style.margin = "0px";
                document.body.style.padding = "0px";
                document.body.style.overflow = "hidden";
                document.body.appendChild(editor_node);

                console.log("editor loaded!");
            }
        }

    }

    document.addEventListener("DOMContentLoaded", loadJsonViewer, false);

})();