import { FormComponent } from '@/core/interfaces';
import { useRef, ChangeEvent, useState } from 'react';
import styles from './file-upload.module.scss';
import Button from '../button/button';
import { useTranslation } from 'react-i18next';
import Input from '../input/input';
import { filesService } from '@/core/services';

interface FileUploaderProps extends FormComponent {
  onChange?: (filename: string) => void;
}

export const FileUploader = ({ id, onChange, error }: FileUploaderProps) => {
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filename, setFilename] = useState<string>('');
  const { t } = useTranslation();

  const uploadFile = (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    setIsLoading(true);
    filesService
      .uploadFile(formData)
      .then((result: any) => {
        // TODO типизировать
        onChange && onChange(result.data.name);
        setFilename(file.name);
      })
      .finally(() => setIsLoading(false));
  };

  const handleClick = () => {
    hiddenFileInput?.current?.click();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange && event.currentTarget.files?.length) {
      uploadFile(event.currentTarget.files[0]);
    }
  };

  return (
    <div className={styles['upload-wrapper']}>
      <div className={styles['upload-container']}>
        <input
          id={id}
          type='file'
          onChange={handleChange}
          ref={hiddenFileInput}
          style={{ display: 'none' }}
        />
        <Input
          error={error}
          inputClassname={styles['upload-input']}
          className={styles['upload-input-container']}
          id={id + 'fileupload'}
          value={filename}
          readonly
        />
        <Button disabled={isLoading} className={styles['upload-button']} onClick={handleClick}>
          {t('buttons.uploadFile')}
        </Button>
      </div>
    </div>
  );
};
