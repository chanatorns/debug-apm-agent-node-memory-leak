const Redis = require('ioredis');

const REDIS_CONNECTION_NAME = 'brightstar-web';

class RedisClient {
    createClient({host, port}) {
        if (!this.client) {
            this.client = new Redis({
                host,
                port
            });

            this.setConnectionName(this.client);
        }

        return this.client;
    }

    createClusterClient({host, port}) {
        if (!this.clusterClient) {
            this.clusterClient = new Redis.Cluster([
                {
                    host,
                    port
                }
            ]);

            this.setConnectionName(this.clusterClient);
        }

        return this.clusterClient;
    }

    setConnectionName(client) {
        client.client('SETNAME', REDIS_CONNECTION_NAME);
    }
}

module.exports RedisClient
