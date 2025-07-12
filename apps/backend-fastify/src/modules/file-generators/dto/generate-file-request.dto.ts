export interface GenerateFileRequestDto {
  ids: number[]
  fileType: 'csv' | 'xlsx'
}
