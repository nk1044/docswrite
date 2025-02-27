import React from 'react';
import { InlineCode } from './Inline';

export const Para=({
    text
}) => {

    const formatTextWithCode = (text) => {
        const regex = /\[code\](.*?)\[\/code\]/g;
        const parts = text.split(regex);

        return parts.map((part, index) =>
            index % 2 === 1 ? <InlineCode key={index} text={part} /> : part
        );
    };

  return (
    <p className='text-lg text-neutral-300'>{formatTextWithCode(text)}</p>
  )
}
