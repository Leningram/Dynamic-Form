import { InputTableColumnInterface } from '@/core/interfaces';
import styles from '../inputs-table.module.scss';

interface InputsTableHeaderProps<T extends Record<string, any>> {
  columns: InputTableColumnInterface<T>[];
}
function InputsTableHeader<T extends Record<string, any>>({ columns }: InputsTableHeaderProps<T>) {
  return (
    <tr>
      {columns &&
        columns.map((column, columnIndex) => (
          <th
            key={`table-head-cell-${columnIndex}`}
            style={{ maxWidth: column.width }}
            className={styles['inputs-table-header']}>
            {column.title}
          </th>
        ))}
    </tr>
  );
}

export default InputsTableHeader;
