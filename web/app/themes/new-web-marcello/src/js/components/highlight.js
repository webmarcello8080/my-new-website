import hljs from 'highlight.js';
document.querySelectorAll('pre.code-snipping').forEach(block => {
   // then highlight each
   hljs.highlightBlock(block);
});