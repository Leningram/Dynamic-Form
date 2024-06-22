import { FieldTypeEnum, FormItem } from '@/core/interfaces';
import Checkbox from '@/components/checkbox/checkbox';
import Input from '@/components/input/input';
import { Control, Controller, FieldError, FieldValues, UseFormReturn } from 'react-hook-form';
import Datepicker from '../datepicker/datepicker';
import FileDragUpload from '../file-drag-upload/file-drag-upload';
import { useTranslation } from 'react-i18next';
import Select from '../select/select';
import styles from './form-field.module.scss';
import { Field } from '@/core/interfaces';
import InputArray from '../input-array/input-array';

interface FieldProps {
  field: Field | FormItem;
  control: Control<FieldValues, any>;
  error?: FieldError;
  form: UseFormReturn<FieldValues, any, undefined>
}
export const getField = (
  field: Field,
  onChange: (...event: any[]) => void,
  value: any,
  error?: FieldError,
) => {
  switch (field.type) {
    case FieldTypeEnum.Checkbox:
      return <Checkbox id={field.slug} checked={value} onChange={onChange} label={field.label} />;
    case FieldTypeEnum.Date:
      return (
        <Datepicker label={field.label} id={field.slug} onChange={onChange} value={value || null} />
      );
    case FieldTypeEnum.File:
      return <FileDragUpload id={field.slug} onChange={onChange} label={field.label} />;
    case FieldTypeEnum.Select:
      return (
        <Select
          className={styles['popover-index']}
          items={field.acceptableFieldValues.map((item) => ({
            label: item.value,
            value: item.value,
          }))}
          id={field.slug}
          value={value || ''}
          onChange={onChange}
          label={field.label}
        />
      );
    default:
      return (
        <Input
          error={error?.message}
          id={field.slug}
          value={value || ''}
          onChange={onChange}
          label={field.label}
        />
      );
  }
};
const FormField = ({ field, control, error, form }: FieldProps) => {
  const { t } = useTranslation();
  const formValues = form.watch();
  if (field.dependent) {
    const dependentSlug = field.dependent;
    if (
      formValues[dependentSlug] === true ||
      field.dependentValue && formValues[dependentSlug] === field.dependentValue
    ) {
      return (
        'type' in field && (
          <Controller
            control={control}
            name={field.slug}
            rules={{
              required: {
                message: t('errors.validation.required'),
                value: field.required,
              },
            }}
            render={({ field: { onChange, value } }) =>
              field.expand ? (
                <InputArray label={field.label} form={form} name={field.slug} />
              ) : (
                getField(field, onChange, value, error)
              )
            }
          />
        )
      );
    } else return null;
  }
    return (
      'type' in field && (
        <Controller
          control={control}
          name={field.slug}
          rules={{
            required: {
              message: t('errors.validation.required'),
              value: field.required,
            },
          }}
          render={({ field: { onChange, value } }) =>
            field.expand ? (
              <InputArray label={field.label} form={form} name={field.slug} />
            ) : (
              getField(field, onChange, value, error)
            )
          }
        />
      )
    );
};

export default FormField;
