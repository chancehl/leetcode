import { describe, test, expect } from 'bun:test'

import { Queue } from './index'

describe('queue', () => {
    describe('queue.peek()', () => {
        test('returns a value if the queue length >= 1', () => {
            const queue = new Queue([1, 2, 3, 4, 5])

            expect(queue.peek()).toEqual(1)
        })

        test('returns undefined if the queue length === 0', () => {
            const queue = new Queue()

            expect(queue.peek()).toEqual(undefined)
        })
    })

    describe('queue.enqueue()', () => {
        test('can enqueue a number to an empty queue', () => {
            const queue = new Queue()

            queue.enqueue(1)

            expect(queue.elements).toEqual([1])
        })

        test('can enqueue a number to an existing queue', () => {
            const queue = new Queue([1, 2, 3])

            queue.enqueue(4)

            expect(queue.elements).toEqual([1, 2, 3, 4])
        })

        test('can enqueue multiple elements', () => {
            const queue = new Queue()

            queue.enqueue(1)
            queue.enqueue(2)
            queue.enqueue(3)
            queue.enqueue(4)

            expect(queue.elements).toEqual([1, 2, 3, 4])
        })
    })

    describe('queue.dequeue()', () => {
        test('returns undefined if queue length === 0', () => {
            const queue = new Queue()

            expect(queue.dequeue()).toEqual(undefined)
        })

        test('returns a value if queue length >= 1', () => {
            const queue = new Queue([1, 2, 3])

            expect(queue.dequeue()).toEqual(1)
        })

        test('can dequeue multiple elements', () => {
            const queue = new Queue([1, 2, 3])

            expect(queue.dequeue()).toEqual(1)
            expect(queue.elements).toEqual([2, 3])
            expect(queue.dequeue()).toEqual(2)
            expect(queue.elements).toEqual([3])
            expect(queue.dequeue()).toEqual(3)
            expect(queue.elements).toEqual([])
            expect(queue.dequeue()).toEqual(undefined)
            expect(queue.elements).toEqual([])
        })
    })
})
