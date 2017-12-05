process.env.ENVIRONMENT = 'test';
const request = require('supertest');
var index = require('../../index');
var chai = require('chai');
var expect = chai.expect;

var app = index.express;

describe('Endpoint testing', function () {
    before((done) => {
        console.log("Before execution...");
        done();
    });

    it('GET getAll,expect to PASS(200 status)', function (done) {
        request(app)
            .get('/api/getAll')
            .end((err, result) => {
                expect(err).to.be.null;
                expect(result.status).to.equal(200, "Status should be green(200)");                
                done();
            });
    });

    it('GET getById,expect to PASS(200 status)', function (done) {
        request(app)
            .get('/api/getById')
            .end((err, result) => {
                expect(err).to.be.null;
                expect(result.status).to.equal(200, "Status should be green(200)");                
                done();
            });
    });

    it('POST createNew,expect to PASS(200 status)', function (done) {
        request(app)
            .post('/api/createNew')
            .end((err, result) => {
                expect(err).to.be.null;
                expect(result.status).to.equal(200, "Status should be green(200)");                
                done();
            });
    });

    it('PUT expect to PASS(200 status)', function (done) {
        request(app)
            .put('/api/updateOne')
            .end((err, result) => {
                expect(err).to.be.null;
                expect(result.status).to.equal(200, "Status should be green(200)");                
                done();
            });
    });

    it('DELETE expect to PASS(200 status)', function (done) {
        request(app)
            .delete('/api/deleteOne')
            .end((err, result) => {
                expect(err).to.be.null;
                expect(result.status).to.equal(200, "Status should be green(200)");                
                done();
            });
    });

    after((done) => {
        console.log("After execution ...");
        done();
    });
});