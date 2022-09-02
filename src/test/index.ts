
export const FAKE_ERROR = "Fake Error";

export function functionWithError() {
    throw FAKE_ERROR;
}

export async function asyncFunctionWithError() {
    throw FAKE_ERROR;
}

export function getError(func:() => unknown) {
    try {
        return func()
    } catch (error) {
        return error;
    }
}

export async function getErrorAsync(func: () => Promise<unknown>) {
    try {
        return await func();
    } catch (error) {
        return error;
    }
}

