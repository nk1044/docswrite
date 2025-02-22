import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const text = `# Welcome to GitHub-Style Markdown Editor
  
## Features
- **Bold Text**
- *Italic Text*
- [Links](https://github.com)
- \`Inline code\`

\`\`\`javascript
// Code block example
console.log("Hello, World!");
\`\`\`

### Tables:

| Name  | Age | Role |
|-------|-----|------|
| Alice | 25  | Developer |
| Bob   | 30  | Designer |

### Task Lists:
- [x] Completed task
- [ ] Pending task
- [ ] Another pending task

### Blockquotes:
> This is a blockquote
> With multiple lines

### Horizontal Rule:

---

### Images:
![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)`;


const MarkdownEditor = ({
  markdownText = `# Markdown Text Editor\n---`,
  title = "Markdown Editor",
}) => {
  const [edit, setEdit] = useState(false);
  const [markdown, setMarkdown] = useState(markdownText);
  const [Title, setTitle] = useState(title);
  const [saved, setSaved] = useState(true);

  return (
    <div className="grid grid-cols-1 h-full border p-3 border-neutral-950 rounded-2xl bg-neutral-950 text-neutral-300 font-sans">
      {/* Top Bar */}
      <div className="w-full bg-neutral-900 flex items-center rounded-2xl px-4 py-2 text-white z-10">
        <div className="flex items-center border rounded-2xl border-neutral-700 p-1 space-x-1">
          <button
            onClick={() => setEdit(true)}
            className={`px-3 py-1 rounded-xl font-semibold cursor-pointer transition-colors duration-200 focus:outline-none ${
              edit
                ? "bg-neutral-600 text-white border border-neutral-600"
                : "bg-transparent text-neutral-300 border border-neutral-600 hover:bg-neutral-700"
            }`}
          >
            Edit
          </button>
          <button
            onClick={() => setEdit(false)}
            className={`px-3 py-1 rounded-xl font-semibold cursor-pointer transition-colors duration-200 focus:outline-none ${
              !edit
                ? "bg-neutral-600 text-white border border-neutral-600"
                : "bg-transparent text-neutral-300 border border-neutral-600 hover:bg-neutral-700"
            }`}
          >
            Preview
          </button>
        </div>

        <h1 className="text-3xl font-medium w-full text-center">{Title}</h1>

        <div className="flex items-center space-x-1">
            <button
            onClick={() => setEdit(false)}
            disabled={saved}
            className={`px-3 py-1 rounded-xl text-green-300 font-semibold transition-colors 
              duration-200 focus:outline-none hover:border-green-300 ${
              !saved
                ? "bg-neutral-600 border cursor-pointer  border-neutral-600 "
                : "bg-transparent cursor-not-allowed text-white border border-neutral-600 "
            }`}
          >
            Save
          </button>
            <button
            onClick={() => setEdit(false)}
            className={`px-3 py-1 rounded-xl text-red-300 font-semibold transition-colors 
              duration-200 focus:outline-none hover:border-red-300 bg-transparent border 
              cursor-pointer  border-neutral-600`}
          >
            Delete
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full h-full pt-12">
        <div className="flex flex-col md:flex-row w-full h-full">
          {edit ? (
            <div className="w-full h-screen overflow-y-auto bg-transparent p-4 border-neutral-700">
              <textarea
                className="w-full h-full p-4 bg-transparent focus:outline-none resize-none font-mono text-base leading-relaxed"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                placeholder="Write your markdown here..."
                spellCheck="false"
              />
            </div>
          ) : (
            <div className="w-full h-full flex flex-col">
              <div className="w-full h-full overflow-y-auto bg-transparent p-4">
                <div className="markdown-body max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            style={{ ...oneLight, backgroundColor: "transparent" }}
                            language={match[1]}
                            PreTag="div"
                            customStyle={{ backgroundColor: "transparent" }}
                            lineProps={{ style: { backgroundColor: "transparent" } }}
                            className="rounded-md border !bg-neutral-800 !border-neutral-600 !mt-4 !mb-4"
                            showLineNumbers={true}
                            {...props}
                          >
                            {String(children).replace(/\n$/, "")}
                          </SyntaxHighlighter>
                        ) : (
                          <code className="bg-neutral-800 px-1.5 py-0.5 rounded-md text-red-600 font-mono text-sm" {...props}>
                            {children}
                          </code>
                        );
                      },
                      table({ node, ...props }) {
                        return (
                          <div className="overflow-x-auto my-4">
                            <table className="border-collapse border border-neutral-700 w-full text-base bg-neutral-900" {...props} />
                          </div>
                        );
                      },
                      th({ node, ...props }) {
                        return (
                          <th className="border border-neutral-700 px-4 py-2 text-left font-semibold bg-neutral-800" {...props} />
                        );
                      },
                      td({ node, ...props }) {
                        return <td className="border border-neutral-700 px-4 py-2" {...props} />;
                      },
                      blockquote({ node, ...props }) {
                        return (
                          <blockquote className="border-l-4 border-neutral-700 pl-4 py-1 text-neutral-400 my-4" {...props} />
                        );
                      },
                      hr({ node, ...props }) {
                        return <hr className="h-px my-6 bg-neutral-700 border-0" {...props} />;
                      },
                      img({ node, ...props }) {
                        return (
                          <img className="max-w-full h-auto rounded-md border border-neutral-700 my-4" {...props} />
                        );
                      },
                    }}
                  >
                    {markdown}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Custom Styles for Markdown Preview */}
      <style>{`
        .markdown-body {
          color: #d1d5db;
          line-height: 1.6;
          font-size: 1.125rem;
        }
        .markdown-body input[type="checkbox"] {
          margin-right: 0.5em;
          vertical-align: middle;
        }
        .markdown-body pre {
          background-color: #1e1e1e;
          border-radius: 6px;
          padding: 16px;
          overflow: auto;
        }
        .markdown-body img {
          max-width: 100%;
          box-sizing: content-box;
        }
        .markdown-body h1 { font-size: 2.25rem; }
        .markdown-body h2 { font-size: 1.875rem; }
        .markdown-body h3 { font-size: 1.5rem; }
        .markdown-body h4 { font-size: 1.125rem; }
        
        /* Added styles for lists */
        .markdown-body ul {
          list-style-type: disc;
          padding-left: 2em;
          margin: 1em 0;
        }
        .markdown-body ul ul {
          list-style-type: circle;
        }
        .markdown-body ul ul ul {
          list-style-type: square;
        }
        .markdown-body ol {
          list-style-type: decimal;
          padding-left: 2em;
          margin: 1em 0;
        }
        .markdown-body li {
          margin: 0.5em 0;
        }
        
        /* Task list specific styles */
        .markdown-body ul.contains-task-list {
          list-style-type: none;
          padding-left: 0;
        }
        .markdown-body ul.contains-task-list li {
          margin-left: 0;
          padding-left: 1.25em;
          position: relative;
        }
        .markdown-body ul.contains-task-list li input[type="checkbox"] {
          position: absolute;
          left: 0;
          top: 0.25em;
        }
      `}</style>
    </div>
  );
};

export default MarkdownEditor;