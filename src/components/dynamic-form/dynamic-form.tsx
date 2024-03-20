import { Controller, useFieldArray } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Input from '../input/input';
import { Field } from '@/core/interfaces';
import Button, { ButtonTypes } from '../button/button';
import styles from './dynamic-form.module.scss';

const DynamicForm = ({ form, field }: any) => {
  const { t } = useTranslation();
  const { control } = form;
  const { fields, append } = useFieldArray({ control, name: field.title });
  return (
    <div>
      <ul className={styles['dynamic-form-list']}>
        {fields.map((item, index) => {
          return (
            <li className={styles['dynamic-form-item']} key={item.id}>
              {field.fields.map((item: Field) => (
                <Controller
                  render={({ field }) => <Input label={item.label} id={item.slug} {...field} />}
                  name={`${field.title}.${index}.${item.slug}`}
                  control={control}
                />
              ))}
            </li>
          );
        })}
      </ul>
      <Button
        type={ButtonTypes.LINK}
        onClick={() => {
          append('');
        }}>
        {t('survey.buttons.add')}
      </Button>
    </div>
  );
};

export default DynamicForm;
