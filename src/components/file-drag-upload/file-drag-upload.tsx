import { FormComponent } from '@/core/interfaces';
import { useRef, useState } from 'react';
import styles from './file-drag-upload.module.scss';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
// import { filesService } from '@/core/services';

interface FileDragUploadProps extends FormComponent {
  onChange: (filename: string) => void;
}
const FileDragUpload = ({ onChange, id, label }: FileDragUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();
  const [filename, setFilename] = useState<string>('');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    // Проверка, чтобы перетаскивание оставалось актуальным на предках элемента
    if (containerRef.current && !containerRef.current.contains(e.relatedTarget as Node)) {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer?.files[0];
    if (file) {
      handleFileChange(file);
    }
  };

  const handleFileChange = (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    // filesService.uploadFile(formData).then((result) => {
    //   onChange && onChange(result.data.name);
    //   setFilename(file.name);
    // });
  };
  const handleClick = () => {
    inputRef?.current && inputRef.current.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length) {
      handleFileChange(e.currentTarget.files[0]);
    }
  };

  return (
    <div
      className={classNames(styles['upload-container'], {
        [styles['upload-dragging']]: isDragging,
      })}
      ref={containerRef}
      onDragEnter={handleDragEnter}
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}>
      <label className={styles['upload-label']} htmlFor={id}>
        {label}
        <input
          id={id}
          type='file'
          ref={inputRef}
          style={{ display: 'none' }}
          onChange={handleInputChange}
        />
      </label>
      <button className={styles['upload-button']} onClick={handleClick}>
        {filename || t('ui.fileUploadLabel')}
      </button>
    </div>
  );
};

export default FileDragUpload;
