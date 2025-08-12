// backend/config/redisClient.js
// const { createClient } = require('redis');
// import {createClient} from 'redis';
// const client = createClient({ url: process.env.REDIS_URL });

// client.on('error', (err) => console.error('Redis Client Error', err));

// async function connectRedis() {
//   if (!client.isOpen) await client.connect();
// }

// module.exports = { client, connectRedis };

// import Redis from "ioredis";
// import dotenv from "dotenv";
// dotenv.config();

// const client = new Redis({
//   host: process.env.REDIS_HOST || "127.0.0.1",
//   port: process.env.REDIS_PORT || 6379,
//   password: process.env.REDIS_PASSWORD || undefined
// });

// const connectRedis = async () => {
//   try {
//     await client.ping();
//     console.log("✅ Redis connected successfully");
//   } catch (error) {
//     console.error("❌ Redis connection failed:", error);
//   }
// };

// // export default redis;


// export { client, connectRedis };
// // redisClient.js


// export const redis = new Redis();


// redisClient.js
// import Redis from "ioredis";
// import dotenv from "dotenv";
// dotenv.config();


// export const client = new Redis({
//   host: '127.0.0.1',
//   port: 6379
// });
// const connectRedis = async () => {
//   try {
//     await client.ping();
//     console.log("✅ Redis connected successfully");
//   } catch (error) {
//     console.error("❌ Redis connection failed:", error);
//   }
// };

// export default client; // ✅ Default export
// export { connectRedis };


// backend/config/redisClient.js
import { createClient } from "redis";

const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";

const redisClient = createClient({
  url: redisUrl,
});

redisClient.on("error", (err) => {
  console.error("❌ Redis Client Error:", err);
});

redisClient.on("connect", () => {
  console.log("✅ Connected to Redis:", redisUrl);
});

await redisClient.connect();

export default redisClient;
