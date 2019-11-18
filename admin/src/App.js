import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import apiProvider from 'ra-iri-jsonapi-client';
import authProvider from './auth/authProvider';
import { UserList } from './Resources/users';
import { settings, httpClient } from './api/config';


const provider = apiProvider('http://api.forge.test/api', { ...httpClient, ... settings });

const App = () => (
    <Admin authProvider={authProvider} dataProvider={provider}>
        <Resource name="users" list={UserList} />
        <Resource name="invoices" list={ListGuesser} />
        <Resource name="absences" list={ListGuesser} />
    </Admin>
);

export default App;
