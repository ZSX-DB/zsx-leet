type CarType = 1 | 2 | 3

class ParkingSystem {
    private readonly record = new Map<CarType, number>()
    constructor(big: number, medium: number, small: number) {
        this.record.set(1, big).set(2, medium).set(3, small)
    }

    addCar(carType: CarType): boolean {
        if ((this.record.get(carType) as number) > 0) {
            this.record.set(carType, (this.record.get(carType) as number) - 1)
            return true
        }
        return false
    }
}

export default ParkingSystem    
