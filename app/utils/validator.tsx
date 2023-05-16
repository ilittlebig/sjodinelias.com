interface ValidationSchema {
  [key: string]: (value: any, values: any) => string | undefined
}

export const createValidator = (schema: ValidationSchema) => {
  return (values: any) => {
    let errors: Record<string, string> = {}

    Object.keys(schema).forEach((key) => {
      let value = values[key]
      let error = schema[key](value, values)
      if (error) {
        errors[key] = error
      }
    })

    return errors
  }
}

export const required = (value: any) => {
  if (!value || value.trim() === "") {
    return "Krävs"
  }
  return undefined
}
