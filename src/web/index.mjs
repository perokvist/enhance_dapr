import Fastify from 'fastify'
import Enhance from '@enhance/fastify-plugin'

const app = Fastify()

app.register(Enhance)

app.listen({ port: 80 }, console.log)