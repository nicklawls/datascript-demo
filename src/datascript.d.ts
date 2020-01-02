declare module 'datascript' {
    export function q(query: any, conn: any): any;

    export function create_conn(schema: any): any;

    export function empty_db(): any;
    export function db_with(db: any, entities: any[]): any;
}

