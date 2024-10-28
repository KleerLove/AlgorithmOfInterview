// 一个 state 变量的值永远不会在一次渲染的内部发生变化， 即使其事件处理函数的代码是异步的。
// React 会等到事件处理函数中的 所有 代码都运行完毕再处理你的 state 更新。
// 只有在你的事件处理函数及其中任何代码执行完成 之后，UI 才会更新。这种特性也就是 批处理
export default function Counter() {
    const [number, setNumber] = useState(0);

    // 每次点击只递增一次 +1
    // 设置 state 只会为下一次渲染变更 state 的值
    // 尽管你调用了三次 setNumber(number + 1)，但在 这次渲染的 事件处理函数中 number 会一直是 0，所以你会三次将 state 设置成 1
    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 1);
                setNumber(number + 1);
                setNumber(number + 1);
            }}>+3</button>
        </>
    )
}

// 使用更新函数
// React 会将此函数加入队列，以便在事件处理函数中的所有其他代码运行后进行处理。
// 在下一次渲染期间，React 会遍历队列并给你更新之后的最终 state。
export default function Counter() {
    const [number, setNumber] = useState(0);

    // 每次点击+3
    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
            }}>+3</button>
        </>
    )
}