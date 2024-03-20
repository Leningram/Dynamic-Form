import classNames from 'classnames';
import styles from './input.module.scss';
import { FormComponent } from '@/core/interfaces';
import { EyeIcon, EyeSlashIcon } from '@/assets/icons';
import { forwardRef, useState } from 'react';

export interface InputProps extends FormComponent {
  isPassword?: boolean;
  inputClassname?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  readonly?: boolean;
  icon?: React.ReactNode;
  error?: string;
}
const Input = forwardRef<HTMLInputElement, InputProps>(({
  isPassword = false,
  placeholder,
  className,
  inputClassname,
  onKeyPress,
  id,
  label,
  onChange,
  value,
  readonly = false,
  onClick,
  icon,
  disabled,
  error,
  ...props
}, ref) => {
  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyPress && onKeyPress(e);
  };

  const handleClick = () => {
    onClick?.();
  };

  const [isTextHidden, setIsTextHidden] = useState<boolean>(isPassword);

  const togglePassword = () => {
    setIsTextHidden((prev) => !prev);
  };

  return (
    <label className={classNames([styles['input-container'], className])} htmlFor={id}>
      {label !== undefined && <p className={styles['input-label']}>{label}</p>}
      <div className={styles['input-wrapper']}>
        <input
          ref={ref}
          disabled={disabled}
          onClick={handleClick}
          readOnly={readonly}
          value={value}
          onChange={onChange}
          id={id}
          onKeyUp={handleKey}
          placeholder={placeholder}
          type={isTextHidden ? 'password' : 'text'}
          className={classNames([
            styles.input,
            inputClassname,
            {
              [styles['input-with-value']]: !!value,
              [styles['input-with-icon']]: !!icon || isPassword,
              [styles['input-with-error']]: !!error,
            },
          ])}
          {...props}
        />
        {!!icon && <div className={styles['icon-container']}>{icon}</div>}
        {isPassword && !icon && (
          <button onClick={togglePassword} className={styles['password-button']}>
            {isTextHidden && <EyeSlashIcon />}
            {!isTextHidden && <EyeIcon />}
          </button>
        )}
      </div>
      {error !== undefined && <p className={styles['input-error']}>{error}</p>}
    </label>
  );
});

export default Input;
