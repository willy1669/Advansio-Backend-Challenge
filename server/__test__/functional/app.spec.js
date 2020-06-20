const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../dist/app.js');

//cofigure chai to use chai http
chai.use(chaiHttp);
const expect = chai.expect;

describe('Server Connnection test', () => {
    it('should say welcome to twitee whe connected', (done) => {

        Chai.request(app).get('/').end((err, res) => {
            expect(res.text).to.equal(' Listening from port 3004 \/n Error connecting to Db');
            done();
        });
    });

    after(done => {
        process.exit(0);
    });
})
