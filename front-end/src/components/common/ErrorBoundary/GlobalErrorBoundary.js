import React, {Suspense} from 'react';
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "pages/ErrorPage/ErrorFallback";
import {useQueryErrorResetBoundary} from "react-query";
import Loading from "components/common/Loading/Loading";

function GlobalErrorBoundary({children}) {
    const {reset} = useQueryErrorResetBoundary();
    return (
        <ErrorBoundary onReset={() => reset} FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Loading/>}>
              
            </Suspense>
        </ErrorBoundary>
    );
}

export default GlobalErrorBoundary;