export enum Fields {
  'name' = 'field1',
  'age' = 'field2',
  'custom field' = 'field3',
}

type FieldsObject = {
  [K in keyof typeof Fields]: (...args: any[]) => void
}
