import request from 'supertest';
import app from '../../server/app';
import baseUrl from '../utils/baseUrl';
import mock from '../utils/mocks';

afterAll(() => {
  jest.resetAllMocks();
});

describe('CREATETWIT', () => {
  it('Should create a twit for a user', async () => {
    const res = await request(app)
      .post(`${baseUrl}/twit//user/createTwit`)
      .send(mock.twit);
    const { status, message, twit } = res.body;

    expect(status).toBe(true);
    expect(message).toEqual('twit created successfully');
    expect(twit).toEqual(mock.twit.body);
  });
});
