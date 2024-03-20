import { Axios } from 'axios';
import { ApiRepositoryContract } from '@/infrastructure/http-layer/ApiRepository/contracts';

export class ApiRepository implements ApiRepositoryContract {
  constructor(private readonly coreApiInstance: Axios) {}

  async get(url: string, config?: Record<string, any>) {
    const response = await this.coreApiInstance.get(url, config).catch((error) => error);
    return response.response?.data || response.data;
  }

  async post(url: string, data: any, config?: Record<string, any>) {
    const response = await this.coreApiInstance.post(url, data, config).catch((error) => error);
    return response.response?.data || response.data;
  }

  async patch(url: string, data?: Record<string, any> | null, config?: Record<string, any>) {
    const response = await this.coreApiInstance.patch(url, data, config).catch((error) => error);
    return response.response?.data || response.data;
  }

  async put(url: string, data?: Record<string, any> | null, config?: Record<string, any>) {
    const response = await this.coreApiInstance.patch(url, data, config).catch((error) => error);
    return response.response?.data || response.data;
  }

  async delete(url: string, config?: Record<string, any>) {
    const response = await this.coreApiInstance.delete(url, config).catch((error) => error);
    return response.response?.data || response.data;
  }
}
