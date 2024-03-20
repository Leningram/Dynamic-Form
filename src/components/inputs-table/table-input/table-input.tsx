import classNames from 'classnames';
import styles from './table-input.module.scss';

const TableInput = ({
  onChange,
  value,
  id,
  disabled,
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      disabled={disabled}
      className={classNames([styles['table-input'], { [styles['table-input-filled']]: !!value }])}
      id={id}
      value={value || ''}
      onChange={onChange}
    />
  );
};

export default TableInput;
