import { DataSource } from "typeorm";
import { pessoanode } from "./pessoanode";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "mngrplus",
    database: "test_benchmark",
    synchronize: true,
    logging: true,
    entities: [pessoanode],
    subscribers: [],
    migrations: [],
})