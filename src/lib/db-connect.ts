import mongoose, { Connection } from "mongoose";
import type { ConnectOptions } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose:
    | {
        conn: Connection | null;
        promise: Promise<Connection> | null;
      }
    | undefined;
}

let cached = global.mongoose;

if (!cached) {
  cached = { conn: null, promise: null };
  global.mongoose = cached;
}

export async function connectToDatabase(): Promise<Connection> {
  if (cached!.conn) {
    return cached!.conn;
  }

  if (!cached!.promise) {
    const options: ConnectOptions = {};

    cached!.promise = mongoose
      .connect(MONGODB_URI, options)
      .then((mongooseInstance) => {
        const db = mongooseInstance.connection;

        console.log("MongoDB URI:", MONGODB_URI);
        console.log("Connecting to database:", mongoose.connection.name);

        db.on("connected", () => {
          console.log("MongoDB connected");
        });

        db.on("error", (err) => {
          console.error("MongoDB connection error:", err);
        });

        db.on("disconnected", () => {
          console.log("MongoDB disconnected");
        });

        return db;
      });
  }

  cached!.conn = await cached!.promise;
  return cached!.conn;
}
