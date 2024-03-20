import styles from './checkbox.module.scss';
import classNames from 'classnames';

interface CheckboxProps {
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  className?: string;
  name?: string;
  disabled?: boolean;
  checked: boolean | 'true' | 'false';
}

const Checkbox = ({ label, checked, onChange, id, className, name, disabled }: CheckboxProps) => {
  const checkboxClassname = classNames([
    styles.checkbox,
    { [styles['checkbox-disabled']]: disabled },
    className,
  ]);
  return (
    <label className={checkboxClassname} htmlFor={id}>
      <input
        disabled={disabled}
        name={name}
        id={id}
        className={styles['checkbox']}
        type='checkbox'
        checked={!!checked && checked !== 'false'}
        onChange={onChange}
      />
      <span className={styles['checkmark']}></span>
      {label}
    </label>
  );
};

export default Checkbox;
