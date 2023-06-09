class Queue<T> {
    elements: T[]

    constructor(values: T[] = []) {
        this.elements = values
    }

    peek(): T {
        return this.elements[0]
    }

    enqueue(value: T): void {
        this.elements.push(value)
    }

    dequeue(): T | undefined {
        return this.elements.shift()
    }

    toString(): string {
        return this.elements.join(',')
    }
}

export { Queue }
