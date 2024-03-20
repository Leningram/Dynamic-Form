import { SurveyStep } from '@/core/interfaces';
import { useEffect, useRef } from 'react';
import { Control, FieldErrors, FieldValues, UseFormReturn } from 'react-hook-form';
import SurveySection from './survey-section';
import styles from './survey-step.module.scss';

interface SurveyStepProps {
  control: Control<FieldValues, any>;
  stepData: SurveyStep;
  errors: FieldErrors<FieldValues>;
  form: UseFormReturn<FieldValues, any, undefined>;
}

const SurveyStepComponent = ({ stepData, control, errors, form }: SurveyStepProps) => {
  const containerRef = useRef<any>(null);
  const formValues = form.watch();

  useEffect(() => {
    if (containerRef?.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const isVisible =
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      if (!isVisible) {
        containerRef.current.scrollIntoView({
          behavior: 'smooth',
          inline: 'nearest',
        });
      }
    }
  }, [stepData]);

  return (
    <div className={styles['step-wrapper']}>
      <div className={styles['step-scroll-point']} ref={containerRef}></div>
      {stepData &&
        stepData.sections.map((section, index) => (
          <SurveySection
            key={section.title + index}
            section={section}
            formValues={formValues}
            control={control}
            errors={errors}
            form={form}
          />
        ))}
    </div>
  );
};

export default SurveyStepComponent;
