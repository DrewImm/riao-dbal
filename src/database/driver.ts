import { DatabaseConnectionOptions } from './connection-options';
import {
	DatabaseQueryOptions,
	DatabaseQueryResult,
	DatabaseQueryTypes,
} from '../query';
import { DatabaseQueryBuilder } from '../dml/query-builder';
import { DataDefinitionBuilder } from '../ddl/ddl-builder';
import { Builder } from '../builder';
import { SchemaQueryRepository } from '../schema';
import { QueryRepository } from '../dml';
import { DataDefinitionRepository } from '../ddl';

export class DatabaseDriver {
	public async connect(options: DatabaseConnectionOptions): Promise<this> {
		throw new Error('DatabaseDriver missing connect method');
	}

	public async disconnect(): Promise<void> {
		throw new Error('DatabaseDriver missing disconnect method');
	}

	public async query(
		options: DatabaseQueryTypes
	): Promise<DatabaseQueryResult> {
		throw new Error('DatabaseDriver missing query method');
	}

	public async getVersion(): Promise<string> {
		throw new Error('DatabaseDriver missing getVersion method');
	}

	protected toDatabaseQueryOptions(
		from: DatabaseQueryTypes
	): DatabaseQueryOptions {
		if (from instanceof Builder) {
			return from.toDatabaseQuery();
		}

		return from;
	}
}
