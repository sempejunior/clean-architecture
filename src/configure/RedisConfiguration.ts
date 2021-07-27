export class RedisConfiguration {

    redis = require('redis');
    client = this.redis.createClient({host: "localhost"
        ,port: "6379",password:"Redis2019!"});

    public connectToRedis() {
        this.client.on('connect', function () {
            console.log('Connected to Redis!');
        });
    }

    public getRedisClient() {
        return this.client;
    }
}