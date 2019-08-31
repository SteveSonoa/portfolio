import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { Styles } from '../lib/constants';
import { Text } from '../components';

const StyleStateContext = createContext();
const StyleDispatchContext = createContext();

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
        case 'toggle-controller': {
            return {
                ...state,
                showController: !state.showController
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

const UpdateStyles = () => {
    const dispatch = useStyleDispatch();
    return (
        <>
            <button onClick={() => {
                dispatch({ type: Styles.dark });
                dispatch({ type: 'toggle-controller'})
            }}>Dark</button>
            <button onClick={() => {
                dispatch({ type: Styles.light })
                dispatch({ type: 'toggle-controller' })
            }}>Light</button>
        </>
    );
}

const DisplayStyle = () => {
    const { style } = useStyleState()
    return <div>{`The current style is ${style}`}</div>
}

const StyleProvider = ({ children, className, footer }) => {
    const [state, dispatch] = useReducer(styleReducer, { style: Styles.light, showToggle: false })
    return (
        <StyleStateContext.Provider value={state}>
            <StyleDispatchContext.Provider value={dispatch}>
                <div className={`context-container ${footer && 'footer'}`}>
                    <div className={`context-content ${className} ${state.style} ${state.showController ? 'highlight' : ''}`}>
                        {children}
                    </div>
                    <div className={`context-controller-toggle pointer ${state.showController ? 'active' : ''}`} onClick={() => dispatch({ type: 'toggle-controller' })}>{state.showController ? 'Hide' : 'Show'}<br />Context</div>
                    {state.showController && (
                        <div className={`context-controller side-padding-small ${footer && 'last'}`}>
                            <DisplayStyle />
                            <UpdateStyles />
                        </div>
                    )}
                </div>
            </StyleDispatchContext.Provider>
        </StyleStateContext.Provider>
    )
};

StyleProvider.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string.isRequired,
    footer: PropTypes.bool
};

StyleProvider.defaultProps = {
    footer: false
};

export const useStyleState = () => {
    const context = useContext(StyleStateContext)
    if (context === undefined) {
        throw new Error('useStyleState must be used within a StyleProvider')
    }
    return context
}

export const useStyleDispatch = () => {
    const context = useContext(StyleDispatchContext)
    if (context === undefined) {
        throw new Error('useStyleDispatch must be used within a StyleProvider')
    }
    return context
}

export default StyleProvider;
