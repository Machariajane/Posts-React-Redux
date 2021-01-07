import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';


function App() {
  return (
    <div className="App">
      
      <Postform />  
      <hr />
      <Posts />
    </div>
  );
}
// in this case parent passes props to children component 
//if a child component wants to talk to a parent component ?
//we use props,but we pass in a reference to a method as props to the child component 
export default App;
//for properties you are sure going to be passed ,
//pass the props as attributes e.g above name 
//all this attributes are bundled together as properties
//for properties you are not sure of passs them as children
//this also applys for dyanmic html contents 
//pass it in between the tages and call as props.children
//in functional components props.name
// in class components this.props.name 
//props are immutable,their values cant be changrd

