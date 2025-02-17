import 'jasmine';
import { TestDatabase } from '../../util/database';
import { ColumnType } from '../../../src/column';
import { DatabaseConnectionOptions } from '../../../src/database';
import { gt } from '../../../src/conditions';
import { DatabaseFunctions } from '../../../src/functions';

describe('Function - Current Timestamp', () => {
	it('can select current UTC time', async () => {
		const db = new TestDatabase();
		await db.init({
			connectionOptions: {} as DatabaseConnectionOptions,
		});

		await db.getQueryRepository().find({
			columns: [
				{
					query: DatabaseFunctions.currentTimestamp(),
					as: 'timestamp',
				},
			],
		});

		expect(db.driver.capturedSql).toEqual(
			'SELECT CURRENT_TIMESTAMP AS "timestamp"'
		);
	});

	it('can query where current timestamp', async () => {
		const db = new TestDatabase();
		await db.init({
			connectionOptions: {} as DatabaseConnectionOptions,
		});

		await db.getQueryRepository().find({
			table: 'timestamps',
			where: {
				time: DatabaseFunctions.currentTimestamp(),
			},
		});

		expect(db.driver.capturedSql).toEqual(
			'SELECT * FROM "timestamps" WHERE ("time" = CURRENT_TIMESTAMP)'
		);
	});

	it('can query where gt current timestamp', async () => {
		const db = new TestDatabase();
		await db.init({
			connectionOptions: {} as DatabaseConnectionOptions,
		});

		await db.getQueryRepository().find({
			table: 'timestamps',
			where: {
				time: gt(DatabaseFunctions.currentTimestamp()),
			},
		});

		expect(db.driver.capturedSql).toEqual(
			'SELECT * FROM "timestamps" WHERE ("time" > CURRENT_TIMESTAMP)'
		);
	});

	it('can insert current timestamp', async () => {
		const db = new TestDatabase();
		await db.init({
			connectionOptions: {} as DatabaseConnectionOptions,
		});

		await db.getQueryRepository().insert({
			table: 'timestamps',
			records: [{ time: DatabaseFunctions.currentTimestamp() }],
		});

		expect(db.driver.capturedSql).toEqual(
			'INSERT INTO "timestamps" ("time") VALUES (CURRENT_TIMESTAMP)'
		);
	});

	it('can update current timestamp', async () => {
		const db = new TestDatabase();
		await db.init({
			connectionOptions: {} as DatabaseConnectionOptions,
		});

		await db.getQueryRepository().update({
			table: 'timestamps',
			set: { time: DatabaseFunctions.currentTimestamp() },
		});

		expect(db.driver.capturedSql).toEqual(
			'UPDATE "timestamps" SET "time" = CURRENT_TIMESTAMP'
		);
	});

	it('can default to current timestamp', async () => {
		const db = new TestDatabase();
		await db.init({
			connectionOptions: {} as DatabaseConnectionOptions,
		});

		await db.getDataDefinitionRepository().createTable({
			name: 'timestamps',
			columns: [
				{
					name: 'created_at',
					type: ColumnType.TIMESTAMP,
					default: DatabaseFunctions.currentTimestamp(),
				},
			],
		});

		expect(db.driver.capturedSql).toEqual(
			'CREATE TABLE "timestamps" (' +
				'"created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP' +
				')'
		);
	});
});
