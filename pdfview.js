try {
    // Get PDF link
    inside_span = document.getElementsByClassName("attachments-file-name")[0]
        .innerHTML;

    start = inside_span.indexOf('<a href="') + 9;
    end = inside_span.indexOf(">") - 28;
    link = inside_span.slice(start, end);

    if(link.slice(-5) === ".java") {
        console.log("Link: " + link);
        fetchProm = fetch(link, {method: "GET"});
        fetchProm
            .then(x => x.text())
            .then((response) => {
                console.log(response);
                var javaFrame = document.createElement('iframe');
                tag = document.querySelector("#content-wrapper");
                width = tag.clientWidth;
                height = tag.clientHeight;
                left = tag.offsetLeft;
                top = tag.offsetTop;
                var textFile = null,
                makeTextFile = function (text) {
                    var data = new Blob([text], {type: 'text/plain'});
                    if (textFile !== null) {
                    window.URL.revokeObjectURL(textFile);
                    }
                    textFile = window.URL.createObjectURL(data);
                    return textFile;
                };
                textFile = makeTextFile(response);
                // srcdoc would remove all formatting and create weird html tags - bad option
                javaFrame.setAttribute("src", textFile);
                javaFrame.setAttribute("border", "5pt");
                javaFrame.setAttribute("left", left);
                javaFrame.setAttribute("top", top);
                javaFrame.setAttribute("position", "absolute");
                javaFrame.setAttribute("width", width); 
                javaFrame.setAttribute("height", "650px");
                javaFrame.setAttribute("scrolling", "yes");
                javaFrame.id = "content-display"
                javaFrame.allowFullscreen = "yes";
                document
                    .getElementById('content-wrapper')
                    .prepend(javaFrame);
            })
        //window.open(link, '_blank');
    }
    if (link.slice(-4) != ".pdf" && link.slice(-5) != ".java") {
        throw Error;
    }

    // Change iframe
    document
        .getElementsByClassName("docviewer-iframe")[0]
        .setAttribute("src", link);

    // Change "view" button
    view_button = document
        .getElementsByClassName("view-file-popup ")[0]
        .setAttribute("href", link);
} catch (err) {
    console.log("Error while change the file view: " + err);
}