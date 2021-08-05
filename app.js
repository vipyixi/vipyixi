const App = {
  template: `
  <div>
    <h2>{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <p>{{name}}</p>
  </div>
  `,
  data() {
    return{
      message: "自我介绍",
      name: "李大白"
    }   
  },
  methods: {
    btnClick(){

    }
  }
};
export default App;