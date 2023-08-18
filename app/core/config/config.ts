import fastify, { FastifyInstance } from "fastify";
import fastifyJwt from "@fastify/jwt";
import cors from '@fastify/cors';
import fastifyCompress from "@fastify/compress";
import helmet from "@fastify/helmet";
import fastifyCaching from "@fastify/caching";

export const app: FastifyInstance = fastify({
  logger: true
})

export const _secure_headers = async () => {
    await app.register(
      helmet,
      {

        contentSecurityPolicy: {
        useDefaults: false,
        directives: {
          'default-src': ["'self'"]
        }
      }
      }
    );
    await app.register(cors,  { 
        hook: 'preHandler',
        delegator: (req: any, callback) => {
          const corsOptions = {
            // This is NOT recommended for production as it enables reflection exploits
            origin: false
          };
      
          // do not include CORS headers for requests from localhost
          if (/^localhost$/m.test(req.headers.origin)) {
            corsOptions.origin = false
          }
      
          // callback expects two parameters: error and options
          callback(null, corsOptions)
        },
    })
}

export const _optimise = async () => {
    await app.register(
      fastifyCaching,
      {privacy: fastifyCaching.privacy.PRIVATE}
    )
    await app.register(
        fastifyCompress,
        { 
            requestEncodings: ['gzip'],
            // onUnsupportedRequestEncoding: (request: any, encoding: any) => {
            //     return {
            //         statusCode: 415,
            //         code: 'UNSUPPORTED',
            //         error: 'Unsupported Media Type',
            //         message: 'We do not support the ' + encoding + ' encoding.'
            //     }
            // },
            // onInvalidRequestPayload: (request, encoding, error) => {
            //     return {
            //         statusCode: 400,
            //         code: 'BAD_REQUEST',
            //         error: 'Bad Request',
            //         message: 'This is not a valid ' + encoding + ' encoded payload: ' + error.message
            //     }
            // }
        }
      )
}

export const jwt: any = fastifyJwt;
export const port: any = process.env.PORT || 3000;