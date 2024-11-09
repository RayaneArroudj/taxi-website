import { memo } from "react";

// components/LoadingSpinner.jsx
export const LoadingSpinner = memo(() => (
  <div className="flex justify-center items-center h-full">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />
  </div>
));

LoadingSpinner.displayName = "LoadingSpinner";
