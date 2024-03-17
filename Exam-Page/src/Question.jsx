import { useState } from "react";
import logo from "./2.jpg";
import "./App.css";
import {} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import Timer from "../Timer";
import Question from "./Questions_Name";
//import Conditions from "./Condition";



<img src={logo} width={80} height={80} alt="" className="logo" />;
const { Header, Sider, Content } = Layout;
const Layouts = () => {
  const [collapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const items1 = ["1", "2", "3"].map(() => ({}));
  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "white",
        }}
      >
        <div className="demo-logo" />
        <img src={logo} width="30" height="30" className="logo" alt="Logo" />
        <label htmlFor="text" className="name">
          Cyber
        </label>
        <label htmlFor="text" className="name1">
          Sigma
        </label>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{ flex: 1, minWidth: 5 }}
        />
        <div>
          <center>
            <Timer></Timer>
          </center>
        </div>
        <div>
          <Button type="text" onClick={() => {}}>
            {"Enter Full screen"}
          </Button>
          <Button type="text" onCLick={() => {}}>
            {"Previous"}
          </Button>
          <Button type="text" onClick={() => {}}>
            {"Next"}
          </Button>
        </div>
      </Header>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ background: "white", position: "relative" }}
        >
          <h6 className="section">
            SECTION 01:
            <Button type="button" onClick={() => {}}>
              {"SUBJECT"}
            </Button>{" "}
          </h6>

          <div className="buttons">
            <Button type="button">1</Button>
            <Button type="button">2</Button>
            <Button type="button">3</Button>
            <Button type="button">4</Button>
            <Button type="button">5</Button>
            <Button type="button">6</Button>
            <Button type="button">7</Button>
            <Button type="button">8</Button>
            <Button type="button">9</Button>
            <Button type="button">10</Button>
            <Button type="button">11</Button>
            <Button type="button">12</Button>
            <Button type="button">13</Button>
            <Button type="button">15</Button>
            <Button type="button">16</Button>
            <Button type="button">17</Button>
            <Button type="button">18</Button>
            <Button type="button">19</Button>
            <Button type="button">20</Button>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Button type="text" onClick={() => {}}>
              {"Submit Test"}
            </Button>
          </div>
        </Sider>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
        <Question></Question>  
        
        </Content>
        
      </Layout>

      <div style={{ position: "absolute", bottom: 25, right: 1560 }}>
        <Button type="text" onClick={() => {}}>
          Save and Next
        </Button>
      </div>

      <div style={{ position: "absolute", bottom: 20, right: 20 }}>
        <Button type="text" onClick={() => {}}>
          {"Mark for Review & Test"}
        </Button>
        <Button type="text" onClick={() => {}}>
          {"Clear Response"}
        </Button>
      </div>
    </Layout>
  );
};
export default Layouts;
