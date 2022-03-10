import React,{Component} from "react";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";
import rebots from "./mockdata/rebots.json";
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";

interface  Props {}
interface  State {
    robotGallery:any
    count:number
}
class  App extends Component<Props,State> {
    // ****** 生命周期的第一阶段:初始化阶段

    //***** 初始化组件:state
    constructor(props) {
        super(props);
        this.state = {
            robotGallery:[],
            count:0

        }
    }
    /**
     *
     * setState是同步的还是异步的是异步更新，同步执行
     * */

    //***** 初始化组件: 挂载页面的时候调用
    componentDidMount() {
        // 初始化网络请求

        fetch("https://jsonplaceholder.typicode.com/users").then(
            res => res.json()).then((data) => this.setState({robotGallery:data}))
    }
     /**
      * React 组件的生命周期
      * Mounting : 创建虚拟DOM ,渲染UI
      *
      *
      * Updating : 更新虚拟DOM 重新渲染UI
      *
      *
      *Unmounting:删除虚拟DOM,移除UI
      *
      *
      * **/

     // ****************生命周期第二个阶段: 更新
     // 在组件接收到一个新的props(更新后)被调用 副作用
      componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any) {
     }
     //没有被弃用
    //  state getDerivedStateFromUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): any {
    // }

    // 更新阶段 有资源开销
    // shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    //   return nextState.some !== this.state.some
    //   }

    // 发生了更新后,ui 重新渲染
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
    }
    // ****生命周期第三个阶段:销毁
    // 可以当作析构函数destructor来使用
    componentWillUnmount() {

    }

    render(){
        // @ts-ignore
        // @ts-ignore
        return (
            <div className={styles.app}>
                <div className={styles.appHeader}>
                    <img src={logo} className={styles.appLogo} alt="logo" />
                    <h1>罗伯特机器人酷炫掉渣天online购物平台的名字要长</h1>
                </div>
                <button onClick={() =>{
                    /** callback 回调函数
                     * () =>{
                        console.log("count",this.state.count)
                    })
                     * */
                    /***
                     * this.setState( { count:preState.count+1},
                     () =>{
                        console.log("count",this.state.count)
                    })
                     this.setState( { count:preState.count+1},
                     () =>{
                        console.log("count",this.state.count)
                    })
                     *
                     *
                     * */
                    this.setState((preState,preprops) =>{
                        return { count:preState.count+1}},
                            () =>{
                        console.log("count",this.state.count)
                    })
                    this.setState((preState,preprops) =>{
                            return { count:preState.count+1}},
                        () =>{
                            console.log("count",this.state.count)
                        })

                }}>Click</button>
                <span>count:{this.state.count}</span>
                <ShoppingCart />
                <div className={styles.robotList}>
                    {this.state.robotGallery.map((r) => (
                        <Robot id={r.id} email={r.email} name={r.name} />
                    ))}
                </div>
            </div>
        );
    }

}

export default App;
