import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
    HashRouter,
    BrowserRouter,
    Redirect,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Index1 = () => (
    <div>
        <h2>热门</h2>

        <div>
            <Link to={
                {
                    pathname: "/app/Quantity3/Index2",

                }
            }>
                跳转到专栏
      </Link>
        </div>
    </div>
);
const Index2 = () => (
    <div>
        <h2>热门2</h2>
    </div>
);
class Quantity3 extends Component {
    constructor() {
        super();
        this.state = {
            //配置左侧菜单
            numeList: [
                {
                    id: 1,
                    name: "工程量统计1",
                    path: "/app/Quantity3/Index1"
                },
                {
                    id: 2,
                    name: "工程量统计2",
                    path: "/app/Quantity3/Index2"
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <ul>
                            {/* 菜单项 */}
                            {this.state.numeList.map((item, index) => {
                                return (
                                    <li key={item.id}>
                                        <Link to={item.path}>
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <div>
                            <Switch>
                                <Route path="/app/Quantity3/Index1" exact component={Index1} />
                                <Route path="/app/Quantity3/Index2" component={Index2} />
                                {/* // 子路由找不到，重定向到第一个子路由 */}
                                <Redirect from='/app/Quantity3' to='/app/Quantity3/Index1'></Redirect>
                            </Switch>
                        </div>
                    </div>
                </HashRouter>
            </div >
        );
    }
}
export default Quantity3;
