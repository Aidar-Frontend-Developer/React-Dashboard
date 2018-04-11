import React from "react";
import { Layout, Menu } from "antd";
import Navigation from "./navigation";
import "./app.css";

const { Header, Content, Footer } = Layout;

export const App = () => (
    <Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                style={{ lineHeight: "64px" }}
            >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
        <Content className="content">
            <Navigation />
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
                Content
            </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
            Ant Design ©2016 Created by Ant UED
        </Footer>
    </Layout>
);
