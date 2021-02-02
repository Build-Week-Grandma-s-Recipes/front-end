import './App.css';
import { Switch, Route} from 'react-router-dom'
import AddRecipe from './ComponentUnit3/AddRecipe'
import Research from './ComponentUnit3/Research'
import Home from './ComponentUnit3/Home'
import Recipe from './ComponentUnit3/Recipe'
import Login from './ComponentUnit2/Login'
import Register from './ComponentUnit2/Registration'

function App() {
  return (
    <div className="App">
     
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/addrecipe' component={AddRecipe} />
        <Route path='/research' component={Research} />
        <Route path='/recipe/:id' component={Recipe}/>
        <Route path='/home' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
