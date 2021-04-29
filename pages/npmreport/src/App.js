import React, {useState} from "../_snowpack/pkg/react.js";
import {ConfigProvider, DatePicker, message} from "../_snowpack/pkg/antd.js";
import zhCN from "../_snowpack/pkg/antd/lib/locale/zh_CN.js";
import moment from "../_snowpack/pkg/moment.js";
import "../_snowpack/pkg/moment/locale/zh-cn.js";
import "../_snowpack/pkg/antd/dist/antd.css.proxy.js";
moment.locale("zh-cn");
export default function App() {
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    message.info(`您选择的日期是: ${value ? value.format("YYYY年MM月DD日") : "未选择"}`);
    setDate(value);
  };
  return /* @__PURE__ */ React.createElement(ConfigProvider, {
    locale: zhCN
  }, /* @__PURE__ */ React.createElement("div", {
    style: {width: 400, margin: "100px auto"}
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement("div", {
    style: {marginTop: 16}
  }, "当前日期：", date ? date.format("YYYY年MM月DD日") : "未选择")));
}
;
