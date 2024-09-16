export class User {
    private firstName: string;
    private lastName: string;
    private age: number;
    private phoneNumber: string;
    private locationLong: number;
    private locationLat: number;

    constructor(firstName: string, lastName: string, age: number, phoneNumber: string, locationLong: number, locationLat: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.locationLong = locationLong;
        this.locationLat = locationLat;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public getPhoneNumber(): string {
        return this.phoneNumber;
    }

    public setPhoneNumber(phoneNumber: string): void {
        this.phoneNumber = phoneNumber;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public getLocation(): { long: number, lat: number } {
        return { long: this.locationLong, lat: this.locationLat };
    }

    public setLocation(locationLong: number, locationLat: number): void {
        this.locationLong = locationLong;
        this.locationLat = locationLat;
    }
}
