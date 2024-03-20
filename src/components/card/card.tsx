import { PropsWithChildren } from 'react';
import styles from './card.module.scss';
import classNames from 'classnames';
interface CardProps {
  className?: string;
}
const Card = ({ className, children }: PropsWithChildren<CardProps>) => {
  const cardClassnames = classNames([styles['card-container'], className]);

  return <div className={cardClassnames}>{children}</div>;
};

export default Card;
