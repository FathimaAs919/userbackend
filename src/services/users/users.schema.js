import { Type, getValidator } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main schema
export const usersSchema = Type.Object({
  id: Type.Number(),
  name: Type.String(),
  email: Type.String({ format: 'email' }),
  gender: Type.String(),
  deleted: Type.Boolean({ default: false })
}, { additionalProperties: false })

// Query schema
export const usersQuerySchema = Type.Object({}, { additionalProperties: true })

// Data schema (for create)
export const usersDataSchema = Type.Object({
  name: Type.String(),
  email: Type.String({ format: 'email' }),
  gender: Type.String(),
  deleted: Type.Optional(Type.Boolean())
}, { additionalProperties: false })

// Patch schema (for update)
export const usersPatchSchema = Type.Partial(usersDataSchema)

// Validators
export const usersDataValidator = getValidator(usersDataSchema, dataValidator)
export const usersPatchValidator = getValidator(usersPatchSchema, dataValidator)
export const usersQueryValidator = getValidator(usersQuerySchema, queryValidator)

// Resolvers (simple pass-through)
export const usersResolver = {}
export const usersExternalResolver = {}
export const usersDataResolver = async (data) => {
  return {
    ...data,
    deleted: false
  }
}
export const usersPatchResolver = async (data) => data
export const usersQueryResolver = async (query) => query