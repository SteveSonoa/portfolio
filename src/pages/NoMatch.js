import React from 'react';
import { Link } from 'react-router-dom';

import StyleProvider from '../hooks/styleContext';
import { Text } from '../components';

export const NoMatch = () => (
    <StyleProvider className="text">
        <Text tag='h1'>Well This Is Awkward...</Text>
        <Text tag='p'>We can't seem to find the page you're looking for.</Text>
        <Link to='/'>Try Again</Link>
    </StyleProvider>


);

export default NoMatch;
