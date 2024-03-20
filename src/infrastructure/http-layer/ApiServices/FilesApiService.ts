import { ApiRepositoryContract } from '../ApiRepository/contracts';
import { FilesApiServiceContract } from './contracts/FilesApiService.contract';

export class FilesApiService implements FilesApiServiceContract {
  constructor(private readonly apiRepository: ApiRepositoryContract) {}
  public uploadFile(file: any) {
    return '';
  }
  public downloadFile(name: string) {
    return '';
  }
}
