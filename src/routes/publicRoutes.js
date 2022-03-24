import { CSSTransition, Transition, SwitchTransition, TransitionGroup } from '../components';
import {
    CSS_ROUTE, SWITCH_TRANSITION_ROUTE, TRANSITION_GROUP_ROUTE, TRANSITION_ROUTE,
} from './routesConsts';


export const publicRoutes = [

    {
        path: CSS_ROUTE,
        element: <CSSTransition />,
        name: 'CSS Transition',
        index: true,

    },
    {
        path: TRANSITION_ROUTE,
        element: <Transition />,
        name: 'Transition',
    },
    {
        path: SWITCH_TRANSITION_ROUTE,
        element: <SwitchTransition />,
        name: 'Switch Transition',
    },
    {
        path: TRANSITION_GROUP_ROUTE,
        element: <TransitionGroup />,
        name: 'Transition Group',
    },
];