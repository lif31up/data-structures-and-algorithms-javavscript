import LinkedList, {ILinkedListNode} from "../LinkedList/LinkedList";

class Queue<T> {
	public list: LinkedList<T>;
	private readonly maxSize: number;

	constructor(match: () => boolean, destroy: () => T | null, maxSize) {
		this.list = new LinkedList<T>(match, destroy);
		this.maxSize = maxSize;
	}

	public isEmpty(): boolean {
		return this.list.size === 0;
	}
	public isFull(): boolean {
		return this.list.size === this.maxSize;
	}

	public enqueue(data: T): number {
		if (this.isFull()) console.log("queue is full")
		if (this.list.insNext(null, data)) return 0;
	}
	public dequeue(): T | null {
		if (this.isEmpty()) console.log("queue is empty")
		return this.list.remNext(null);
	}
}

export default Queue;