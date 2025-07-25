import logo from "../../public/assets/images/logo.png";

interface LoadingType {
  message?: string;
}

const Loading = ({ message }: LoadingType) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <svg
        className="animate-spin h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>

      <div className="mt-4">
        <img src={logo} alt="Logo" className="max-w-xs max-h-25" />
      </div>

      <span className="inline-block mt-4 font-medium text-sm">{message}</span>
    </div>
  );
};

export default Loading;
