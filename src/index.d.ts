export declare interface JsonZoneFile {
    $origin?: string
    $ttl?: number
    txt?: { name: string, txt: string, ttl?: number }[]
    soa?: { name: string, minimum: number, expire: number, retry: number, refresh: number, serial: number, rname: string, mname: string,  ttl?: number }[]
    ns?: { name: string, host: string, ttl?: number }[]
    a?: { name: string, ip: string, ttl?: number }[]
    aaaa?: { name: string, ip: string, ttl?: number }[]
    cname?: { name: string, alias: string, ttl?: number }[]
    mx?: { name: string, preference: number, host: string, ttl?: number }[]
    ptr?: { name: string, fullname: string, host: string, ttl?: number }[]
    srv?: { name: string, target: string, priority: number, weight: number, port: number, ttl?: number }[]
    spf?: { name: string, data: string, ttl?: number }[]
    uri?: { name: string, target: string, priority: number, weight: number, ttl?: number }[]
}

export declare function makeZoneFile(jsonZoneFile: JsonZoneFile, template?: string): string;

export declare function parseZoneFile(text: string): JsonZoneFile;

export declare class ZoneFile {
    constructor(zoneFile: JsonZoneFile|string);
    toJSON(): JsonZoneFile;
    toString(): string;
}
