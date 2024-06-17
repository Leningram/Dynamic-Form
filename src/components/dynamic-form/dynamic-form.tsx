import { Controller, useFieldArray } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Input from '../input/input';
import { Field } from '@/core/interfaces';
import Button, { ButtonTypes } from '../button/button';
import styles from './dynamic-form.module.scss';

//TODO типизировать
const DynamicForm = ({ form, field }: any) => {
  const { t } = useTranslation();
  const { control, register } = form;
  const { fields, append } = useFieldArray({ control, name: field.title });

  return (
    <div>
      <ul className={styles['dynamic-form-list']}>
        {fields.map((item, index) => {
          return (
            <li className={styles['dynamic-form-item']} key={item.id}>
              {field.fields.map((item: Field) => {
                return (
                  <Controller
                    key={item.slug}
                    name={`${field.title}.${index}.${item.slug}`}
                    control={control}
                    render={() => {
                      return (
                        <Input
                          label={item.label}
                          id={`${field.title}.${index}.${item.slug}`}
                          {...register(`${field.title}.${index}.${item.slug}`)}
                        />
                      );
                    }}
                  />
                );
              })}
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
