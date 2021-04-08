import hljs from 'highlight.js';
import php from 'highlight.js/lib/languages/php';
hljs.registerLanguage('php', php);

document.querySelectorAll('pre.code-snipping').forEach(block => {
   // then highlight each
   hljs.highlightBlock(block);
});
