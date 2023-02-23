export interface MeterModel {
  id: number,
  imageFilename: string,
  ldn: string,
  lastMeasure: {
    date: string,
    delta: number,
    value:number,
  },
  manualFilename: string,
  meterId: number,
  modifiedAt: string,
  name: string,
  pdr: string,
  registeredAt: string,
  suspended: boolean,
  target: number,
}
