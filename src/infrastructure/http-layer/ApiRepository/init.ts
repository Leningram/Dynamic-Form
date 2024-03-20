import { ApiRepositoryContract } from '@/infrastructure/http-layer/ApiRepository/contracts';
import { ApiRepository } from '@/infrastructure/http-layer/ApiRepository/ApiRepository';
import { coreApiInstance } from '@/framework/axios';

let apiRepositoryInstance: ApiRepositoryContract;

function getApiRepository(): ApiRepositoryContract {
  if (!apiRepositoryInstance) {
    apiRepositoryInstance = new ApiRepository(coreApiInstance);
  }
  return apiRepositoryInstance;
}

export const apiRepository: ApiRepositoryContract = getApiRepository();
