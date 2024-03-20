import { FilesApiServiceContract } from '@/infrastructure/http-layer/ApiServices/contracts';
import { FilesServiceContract } from './contracts';

export class FilesService implements FilesServiceContract {
  constructor(private readonly filesApiService: FilesApiServiceContract) {}

  public uploadFile(file: any) {
    return '';
  }

  public downloadFile(name: string) {
    return '';
  }
}
