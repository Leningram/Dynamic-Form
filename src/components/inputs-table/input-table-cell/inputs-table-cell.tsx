import { InputTableColumnInterface, TableCellData } from '@/core/interfaces';
import { getTableCellValue } from '@/core/utils/getTableCellValue';
import styles from '../inputs-table.module.scss';

interface InputsTableCellProps {
  item: TableCellData;
  column: InputTableColumnInterface<TableCellData>;
}
function InputsTableCell({ column, item }: InputsTableCellProps) {
  const value = getTableCellValue(item, column.key as string);
  return (
    <td className={column.render ? styles['input-cell'] : ''}>
      {column.render ? column.render(column, item) : value}
    </td>
  );
}

export default InputsTableCell;
