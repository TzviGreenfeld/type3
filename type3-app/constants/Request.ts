export class Request {
    private id: string;
    private requestUserId: string;
    private responseUserId: string;
    private type: string;
    private status: string;
    private result: string;
    private createdAt: string;
    private updatedAt: string;

    constructor(
        id: string,
        requestUserId: string,
        responseUserId: string,
        type: string,
        status: string,
        result: string,
        createdAt: string,
        updatedAt: string
    ) {
        this.id = id;
        this.requestUserId = requestUserId;
        this.responseUserId = responseUserId;
        this.type = type;
        this.status = status;
        this.result = result;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getRequestUserId(): string {
        return this.requestUserId;
    }

    public setRequestUserId(requestUserId: string): void {
        this.requestUserId = requestUserId;
    }

    public getResponseUserId(): string {
        return this.responseUserId;
    }

    public setResponseUserId(responseUserId: string): void {
        this.responseUserId = responseUserId;
    }

    public getType(): string {
        return this.type;
    }

    public setType(type: string): void {
        this.type = type;
    }

    public getStatus(): string {
        return this.status;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public getResult(): string {
        return this.result;
    }

    public setResult(result: string): void {
        this.result = result;
    }

    public getCreatedAt(): string {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: string): void {
        this.createdAt = createdAt;
    }

    public getUpdatedAt(): string {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: string): void {
        this.updatedAt = updatedAt;
    }
}