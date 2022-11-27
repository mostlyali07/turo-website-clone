import "./App.css";
// works when >=4.20.0, recommended ✅
const items = [
  { label: "item 1", key: "item-1" }, // remember to pass the key prop
  { label: "item 2", key: "item-2" }, // which is required
  {
    label: "sub menu",
    key: "submenu",
    children: [{ label: "item 3", key: "submenu-item-1" }],
  },
];

// works when <4.20.0, deprecated when >=4.20.0 🙅🏻‍♀️
function App() {
  return (
    <>
    <Menu items={items} />;
      <Menu>
        <Menu.Item>item 1</Menu.Item>
        <Menu.Item>item 2</Menu.Item>
        <Menu.SubMenu title="sub menu">
          <Menu.Item>item 3</Menu.Item>
        </Menu.SubMenu>
      </Menu>
      ;
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center ahref pt-2">
            <a href="/">Turo has launched in New York! Tap to explore cars.</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
