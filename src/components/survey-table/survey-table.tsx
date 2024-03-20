import { Field } from '@/core/interfaces';
import styles from './survey-table.module.scss';
import { Controller } from 'react-hook-form';
import TableInput from '../inputs-table/table-input/table-input';

interface SurveyTableProps {
  data: any;
  control: any;
}

const SurveyTable = ({ data, control }: SurveyTableProps) => {
  return (
    <div className={styles['survey-table']}>
      <div className={styles['survey-table-header']}>
        <h4 className={styles['survey-table-title']}>{data.title}</h4>
      </div>
      <div className={styles['survey-table-body']}>
        {data.table.map((column: Field) => (
          <div key={column.slug} className={styles['survey-table-column']}>
            <div className={styles['survey-table-column-header']}>{column.label}</div>
            <div className={styles['survey-table-column-input']}>
              <Controller
                control={control}
                name={column.slug}
                render={({ field: { onChange, value } }) => (
                  <TableInput id={column.slug} value={value || ''} onChange={onChange} />
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurveyTable;
