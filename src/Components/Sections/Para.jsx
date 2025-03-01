import React from 'react';
import { InlineCode } from './Inline';
import ExternalLink from './ExternalLink';

export const Para = ({ text }) => {
  const formatText = (text) => {
    const result = [];
    let currentText = '';
    let i = 0;
    let key = 0;
    
    while (i < text.length) {
      // Check for code tag
      if (text.substring(i, i + 6) === '[code]') {
        if (currentText) {
          result.push(currentText);
          currentText = '';
        }
        const codeStart = i + 6;
        const codeEnd = text.indexOf('[/code]', codeStart);
        if (codeEnd === -1) {
          currentText += text.substring(i);
          break;
        }
        const codeContent = text.substring(codeStart, codeEnd);
        result.push(<InlineCode key={`code-${key++}`} text={codeContent} />);
        i = codeEnd + 7;
      }
      // Check for link tag
      else if (text.substring(i, i + 6) === '[link]') {
        if (currentText) {
          result.push(currentText);
          currentText = '';
        }
        const linkStart = i + 6;
        const linkEnd = text.indexOf('[/link]', linkStart);
        if (linkEnd === -1) {
          currentText += text.substring(i);
          break;
        }
        const linkContent = text.substring(linkStart, linkEnd);
        const openParenIndex = linkContent.indexOf('(');
        if (openParenIndex === -1) {
          currentText += text.substring(i, linkEnd + 7);
          i = linkEnd + 7;
          continue;
        }
        const closeParenIndex = linkContent.indexOf(')', openParenIndex);
        if (closeParenIndex === -1) {
          currentText += text.substring(i, linkEnd + 7);
          i = linkEnd + 7;
          continue;
        }
        const linkTitle = linkContent.substring(0, openParenIndex).trim();
        const linkUrl = linkContent.substring(openParenIndex + 1, closeParenIndex).trim();
        result.push(<ExternalLink key={`link-${key++}`} title={linkTitle} link={linkUrl} />);
        i = linkEnd + 7;
      }
      // Check for bold tag
      else if (text.substring(i, i + 6) === '[bold]') {
        if (currentText) {
          result.push(currentText);
          currentText = '';
        }
        const boldStart = i + 6;
        const boldEnd = text.indexOf('[/bold]', boldStart);
        if (boldEnd === -1) {
          currentText += text.substring(i);
          break;
        }
        const boldContent = text.substring(boldStart, boldEnd);
        result.push(<strong key={`bold-${key++}`} className="font-bold">{boldContent}</strong>);
        i = boldEnd + 7;
      }
      else {
        currentText += text[i];
        i++;
      }
    }
    if (currentText) {
      result.push(currentText);
    }
    return result;
  };

  return <p className="text-lg text-neutral-300">{formatText(text)}</p>;
};
