import { Database, DatabaseEnv } from '../../src/database';
import { TestDatabaseDriver } from './driver';

export class TestDatabaseEnv extends DatabaseEnv {}

export class TestDatabase extends Database {
	name = 'test';
	driver: TestDatabaseDriver;
	driverType = TestDatabaseDriver;
	envType = TestDatabaseEnv;
}
