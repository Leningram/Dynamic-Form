import Button, { ButtonTypes } from '@/components/button/button';
import { useTranslation } from 'react-i18next';
import styles from './files.module.scss';
import { FileUploader } from '@/components/file-upload/file-upload';

const Files = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['files-container']}>
      <h2 className={styles['files-title']}>{t('finish.download')}</h2>
      <Button onClick={() => console.log('download')} type={ButtonTypes.LINK}>
        {t('finish.download')}
      </Button>
      <h2 className={styles['files-title']}>{t('finish.upload')}</h2>
      <FileUploader id='additional_files'/>
      <Button className={styles['files-filename-button']} onClick={() => console.log('download')} type={ButtonTypes.LINK}>
        {t('finish.download')}
      </Button>
      <Button className={styles['files-filename-button']} onClick={() => console.log('download')} type={ButtonTypes.LINK}>
        {t('finish.download')}
      </Button>
      
    </div>
  );
};

export default Files;
