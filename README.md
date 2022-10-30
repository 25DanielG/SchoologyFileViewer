# Schoology File Viewer

## PDF view retrieved from Harker Hackers (webiste below); Java view custom made

Website: (https://harker-hackers.github.io/schoology-extension)(https://github.com/25DanielG/SchoologyFileViewer.git).

## Developing

### Extension files

These files are directly part of the installed chrome extension.

-   `pdfview.js` changes `/course/*/materials/gp/*` to use chrome's PDF viewer and display java files
-   `pdfHeaderRemover.js` changes Schoology-hosted PDF's headers and mimetypes.
-   `manifest.json` contains the configuration, permissions, and scripts of the extension.
-   `background.js` is the background script of this extenison.