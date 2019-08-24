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
        case 'toggle-highlight': {
            return {
                ...state,
                showHighlight: !state.showHighlight
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
            <button onClick={() => dispatch({ type: Styles.dark })}>Dark</button>
            <button onClick={() => dispatch({ type: Styles.light })}>Light</button>
        </>
    );
}

const DisplayStyle = () => {
    const { style } = useStyleState()
    return <div>{`The current style is ${style}`}</div>
}

const HighlightContext = () => {
    const dispatch = useStyleDispatch();
    return (
        <div className="highlight" onMouseEnter={() => dispatch({ type: 'toggle-highlight' })} onMouseLeave={() => dispatch({ type: 'toggle-highlight' })} style={{ cursor: 'pointer' }}>
            <Text tag='p'>What is my context?</Text>
        </div>
    )
}

const StyleProvider = ({ children, className }) => {
    const [state, dispatch] = useReducer(styleReducer, { style: Styles.light, showHighlight: false, showToggle: false })
    return (
        <StyleStateContext.Provider value={state}>
            <StyleDispatchContext.Provider value={dispatch}>
                <div className="context-container">
                    <div className={`context-content ${className} ${state.style} ${state.showHighlight ? 'highlight' : ''}`} style={{padding: '10px 20px'}}>
                        {children}
                    </div>
                    <div className="context-controller-toggle" onClick={() => dispatch({ type: 'toggle-controller' })}>{state.showController ? 'Hide' : 'Show'}<br />Context</div>
                    {state.showController && (
                        <div className="context-controller side-padding-small">
                            <DisplayStyle />
                            <UpdateStyles />
                            <HighlightContext />
                        </div>
                    )}
                </div>
            </StyleDispatchContext.Provider>
        </StyleStateContext.Provider>
    )
};

StyleProvider.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string.isRequired
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
