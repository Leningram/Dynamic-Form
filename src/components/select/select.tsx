import { FormComponent } from '@/core/interfaces';
import Input from '../input/input';
import { SelectItem } from '@/core/interfaces';
import { useRef, useState } from 'react';
import { useClickOutside } from '@/core/hooks/useClickOutside';
import classNames from 'classnames';
import { CheveronIcon } from '@/assets/icons';
import styles from './select.module.scss';

interface SelectProps extends FormComponent {
  value: string;
  onChange: (value: string) => void;
  items: SelectItem[];
  listClassName?: string;
}

const Select = ({
  id,
  value,
  onChange,
  items = [],
  disabled = false,
  className,
  listClassName,
  error,
  ...props
}: SelectProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const listRef = useRef(null);

  const hideList = () => {
    setOpen(false);
  };

  const handleChange = (value: string) => {
    onChange(value);
    hideList();
  };
  const toggleOpen = () => {
    !disabled && setOpen((prev) => !prev);
  };

  useClickOutside(listRef, hideList);

  const findLabelByValue = () => {
    const selectedItem = items.find((item) => item.value === value);
    return selectedItem ? selectedItem.label : '';
  };

  return (
    <div ref={listRef} className={classNames(styles['select-container'], className)}>
      <Input
        error={error}
        disabled={disabled}
        inputClassname={classNames(styles['select-input'], {
          [styles['select-input-disabled']]: disabled,
        })}
        value={findLabelByValue()}
        id={id}
        readonly
        onClick={toggleOpen}
        {...props}
        icon={
          <CheveronIcon className={classNames(styles.icon, { [styles['icon-rotated']]: open })} />
        }
      />
      {open && (
        <ul className={classNames(styles['items-list'], listClassName)}>
          {!!items.length &&
            items.map((item) => (
              <li
                key={item.value}
                onClick={() => handleChange(item.value)}
                className={classNames(styles['items-elem'], {
                  [styles['items-elem-selected']]: value === item.value,
                })}>
                {item.label}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
