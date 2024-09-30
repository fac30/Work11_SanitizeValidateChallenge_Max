function sanitize(content) {
    return content.replace('<', '&lt').replace('>', '&gt');
}

console.log(sanitize('<script>alert("hacked")</script>'));