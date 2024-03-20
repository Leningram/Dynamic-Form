export interface FilesServiceContract {
  // TODO: типизировать после готовности на бэке;
  uploadFile: (file: any) => any;
  downloadFile: (name: string) => any;
}