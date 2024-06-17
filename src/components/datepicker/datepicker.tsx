import DatePicker, { registerLocale } from 'react-datepicker';
import DatepickerHeader from './datepicker-header/datepicker-header';
import CalendarContainer from './calendar-container/calendar-container';
import DatepickerInput from './datepicker-input/datepicker-input';
import ru from 'date-fns/locale/ru';
import { FormComponent } from '@/core/interfaces/components-interfaces';
import styles from './datepicker.module.scss';

interface DatepickerProps extends FormComponent {
  className?: string;
  value: Date | null;
  label?: string;
  onChange: (date: Date | null) => void;
}
registerLocale('ru', ru);

const Datepicker = ({ className, value, onChange, id, label, error }: DatepickerProps) => {
  return (
    <div className={styles['datepicker-wrapper']}>
      <label htmlFor={id}>
        {label}
        <DatePicker
          popperPlacement='bottom'
          popperModifiers={[
            {
              name: 'flip',
              options: {
                fallbackPlacements: ['bottom'],
                allowedAutoPlacements: ['bottom'],
              },
            },
          ]}
          id={id}
          locale={ru}
          customInput={<DatepickerInput error={error} />}
          dateFormat={'dd.MM.yyyy'}
          selected={value}
          onChange={(date) => onChange(date)}
          className={className}
          calendarContainer={CalendarContainer}
          renderCustomHeader={(props) => <DatepickerHeader {...props} />}
        />
        {!!error && <p className={styles['datepicker-error']}>{error}</p>}
      </label>
    </div>
  );
};

export default Datepicker;
