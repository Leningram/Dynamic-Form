import { Control, FieldError, FieldErrors, FieldValues, UseFormReturn } from 'react-hook-form';
import styles from './survey-step.module.scss';
import FormField from '@/components/form-field/form-field';
import SurveyTable from '@/components/survey-table/survey-table';
import DynamicForm from '../dynamic-form/dynamic-form';
import Button, { ButtonTypes } from '../button/button';
import { useTranslation } from 'react-i18next';

interface SurveyFieldProps {
  field: any;
  control: Control<FieldValues, any>;
  errors: FieldErrors<FieldValues>;
  form: UseFormReturn<FieldValues, any, undefined>;
}

const SurveyField = ({ field, control, errors, form }: SurveyFieldProps) => {
  const { t } = useTranslation();
  if ('table' in field) {
    return <SurveyTable key={field.slug} data={field} control={control} />;
  }
  if (!field.fields && 'slug' in field) {
    return (
      <FormField
        form={form}
        error={errors[field.slug] as FieldError}
        control={control}
        field={field}
        key={field.slug}
      />
    );
  } else {
    return (
      <>
        {'title' in field && <p className={styles['step-subtitle']}>{field.title}</p>}
        {(!('expand' in field) || field.expand === false) &&
          field.fields?.map(
            (item: any) =>
              'slug' in item && (
                <FormField
                  form={form}
                  error={errors[item.slug] as FieldError}
                  control={control}
                  field={item}
                  key={item.slug}
                />
              ),
          )}
        {'expand' in field && field.expand && <DynamicForm form={form} field={field} />}
        {'expand' in field && !field.fields && field.expand && (
          <div>
            <Button type={ButtonTypes.LINK} onClick={() => console.log('add')}>
              {t('survey.buttons.add')}
            </Button>
          </div>
        )}
      </>
    );
  }
};

export default SurveyField;
