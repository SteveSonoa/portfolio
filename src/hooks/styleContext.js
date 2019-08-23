import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { Styles } from '../lib/constants';

const StyleStateContext = createContext()
const StyleDispatchContext = createContext()

function styleReducer(state, action) {
    switch (action.type) {
        case Styles.dark: {
            return {
                ...state,
                style: Styles.dark
            }
        }
        case Styles.light: {
            return {
                ...state,
                style: Styles.light
            }
        }
        case 'toggle-highlight': {
            return {
                ...state,
                highlight: !state.highlight
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

const StyleProvider = ({ children, className }) => {
    const [state, dispatch] = useReducer(styleReducer, { style: Styles.light, highlight: false })
    return (
        <StyleStateContext.Provider value={state}>
            <StyleDispatchContext.Provider value={dispatch}>
                <div className={`${className} ${state.highlight ? 'highlight' : ''}`} style={{padding: '10px 20px'}}>
                    {children}
                </div>
            </StyleDispatchContext.Provider>
        </StyleStateContext.Provider>
    )
};

StyleProvider.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string.isRequired
};

function useStyleState() {
    const context = useContext(StyleStateContext)
    if (context === undefined) {
        throw new Error('useStyleState must be used within a StyleProvider')
    }
    return context
}

function useStyleDispatch() {
    const context = useContext(StyleDispatchContext)
    if (context === undefined) {
        throw new Error('useStyleDispatch must be used within a StyleProvider')
    }
    return context
}

export { StyleProvider, useStyleState, useStyleDispatch }
