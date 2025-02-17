// 定义 MedianFinder 类，用于动态计算数据流中的中位数
var MedianFinder = function() {
    // 初始化一个最大优先队列，用于存储数据流中较小的一半元素
    // 最大优先队列保证队列中的最大值始终在队首
    this.left = new MaxPriorityQueue();
    // 初始化一个最小优先队列，用于存储数据流中较大的一半元素
    // 最小优先队列保证队列中的最小值始终在队首
    this.right = new MinPriorityQueue();
};

// 向数据流中添加一个新的数字，并维护两个优先队列的平衡
MedianFinder.prototype.addNum = function(num) {
    // 检查两个优先队列的元素数量是否相等
    if (this.left.size() === this.right.size()) {
        // 如果相等，先将新元素插入到最小优先队列中
        this.right.enqueue(num);
        // 再将最小优先队列的队首元素（最小值）取出，插入到最大优先队列中
        // 这样可以确保最大优先队列存储较小的一半元素
        this.left.enqueue(this.right.dequeue().element);
    } else {
        // 如果不相等，说明最大优先队列的元素数量比最小优先队列多 1
        // 先将新元素插入到最大优先队列中
        this.left.enqueue(num);
        // 再将最大优先队列的队首元素（最大值）取出，插入到最小优先队列中
        // 以此来保持两个队列元素数量的平衡
        this.right.enqueue(this.left.dequeue().element);
    }
};

// 计算并返回当前数据流的中位数
MedianFinder.prototype.findMedian = function() {
    // 检查最大优先队列的元素数量是否多于最小优先队列
    if (this.left.size() > this.right.size()) {
        // 如果是，说明中位数就是最大优先队列的队首元素
        return this.left.front().element;
    } else {
        // 如果两个队列元素数量相等，中位数是两个队列队首元素的平均值
        return (this.left.front().element + this.right.front().element) / 2;
    }
};