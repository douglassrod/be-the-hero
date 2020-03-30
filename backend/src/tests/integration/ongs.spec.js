const request = require('supertest')
const app = require('../../app')
const connection = require('../../database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async() => {
        await connection.destroy()
    })

    it('should be able to create a ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Ong teste",
                email: "teste1@gmail.com",
                whatsapp: "11951430455",
                city: "São Paulo",
                uf: "SP"
            })

        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})