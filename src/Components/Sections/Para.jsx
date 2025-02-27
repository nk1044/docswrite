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
        // Add any accumulated text
        if (currentText) {
          result.push(currentText);
          currentText = '';
        }
        
        // Find the end of the code block
        const codeStart = i + 6;
        const codeEnd = text.indexOf('[/code]', codeStart);
        
        if (codeEnd === -1) {
          // No closing tag, treat as regular text
          currentText += text.substring(i);
          break;
        }
        
        // Extract code content
        const codeContent = text.substring(codeStart, codeEnd);
        result.push(<InlineCode key={`code-${key++}`} text={codeContent} />);
        
        // Move past the closing tag
        i = codeEnd + 7;
      }
      // Check for link tag
      else if (text.substring(i, i + 6) === '[link]') {
        // Add any accumulated text
        if (currentText) {
          result.push(currentText);
          currentText = '';
        }
        
        // Find the end of the link block
        const linkStart = i + 6;
        const linkEnd = text.indexOf('[/link]', linkStart);
        
        if (linkEnd === -1) {
          // No closing tag, treat as regular text
          currentText += text.substring(i);
          break;
        }
        
        // Extract link content
        const linkContent = text.substring(linkStart, linkEnd);
        
        // Extract title and URL
        const openParenIndex = linkContent.indexOf('(');
        if (openParenIndex === -1) {
          // No URL format, treat as regular text
          currentText += text.substring(i, linkEnd + 7);
          i = linkEnd + 7;
          continue;
        }
        
        const closeParenIndex = linkContent.indexOf(')', openParenIndex);
        if (closeParenIndex === -1) {
          // No closing parenthesis, treat as regular text
          currentText += text.substring(i, linkEnd + 7);
          i = linkEnd + 7;
          continue;
        }
        
        const linkTitle = linkContent.substring(0, openParenIndex).trim();
        const linkUrl = linkContent.substring(openParenIndex + 1, closeParenIndex).trim();
        
        result.push(<ExternalLink key={`link-${key++}`} title={linkTitle} link={linkUrl} />);
        
        // Move past the closing tag
        i = linkEnd + 7;
      }
      else {
        // Regular text
        currentText += text[i];
        i++;
      }
    }
    
    // Add any remaining text
    if (currentText) {
      result.push(currentText);
    }
    
    return result;
  };

  return <p className="text-lg text-neutral-300">{formatText(text)}</p>;
};