import Button, { ButtonTypes } from '@/components/button/button';
import Steps from '@/components/steps/steps';
import SurveyStepComponent from '@/components/survey-step/survey-step';
import {
  ContractTypeEnum,
  CountryEnum,
  LegalTypeEnum,
  SurveyFormRequest,
  SurveyStep,
} from '@/core/interfaces';
import { formService } from '@/core/services/init';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styles from './survey.module.scss';
import { flattenFields } from '@/core/utils/form-utils';

interface SurveyProps {
  onFinish: () => void;
}

const Survey = ({ onFinish }: SurveyProps) => {
  const { t } = useTranslation();
  const form = useForm();
  const [steps, setSteps] = useState<SurveyStep[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const searchParams = new URLSearchParams(window.location.search);

  const getRequestParamsFromURL = (): SurveyFormRequest => {
    const inn = searchParams.get('inn');
    const sum = searchParams.get('sum');
    const contractType = searchParams.get('contractType') as ContractTypeEnum;
    const country = CountryEnum.Ru;
    const legalType = LegalTypeEnum.LLC;
    return {
      inn: inn || '',
      sum: Number(sum) || 0,
      contractType: contractType || ContractTypeEnum.Value223,
      country,
      legalType: legalType,
    };
  };
  useEffect(() => {
    const params = getRequestParamsFromURL();
    formService.getSurveyForm(params).then(({ data, success }) => {
      if (success) {
        const { steps: stepsInfo } = data;
        const surveyValues = flattenFields(stepsInfo.flatMap((item) => item.sections));
        form.reset(surveyValues);
        setSteps(stepsInfo);
      }
    });
  }, []);

  const goStepBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const goNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const onSubmit = () => {
    console.log('form.getValues()', form.getValues());
    formService.createSurveyForm(form.getValues()).then((response) => {
      !!response.success && onFinish();
    });
  };

  return (
    <FormProvider {...form}>
      <div className={styles['survey-wrapper']}>
        <h3 className={styles['survey-title']}>{t('survey.title')}</h3>
        <Steps currentStep={currentStep} items={steps} />
        <div className={styles['divider']} />
        <div className={styles['survey-content']}>
          <div className={styles['survey-nav-button-container']}>
            {currentStep > 1 && (
              <Button type={ButtonTypes.OUTLINE} onClick={goStepBack}>
                {t('survey.buttons.prev')}
              </Button>
            )}
          </div>
          <FormProvider {...form}>
            {!!steps.length && (
              <SurveyStepComponent
                form={form}
                errors={form.formState.errors}
                control={form.control}
                stepData={steps[currentStep - 1]}
              />
            )}
          </FormProvider>
          <div className={styles['survey-nav-button-container']}>
            {currentStep < steps.length && (
              <Button onClick={goNextStep}>{t('survey.buttons.next')}</Button>
            )}
            {currentStep === steps.length && (
              <Button onClick={onSubmit}>{t('survey.buttons.send')}</Button>
            )}
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default Survey;
