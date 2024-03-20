import { FormTableData, InputTableColumnInterface, TableCellData } from '@/core/interfaces';
import InputsTableCell from '../input-table-cell/inputs-table-cell';
import React from 'react';
import styles from '../inputs-table.module.scss';

interface InputsTableRowProps {
  data: FormTableData[];
  columns: InputTableColumnInterface<TableCellData>[];
}

function InputsTableRow({ data, columns }: InputsTableRowProps) {
  return (
    <>
      {!!data?.length &&
        data.map((item) => (
          <>
            <tr>
              <td className={styles['no-border']}>{item.title}</td>
            </tr>
            {!!item.sections?.length &&
              item.sections.map((section, index) => (
                <React.Fragment key={section.title + index + Math.random() * 10}>
                  <tr>
                    <td className={styles['no-border']}>{section.title}</td>
                  </tr>
                  {!!section.fields?.length &&
                    section.fields.map((field) => (
                      <tr>
                        {columns &&
                          columns.map((column, columnIndex) => (
                            <InputsTableCell
                              key={`table-row-cell-${columnIndex}`}
                              item={field}
                              column={column}
                            />
                          ))}
                      </tr>
                    ))}
                </React.Fragment>
              ))}
            {!!item.fields?.length &&
              item.fields.map((field) => (
                <tr>
                  {columns &&
                    columns.map((column, columnIndex) => (
                      <InputsTableCell
                        key={`table-row-cell-${columnIndex}`}
                        item={field}
                        column={column}
                      />
                    ))}
                </tr>
              ))}
          </>
        ))}
    </>
  );
}

export default InputsTableRow;
