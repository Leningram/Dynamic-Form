import { forwardRef, useEffect, useState } from 'react';
import styles from './datepicker-input.module.scss';
import { CalendarIcon } from '@/assets/icons';
import { dateStringFormat } from '@/core/utils/dates';
import classNames from 'classnames';

const Input: React.ForwardRefRenderFunction<HTMLInputElement, any> = (
  { value, onClick, placeholder, onChange, error },
  ref,
) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = dateStringFormat(e.currentTarget.value);
    setInputValue(formatted);
    if (formatted.length === 10 && e.currentTarget.value.length === 10) {
      const parts = formatted.split('.');
      const formattedDateString = `${parts[2]}-${parts[1]}-${parts[0]}`;
      const isValidDate = !isNaN(Date.parse(formattedDateString));
      if (isValidDate) {
        onChange(e);
      }
    }
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div ref={ref} className={styles['input-container']}>
      <input
        onChange={handleChange}
        className={classNames(styles.input, {
          [styles['input-with-value']]: !!inputValue,
          [styles['input-with-error']]: !!error,
        })}
        type='text'
        placeholder={placeholder}
        value={inputValue}
        onClick={onClick}
      />
      <CalendarIcon onClick={onClick} className={styles['input-icon']} />
    </div>
  );
};

const DatepickerInput = forwardRef(Input);

export default DatepickerInput;
