import { apiRepository } from '@/infrastructure/http-layer/ApiRepository';
import { FormApiService } from '@/infrastructure/http-layer/ApiServices/FormApiService';
import {
  FormApiServiceContract,
  FilesApiServiceContract,
} from '@/infrastructure/http-layer/ApiServices/contracts';
import { FilesApiService } from './FilesApiService';

let formApiServiceInstance: FormApiServiceContract;
let filesApiServiceInstance: FilesApiServiceContract;

function getFormApiService(): FormApiServiceContract {
  if (!formApiServiceInstance) {
    formApiServiceInstance = new FormApiService(apiRepository);
  }
  return formApiServiceInstance;
}

function getFilesApiService(): FilesApiServiceContract {
  if (!filesApiServiceInstance) {
    filesApiServiceInstance = new FilesApiService(apiRepository);
  }
  return filesApiServiceInstance;
}

export const formApiService: FormApiServiceContract = getFormApiService();
export const filesApiService: FilesApiServiceContract = getFilesApiService();
