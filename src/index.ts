
import { createMock } from 'ts-auto-mock';
import { TestRpcService } from './contracts/test-contract';

const rpcProviderMock = createMock<TestRpcService>({
    joinArray: () => 'Foo bar baz'
});

console.log(rpcProviderMock.joinArray([[2, 4], [3, 7]]));
