import { ColumnType } from './column-type';
import * as DataTypes from './column-values';

/**
 * Base interface for column options
 */
export interface BaseColumnOptions {
	name: string;
	type: ColumnType;
	default?: string | DataTypes.ColumnValue;
	primaryKey?: boolean;
	notNull?: boolean;
}

// -----------------------------------------------------------------------------
// Boolean type
// -----------------------------------------------------------------------------

/**
 * Bool column options
 */
export interface BoolColumnOptions extends BaseColumnOptions {
	default?: DataTypes.BoolValue;
	type: ColumnType.BOOL;
}

// -----------------------------------------------------------------------------
// Integer types
// -----------------------------------------------------------------------------

/**
 * Base class for integer column options
 */
export interface BaseIntColumnOptions extends BaseColumnOptions {
	default?: DataTypes.IntegerValue;
	autoIncrement?: boolean;
}

/**
 * Tiny int column options
 */
export interface TinyIntColumnOptions extends BaseIntColumnOptions {
	type: ColumnType.TINYINT;
}

/**
 * Small int column options
 */
export interface SmallIntColumnOptions extends BaseIntColumnOptions {
	type: ColumnType.SMALLINT;
}

/**
 * Int column options
 */
export interface IntColumnOptions extends BaseIntColumnOptions {
	type: ColumnType.INT;
}

/**
 * Big int column options
 */
export interface BigIntColumnOptions extends BaseIntColumnOptions {
	type: ColumnType.BIGINT;
}

// -----------------------------------------------------------------------------
// Decimal & Floating types
// -----------------------------------------------------------------------------

/**
 * Base interface for decimal types
 */
export interface BaseDecimalColumnOptions extends BaseColumnOptions {
	default?: DataTypes.DecimalValue;
}

/**
 * Decimal column options
 */
export interface DecimalColumnOptions extends BaseDecimalColumnOptions {
	significant: number;
	decimal: number;
	type: ColumnType.DECIMAL;
}

/**
 * Float column options
 */
export interface FloatColumnOptions extends BaseDecimalColumnOptions {
	type: ColumnType.FLOAT;
}

/**
 * Double column options
 */
export interface DoubleColumnOptions extends BaseDecimalColumnOptions {
	type: ColumnType.DOUBLE;
}

// -----------------------------------------------------------------------------
// Date & Time types
// -----------------------------------------------------------------------------
export type DateDefaultValues = string | DataTypes.DateValue;

/**
 * Date column options
 */
export interface DateColumnOptions extends BaseColumnOptions {
	default?: DateDefaultValues;
	type: ColumnType.DATE;
}

/**
 * Time column options
 */
export interface TimeColumnOptions extends BaseColumnOptions {
	default?: DateDefaultValues;
	type: ColumnType.TIME;
}

/**
 * DateTime column options
 */
export interface DateTimeColumnOptions extends BaseColumnOptions {
	default?: DateDefaultValues;
	type: ColumnType.DATETIME;
}

// -----------------------------------------------------------------------------
// Text types
// -----------------------------------------------------------------------------

/**
 * Base interface for text column options
 */
export interface BaseTextColumnOptions extends BaseColumnOptions {
	default?: DataTypes.TextValue;
}

/**
 * Char column options
 */
export interface CharColumnOptions extends BaseTextColumnOptions {
	type: ColumnType.CHAR;
}

/**
 * VarChar column options
 */
export interface VarCharColumnOptions extends BaseTextColumnOptions {
	length: number;
	type: ColumnType.VARCHAR;
}

/**
 * Text column options
 */
export interface TextColumOptions extends BaseTextColumnOptions {
	type: ColumnType.TEXT;
}

// -----------------------------------------------------------------------------
// Blob types
// -----------------------------------------------------------------------------

/**
 * Base interface for blob column options
 */
export interface BaseBlobColumnOptions extends BaseColumnOptions {
	default?: DataTypes.BlobValue;
}

/**
 * Blob column options
 */
export interface BlobColumnOptions extends BaseBlobColumnOptions {
	type: ColumnType.BLOB;
}

/**
 * Column options
 */
export type ColumnOptions =
	| BoolColumnOptions
	| TinyIntColumnOptions
	| SmallIntColumnOptions
	| IntColumnOptions
	| BigIntColumnOptions
	| DecimalColumnOptions
	| FloatColumnOptions
	| DoubleColumnOptions
	| DateColumnOptions
	| TimeColumnOptions
	| DateTimeColumnOptions
	| CharColumnOptions
	| VarCharColumnOptions
	| TextColumOptions
	| BlobColumnOptions;
