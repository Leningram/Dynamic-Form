import {
  FormTableData,
  InputTableColumnInterface,
  Section,
  TableCellData,
} from '@/core/interfaces';
import InputsTableHeader from './inputs-table-header/inputs-table-header';
import InputsTableRow from './inputs-table-row/inputs-table-row';
import styles from './inputs-table.module.scss';

interface InputsTableProps {
  columns: InputTableColumnInterface<TableCellData>[];
  data: FormTableData[];
}
function InputsTable({ columns, data }: InputsTableProps) {
  return (
    <table className={styles['inputs-table']}>
      <thead>
        <InputsTableHeader columns={columns} />
      </thead>
      <tbody>
        <InputsTableRow data={data} columns={columns} />
      </tbody>
    </table>
  );
}

export default InputsTable;
