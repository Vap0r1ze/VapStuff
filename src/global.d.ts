export {}

declare global {
  const Java: {
    type: (typeName: string) => any;
  }

  type UUID = string
}
