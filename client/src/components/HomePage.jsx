import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const HomePage = () => (
        <MuiThemeProvider>
            <Card className="container">
                <CardTitle title="App" subtitle="this is homepage." />
            </Card>
        </MuiThemeProvider>
);

export default HomePage;