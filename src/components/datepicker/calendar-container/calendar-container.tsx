import Card from '@/components/card/card';
import { PropsWithChildren } from 'react';
import styles from './calendar-container.module.scss';
import classNames from 'classnames';

interface ContainerProps {
  className?: string;
}

const CalendarContainer = ({ className, children }: PropsWithChildren<ContainerProps>) => {
  const containerClassnames = classNames([styles['calendar'], className]);
  return <Card className={containerClassnames}>{children}</Card>;
};

export default CalendarContainer;
