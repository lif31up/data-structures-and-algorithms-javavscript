export interface ILinkedListNode<T>{
	data: T;
	next: ILinkedListNode<T> | null;
}

class LinkedList<T> {
	public size: number;
	public head: ILinkedListNode<T>; public tail: ILinkedListNode<T>;
	private readonly match: () => boolean;
	private readonly destroy: (element: ILinkedListNode<T>) => T | null;

	constructor(match: () => boolean, destroy: () => T | null) {
		this.match = match;
		this.destroy = destroy;
		this.size = 0;
		this.head = null; this.tail = null;
	}

	private check(): boolean {
		return typeof this.match !== "undefined" || typeof this.destroy !== "undefined";
	}

	private insNext(element: ILinkedListNode<T>, data: T): number {
		if (!this.check()) return -1;
		let newElement: ILinkedListNode<T>;

		newElement = { data: data, next: null }
		if (element === null) {
			if (this.size === 0) {
				this.head = newElement;
				this.tail = newElement;
			}
		} else {
			if (element.next === null) this.tail = newElement;
			element.next = newElement;
		}
		this.size++;
		return 0;
	}
	remNext(element: ILinkedListNode<T>): T | null {
		if (!this.check()) return null;
		let oldElement: ILinkedListNode<T>;

		if (this.size === 0) return null;
		if (element === null) {
			oldElement = this.head;
			this.head = oldElement.next;
			if (this.size === 1) this.tail = this.head;
		} else {
			if (element.next === null) return null;
			oldElement = element.next;
			element.next = oldElement.next

			if (element.next === null) this.tail = element;
		}
		return this.destroy(oldElement);
	}
}