import React from 'react';

const config = {
  common: {
    classList: 'h-8 outline-none rounded px-2',
    classListLight: 'text-black',
    classListDark: 'text-white',
  },
};

type TextInputProps = {
  id?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  dark?: boolean;
}

const TextInput = ({
  id,
  label,
  placeholder,
  className,
  dark,
}: TextInputProps) => {
  return (
    <div className={className}>
      {label && <label className="block" htmlFor={id}>{label}</label>}
      <input
        className={
        config.common.classList + dark ? config.common.classListDark : config.common.classListLight
        }
        id={id}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  type?: string;
}

const Button = ({ children, className, type }: ButtonProps) => {
  return (
    <div className={className}>
      <button type={type === 'submit' ? 'submit' : 'button'}>
        {children}
      </button>
    </div>
  );
};

export { TextInput, Button };
