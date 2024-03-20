import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import styles from './datepicker-header.module.scss';
import { useEffect, useState, useRef } from 'react';
import { CheveronIcon } from '@/assets/icons';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

const getYear = (date: Date | unknown) => {
  if (!(date instanceof Date)) {
    return 0;
  }
  return date.getFullYear();
};

const range = (startYear: number, endYear: number) => {
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }
  return years;
};

const years = range(1990, getYear(new Date()) + 10);

const DatepickerHeader = (props: ReactDatePickerCustomHeaderProps) => {
  const { t } = useTranslation();
  const { date, increaseMonth, decreaseMonth } = props;
  const monthNumber = date.getMonth();
  const [yearsOpen, setYearsOpen] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date>(date);
  const [showBottomGradient, setShowBottomGradient] = useState<boolean>(false);
  const [showTopGradient, setShowTopGradient] = useState<boolean>(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStartDate(date);
  }, [date]);

  const handleYearClick = (year: number) => {
    const newStartDate = new Date(startDate);
    newStartDate.setFullYear(year);
    setStartDate(newStartDate);
    setYearsOpen(false);
  };

  const toggleYearsPanel = () => {
    setYearsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView();
    }
  }, [targetRef, yearsOpen]);

  const handleYearsScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const bottom = scrollTop + clientHeight === scrollHeight;
    const top = scrollTop === 0;
    setShowBottomGradient(!bottom);
    setShowTopGradient(!top);
  };

  return (
    <div className={styles.header}>
      <div className={styles['header-left']}>
        {/* TODO типизировать */}
        {/*  eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <p className={styles['header-date']}>{t(`calendar.months.${monthNumber}`)},</p>
        <button onClick={toggleYearsPanel} name='years' className={styles['year-button']}>
          <p className={styles['header-date']}>{startDate.getFullYear()}</p>
          <CheveronIcon
            className={classNames(styles['year-icon'], yearsOpen && styles['year-icon-open'])}
          />
        </button>
      </div>
      <div className={styles['header-right']}>
        <button onClick={decreaseMonth} className={styles['month-button']}>
          <CheveronIcon className={styles['month-button-prev']} />
        </button>
        <button onClick={increaseMonth} className={styles['month-button']}>
          <CheveronIcon className={styles['month-button-next']} />
        </button>
      </div>
      {yearsOpen && (
        <div className={styles['year-container']}>
          {showTopGradient && (
            <div className={`${styles['year-gradient']} ${styles['gradient-top']}`} />
          )}
          <div onScroll={handleYearsScroll} className={styles['year-list']}>
            {years.map((year) => (
              <div
                className={`${styles['year']} ${
                  startDate.getFullYear() === year ? styles['year-active'] : ''
                }`}
                onClick={() => handleYearClick(year)}
                key={year}
                ref={year === startDate.getFullYear() ? targetRef : null}>
                {year}
              </div>
            ))}
          </div>
          {showBottomGradient && (
            <div className={`${styles['year-gradient']} ${styles['gradient-bottom']}`} />
          )}
        </div>
      )}
    </div>
  );
};

export default DatepickerHeader;
