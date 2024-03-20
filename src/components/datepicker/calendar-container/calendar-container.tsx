import styles from './calendar-container.module.scss';
import Card from '@/components/card/card';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface ContainerProps {
  className?: string;
}

const CalendarContainer = ({ className, children }: PropsWithChildren<ContainerProps>) => {
  const containerClassnames = classNames([styles['calendar'], className]);
  return <Card className={containerClassnames}>{children}</Card>;
};

export default CalendarContainer;
