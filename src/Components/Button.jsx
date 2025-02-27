import React from 'react';

function Button({
    onClick,
    text = 'Button',
    customClass = '',
}) {
  return (
    <div className="relative inline-block">
      <button
        className={`
          relative bg-[#0f172a] text-white font-semibold py-3 px-8 rounded-full
          shadow-[0_0_15px_rgba(0,170,200,0.7)] hover:shadow-[0_0_15px_rgba(0,200,170,0.7)]
            transition-all duration-300 ease-in-out hover:scale-110
          focus:outline-none focus:ring-4 focus:ring-[#00ffaa]
          cursor-pointer static-neon-glow
          ${customClass}
        `}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
