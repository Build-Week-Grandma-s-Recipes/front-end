import './App.css';
import { Switch, Route} from 'react-router-dom'
import AddRecipe from './ComponentUnit3/AddRecipe'
import Research from './ComponentUnit3/Research'
import Home from './ComponentUnit3/Home'
import Recipe from './ComponentUnit3/Recipe'
import Login from './ComponentUnit2/Login'
import Register from './ComponentUnit2/Registration'
import PrivateRoute from './ComponentUnit3/PrivateRoute'
import Edit from './ComponentUnit3/Edit'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/register' component={Register}/>
        <PrivateRoute path='/addrecipe' component={AddRecipe} />
        <PrivateRoute path='/research' component={Research} />
        <PrivateRoute path='/recipe/:id' component={Recipe}/>
        <PrivateRoute path='/home' component={Home} />
        <PrivateRoute path='/edit/:id' component={Edit} />
      </Switch>
    </div>
  );
}

export default App;
