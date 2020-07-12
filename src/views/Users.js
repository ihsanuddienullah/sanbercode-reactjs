import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory
} from 'react-router-dom';
import Topic from './Topic';

export default function Topics() {
    let match = useRouteMatch();
    let history = useHistory();
    return (
        <div className="App">
            <header className="App-header">
                Topics
            </header>

            <div className="App">
                <header className="App-header">
                    <ul>
                        <div style={{ cursor: 'pointer'}} onClick={() => history.push('about')}>Navigate</div> {/* Navigasi ke halaman about */}
                        <li><Link to={`${match.url}/react-router`}>Topics</Link></li>
                    </ul>
                </header>
                <Switch>
                    <Route path={`${match.url}/:topicId`}>
                        <Topic/>
                    </Route>
                    <Route path={match.url}>
                        <h1>Pilih topik : </h1>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}