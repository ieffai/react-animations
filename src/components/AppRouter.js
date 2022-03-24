import React, { memo } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { publicRoutes } from '../routes/publicRoutes';
import { CSS_ROUTE } from '../routes/routesConsts';


const AppRouter = () => {
    const location = useLocation();
    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={1000}
                classNames='page'
                unmountOnExit
            >
                <Routes>
                    {publicRoutes.map((route) => (
                        <Route
                            key={route.path}
                            element={route.element}
                            path={route.path}
                        />
                    ))}
                    <Route
                        path="*"
                        element={<Navigate to={CSS_ROUTE} replace />}
                    />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default memo(AppRouter);