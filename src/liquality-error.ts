import { ErrorMeaning, ErrorType } from "./types";

// @TODO Think more about message and message templates.
export class LiqualityError<SourceError> extends Error {
    private _code: number;
    private _errorType: ErrorType;
    private _msgDescription: string;
    private _rawError: SourceError;
    private _devMsg: unknown;

    constructor(error: Partial<ErrorMeaning & {rawError: SourceError}>){
        super();
        if(error?.code) this._code = error?.code;
        if(error?.errorType) this._errorType = error?.errorType;
        if(error?.message) this.message = error?.message;
        if(error?.devMsg) this._devMsg= error?.devMsg;
        if(error?.rawError) this._rawError = error?.rawError;
    }

    public get code() {
        return this._code;
    }

    public get errorType() {
        return this._errorType;
    }

    public get msgDescription() {
        return this._msgDescription;
    }

    public get rawError() {
        return this._rawError;
    }

    public get devMsg() {
        return this._devMsg;
    }

}
