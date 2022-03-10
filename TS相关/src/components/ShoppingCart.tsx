import React, { Component } from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from 'react-icons/fi'
// 创建接口

interface Props { }
interface State {
    isOpen: boolean;
}

/**
 * props是组件对外的接口,而state是组件对内的接口
 * props 用于组件间数据传递,而state用于组件内部的数据传递
 *
 * state 是私有的,可以认为state是组件的私有属性
 *
 * 用setState()修改State
 *
 * 直接修改state,组件不会触发render函数，页面不会渲染、
 *
 * 正确的修改方式是使用setState()
 * onClick={() => { this.setState({ isOpen:!this.state.isOpen})}}
 */

/***
 * 
 * 构建函数constructor 是唯一初始化state的地方
 * constructor(props:Props){
         super(props)
         this.state = {
             isOpen:false
         }
     }
   State的更新是异步的
   
   调用setState后,state不会立刻改变,是异步操作
   不要依赖当前的State 计算下一个State
 */

/**
  * Props
  * 
  * props就是传入函数的参数,是从传入组件内部的数据,更准确地说
  * 是从父组件传递给子组件的数据
  * 
  * 
  * <div className={styles.robotList}>
        {rebots.map((r) => (
          <Robot id={r.id} email={r.email} name={r.name} />
        ))}
      </div>


      const Robot :React.FC<RobotProps> = ({id,name,email}) =>{
    return (
        <div className={styles.cardContainer}>
            <img alt="robot" src={`https://robohash.org/${id}`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}
  */



/***
 * Immutable
 * 
 * props 是只读属性的
 * 函数式编程
 * 中文: 不变的
 * 
 * 对象一旦创建就不可改变,只能通过销毁,重建来改变数据
 * 
 * 通过 判断内存地址的是否一致, 来确认对象是否有经过修改
 * ImmutableJS Redux,Observable(RxJS)
 */
class ShoppingCart extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            isOpen: false,
        };
        // //使用bind()可以总是在class 角度绑定关键词
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick = (e:React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
        // e.target 是事件发生的元素
        // e.current是事件处理绑定的元素
        console.log(e.target)
        console.log(e.currentTarget)
        if((e.target as HTMLElement).nodeName === 'SPAN'){
            this.setState({isOpen:!this.state.isOpen})
        }
        // this.setState({ isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <div className={styles.cartContainer}>
                <button
                    className={styles.button}
                    onClick={this.handleClick}
                >
                    <FiShoppingCart />
                  <span>购物车2(件)</span>
                </button>
                <div
                    className={styles.cartDropDown}
                    style={{ display: this.state.isOpen ? "block" : "none" }}
                >
                    <ul>
                        <li>robot 1</li>
                        <li>robot 2</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;
