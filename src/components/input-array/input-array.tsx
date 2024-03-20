import { FieldValues, UseFormReturn, useFieldArray } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Input from '../input/input';
import styles from './input-array.module.scss';
import Button, { ButtonTypes } from '../button/button';

interface InputArrayProps {
  form: UseFormReturn<FieldValues, any, undefined>;
  name: string;
  label?: string;
}

const InputArray = ({ form, name, label }: InputArrayProps) => {
  const { t } = useTranslation();
  const { register, control } = form;
  const { fields, append } = useFieldArray({
    control,
    name: name,
  });
  
  return (
    <div className={styles['input-array-container']}>
      {label && <p className={styles['input-array-label']}>{label}</p>}
      <ul className={styles['input-array-list']}>
        {fields.map((item, index) => (
          <li className={styles['input-array-list-item']} key={item.id}>
            <Input id={`${name}.${index}`} {...register(`${name}.${index}`)} />
          </li>
        ))}
      </ul>
      <Button type={ButtonTypes.LINK} onClick={() => append('')}>
        { t('survey.buttons.add')}
      </Button>
    </div>
  );
}

export default InputArray