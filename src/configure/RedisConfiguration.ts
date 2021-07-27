export class RedisConfiguration {

    redis = require('redis');
    client = this.redis.createClient('127.0.0.1', '6379');

    constructor(){
        this.connectToRedis();
    }

    private connectToRedis() {
        this.client.on('connect', function () {
            console.log('Connected to Redis!');
        });
    }

    public getRedisClient() {
        return this.client;
    }
}