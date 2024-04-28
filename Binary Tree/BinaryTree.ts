interface BSTNode<T> {
	data: T
	left: BSTNode<T>
	right: BSTNode<T>
}

class BSTTree<T> {
	public size: number = 0;
	private readonly compare: (key1: number, key2: number)=> number = null;
	private readonly destroy: (node :BSTNode<T>)=>T = null;
	public root: BSTNode<T> = null;

	constructor(destroy:(node :BSTNode<T>) => T, compare: (key1: number, key2: number) => number) {
		this.compare = compare;
		this.destroy = destroy;
		this.size = 0;
		this.root = null;
	}

	private destroy_tree(){}
	private insLeft(node: BSTNode<T>, data: T): number {
		if (node.left === null) return 1;
		node.left = {data: data, left: null, right: null}; return 0;
	}
	private insRight(node: BSTNode<T>, data: T): number {
		if (node.right === null) return 1;
		node.right = {data: data, left: null, right: null}; return 0;
	}
	private remLeft(node: BSTNode<T>): T | null {
		if (node.left === null) return null;
		return this.destroy(node.left);
	}
	private remRight(node: BSTNode<T>): T | null {
		if (node.right === null) return null;
		return this.destroy(node.right);
	}
	private searchLeftLeafPrev(node: BSTNode<T>): BSTNode<T> | null {
		if (node === null) return null;
		if (node.left.left === null) return node;
		this.searchLeftLeafPrev(node.left)
	}
	private mergeTrees(tree1: BSTTree<T>, tree2: BSTTree<T>): BSTTree<T> | null {
		if (tree1.root === null || tree2.root === null) return null;
		const newTree = new BSTTree<T>(tree1.destroy, tree1.compare);
		const prevSub= this.searchLeftLeafPrev(tree1.root);
		newTree.root = prevSub.left; this.remLeft(prevSub);
		newTree.root.left = tree1.root; newTree.root.right = tree2.root;
		return newTree;
	}
}