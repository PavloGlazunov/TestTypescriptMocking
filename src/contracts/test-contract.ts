export interface TestRpcService {
    echo(message: string): void;
    joinArray(array: Array<[number, number]>): string;
}