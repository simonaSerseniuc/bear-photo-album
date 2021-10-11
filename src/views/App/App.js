import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import AlbumDetails from '../AlbumDetails/AlbumDetails.js';
import AlbumList from '../AlbumList/AlbumList.js';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Route>
                    <Switch>
                        <Redirect exact from="/" to="/albums" />
                        <Route path="/albums/:id" component={AlbumDetails} />
                        <Route path="/albums" component={AlbumList} />
                    </Switch>
                </Route>
            </Router>
        </div>
    );
}

export default App;
