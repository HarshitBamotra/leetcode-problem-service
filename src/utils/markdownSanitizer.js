const marked = require("marked");
const sanitizeHtml = require("sanitize-html");
const turndown = require("turndown");

function sanitizeMarkdown(markdownContent){

    const convertedHtml = marked.parse(markdownContent);

    const sanitizedHtml = sanitizeHtml(convertedHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
    });

    const turndownService = new turndown();
    return turndownService.turndown(sanitizedHtml);
}

module.exports = sanitizeMarkdown;