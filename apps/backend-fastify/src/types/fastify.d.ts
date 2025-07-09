import '@fastify/mysql'

declare module 'fastify' {
  interface FastifyInstance {
    mysql: import('mysql2/promise').Pool
  }
}
