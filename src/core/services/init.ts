import { FilesServiceContract, FormServiceContract } from '@/core/services/contracts';
import { FormService } from '@/core/services/form-service';
import { filesApiService, formApiService } from '@/infrastructure/http-layer/ApiServices';
import { FilesService } from './files-service';

let formServiceInstance: FormServiceContract;
let filesServiceInstance: FilesServiceContract;

function getFormService(): FormServiceContract {
  if (!formServiceInstance) {
    formServiceInstance = new FormService(formApiService);
  }
  return formServiceInstance;
}

function getFilesService(): FilesServiceContract {
  if (!filesServiceInstance) {
    filesServiceInstance = new FilesService(filesApiService);
  }
  return filesServiceInstance;
}

export const formService: FormServiceContract = getFormService();
export const filesService: FilesServiceContract = getFilesService();
