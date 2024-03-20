import { Control, FieldErrors, FieldValues, UseFormReturn } from 'react-hook-form';
import SurveyField from './survey-field';
import styles from './survey-step.module.scss';

interface SurveySectionProps {
  section: any;
  formValues: FieldValues;
  control: Control<FieldValues, any>;
  errors: FieldErrors<FieldValues>;
  form: UseFormReturn<FieldValues, any, undefined>;
}

const SurveySection = ({ section, formValues, control, errors, form }: SurveySectionProps) => {
  if (section.dependent) {
    const dependentSlug = section.dependent;
    if (formValues[dependentSlug] !== true && formValues[dependentSlug] !== 'true') {
      return null;
    }
  }

  return (
    <div className={styles['step-wrapper-inner']}>
      {section.title && section.title !== 'default' && (
        <h4 className={styles['step-title']}>{section.title}</h4>
      )}
      {section.fields.map((field: any) => (
        <SurveyField
          key={field.slug}
          field={field}
          control={control}
          errors={errors}
          form={form}
        />
      ))}
    </div>
  );
};

export default SurveySection;
