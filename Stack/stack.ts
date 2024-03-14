import LinkedList from "../LinkedList/linkedlist";

class Stack<T> {
	public list: LinkedList<T>;
	private readonly maxSize: number;

	constructor(match: () => boolean, destroy: () => T | null, maxLength) {
		this.list = new LinkedList(match, destroy);
		this.maxSize = maxLength;
	}

	public isEmpty(): boolean {
		return this.list.size === 0;
	}
	public isFull(): boolean {
		return this.list.size === this.maxSize;
	}

	public push(data: T): number {
		if (this.isFull()) console.log("queue is full")
		if (this.list.insNext(null, data)) return 0;
	}
	public pop(): T | null {
		if (this.isEmpty()) console.log("queue is empty")
		const penultimate = this.list.getPenultimate();
		return this.list.remNext(penultimate);
	}
}

export default Stack;