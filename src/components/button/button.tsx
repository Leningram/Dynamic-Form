import classNames from 'classnames';
import styles from './button.module.scss';
import { PropsWithChildren, MouseEvent } from 'react';
import SpinnerWhite from './spinner-white.png';
import SpinnerBlack from './spinner-black.png';

export enum ButtonTypes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  LINK = 'link',
  LINK_DANGER = 'linkdanger',
  OUTLINE = 'outline',
}

interface ButtonProps {
  disabled?: boolean;
  className?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonTypes;
  active?: boolean;
  loading?: boolean;
}

const Button = ({
  disabled = false,
  className,
  children,
  onClick,
  type = ButtonTypes.PRIMARY,
  active,
  loading,
}: PropsWithChildren<ButtonProps>) => {
  const buttonClassname = classNames(
    styles.button,
    styles[type],
    {
      [styles.active]: active,
    },
    className,
  );

  const getButtonIcon = (type: ButtonTypes) => {
    let imgSrc;
    switch (type) {
      case ButtonTypes.PRIMARY:
        imgSrc = SpinnerWhite;
        break;
      default:
        imgSrc = SpinnerBlack;
        break;
    }
    return <img className={styles['spinner-img']} src={imgSrc} />;
  };

  return (
    <button onClick={onClick} className={buttonClassname} disabled={disabled || loading}>
      {loading && getButtonIcon(type)}
      {!loading && children}
    </button>
  );
};

export default Button;
