import { ReactElement, Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { BigSpinner } from "src/components/BigSpinner.tsx";
import { ErrorBoundary } from "src/components/ErrorBoundary.tsx";
import { Layout } from "./components/Layout.tsx";

import { ClipboardContextProvider } from "src/contexts/ClipboardContext.tsx";
import { FileContextProvider } from "src/contexts/FileContext.tsx";

const GeneratorPage = lazy(() => import("src/pages/Generator/GeneratorPage.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <GeneratorPage />,
      },
    ],
  },
]);

export function Root(): ReactElement {
  return (
    <Suspense fallback={<BigSpinner />}>
      <ClipboardContextProvider>
        <FileContextProvider>
          <RouterProvider router={router} />
        </FileContextProvider>
      </ClipboardContextProvider>
    </Suspense>
  );
}
