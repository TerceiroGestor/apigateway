import { AppDataSource } from "../data-source";
import { Log } from "../entities/Log";
export const logRepository = AppDataSource.getRepository(Log)