import type { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'
import { Type } from '@sinclair/typebox'

const HealthResponseSchema = Type.Object({
  status: Type.Literal('ok'),
  timestamp: Type.String(),
})

const ContactBodySchema = Type.Object({
  name: Type.String({ minLength: 2, maxLength: 120 }),
  email: Type.String({ format: 'email', maxLength: 200 }),
  message: Type.String({ minLength: 10, maxLength: 4000 }),
})

const ContactResponseSchema = Type.Object({
  status: Type.Literal('received'),
  timestamp: Type.String(),
})

export const apiRoutes: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.get(
    '/health',
    {
      schema: {
        response: {
          200: HealthResponseSchema,
        },
      },
    },
    async () => ({
      status: 'ok' as const,
      timestamp: new Date().toISOString(),
    }),
  )

  fastify.post(
    '/contact',
    {
      schema: {
        body: ContactBodySchema,
        response: {
          200: ContactResponseSchema,
        },
      },
    },
    async (request) => {
      const { name, email } = request.body
      request.log.info({ name, email }, 'contact form submission received')
      return {
        status: 'received' as const,
        timestamp: new Date().toISOString(),
      }
    },
  )
}
