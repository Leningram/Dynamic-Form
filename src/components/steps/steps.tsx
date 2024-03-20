import { SurveyStep } from '@/core/interfaces';
import styles from './steps.module.scss';

interface StepsProps {
  items: SurveyStep[];
  currentStep: number;
}
const Steps = ({ items, currentStep }: StepsProps) => {
  return (
    <div className={styles['steps-container']}>
      {items
        .sort((a, b) => a.order - b.order)
        .map((step, index) => (
          <div
            className={`${styles['steps-item']} ${
              currentStep >= index + 1 ? styles['steps-item__active'] : ''
            }`}
            key={`${step.order} + ${index}`}>
            <div className={styles['steps-item-circle']}>{step.order}</div>
            <p className={styles['steps-item-title']}>{step.title}</p>
          </div>
        ))}
    </div>
  );
};

export default Steps;
