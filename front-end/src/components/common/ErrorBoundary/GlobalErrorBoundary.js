import React, {Suspense} from 'react';
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "components/common/ErrorBoundary/ErrorFallback";
import Loading from "components/common/Loading/Loading";

function GlobalErrorBoundary({children}) {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Loading/>}>{children}</Suspense>
        </ErrorBoundary>
    );
}

export default GlobalErrorBoundary;