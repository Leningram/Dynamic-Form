export interface FilesApiServiceContract {
  // TODO: типизировать после готовности на бэке;
  uploadFile: (file: any) => any;
  downloadFile: (name: string) => void;
}