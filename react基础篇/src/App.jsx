import logo from './logo.svg'
import './index.css'
import './css.css'
import { React, Component, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
//  Hook 


/***
 * 
 * 
 *  在我们继续之前，请记住 Hook 是：
    完全可选的。 你无需重写任何已有代码就可以在一些组件中尝试 Hook。但是如果你不想，你不必现在就去学习或使用 Hook。
    100% 向后兼容的。 Hook 不包含任何破坏性改动。
    现在可用。 Hook 已发布于 v16.8.0。
    Hook 是向下兼容的。本页面为有经验的 React 用户提供一个对 Hook 的概览。这是一个相当快速的概览，如果你有疑惑，可以参阅下面这样的黄色提示框
 */

/**
 * 
 * @returns Hook 解决了我们五年来编写和维护成千上万的组件时遇到的各种各样看起来不相关的问题。无论你正在学习 React，或每天使用，或者更愿尝试另一个和 React 有相似组件模型的框架，你都可能对这些问题似曾相识
 */
function HocExemles() {
    // 声明一个新的叫做"count"的state变量
    const [count, setCount] = useState(0);
    // 声明多个state 变量
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Lean Hooks' }])
    return (
        <div>
            <p> You clicked {count} times </p>
            <p> You clicked {fruit} State</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={() => setFruit(fruit + 1)}>
                Click me
            </button>
        </div>
    )
}
/**
 * 
 * Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。Hook 不能在 class 组件中使用 —— 这使得你不使用 class 也能使用 React。（我们不推荐把你已有的组件全部重写，但是你可以在新组件里开始使用 Hook。）
    React 内置了一些像 useState 这样的 Hook。你也可以创建你自己的 Hook 来复用不同组件之间的状态逻辑。我们会先介绍这些内置的 Hook。
 * @returns 

    React 组件需要在渲染后执行某些操作。React 会保存你传递的函数（我们将它称之为 “effect”），并且在执行 DOM 更新之后调用它。在这个 effect 中，我们设置了 document 的 title 属性，不过我们也可以执行数据获取或调用其他命令式的 API。
    useEffect 会在每次渲染后都执行吗？ 是的
    effect 更像是渲染结果的一部分 —— 每个 effect “属于”一次特定的渲染。
 /


// 等价的class 实例



// class Example extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }

//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//                     Click me
//                 </button>
//             </div>
//         );
//     }
// }


//    Hook 和函数组件


const ExampleAts = (props) => {
    // 你可以在这里Hook

    return <div />;
}

// 或者这样使用
// 但现在我们为它们引入了使用 React state 的能力，所以我们更喜欢叫它”函数组件”。
function Example(props) {
    // 你可以在这使用Hook
    return <div />
}

// 它可以让你“钩入” React 的特性。

// 例如，useState 是允许你在 React 函数组件中添加 state 的 Hook。稍后我们将学习其他 Hook。

// 什么时候我会用 Hook？ 如果你在编写函数组件并意识到需要向其添加一些 state，以前的做法是必须将其它转化为 class。现在你可以在现有的函数组件中使用 Hook。


// 执行副作用副作用操作

 /**
     * 你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
     */

function App() {
    return (
        <>
            <HocExemles />
            <Testample />
            <Exampleapp />
        </>

    )
}
function Testample() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    });
    return (
        <div>
            <p>You clickedTSS {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}



class Exampleapp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        );
    }
}


/***
 * 你可能认为需要单独的 effect 来执行清除操作。但由于添加和删除订阅的代码的紧密性，所以 useEffect 的设计是在同一个地方执行。如果你的 effect 返回一个函数，React 将会在执行清除操作时调用它：
 */

// function FriendStatus(props) {
//  const [ isOnline,setIsOnline ] = useState(null);

//  useEffect( () =>{
//     //   
//      function handleStatusChange(status){
//          setIsOnline(status.isOnline)
//      }
//      ChatAPI.subscribeToFriendStatus(props.friend.id,handleStatusChange)
//     //  每个 effect 都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分。
//      return function cleanup(){
//          ChatAPI.unsubscribeToFriendStatus(
//              props.friend.id,handleStatusChange
//          )
//      }
//  })
//  if(isOnline === null){
//      return 'Loading'
//  }return isOnline ? 'Online':'offline'
// }


export default App
