

function Features() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-.447.894L15 18m0-8V5.618a1 1 0 00-.553-.894l-4-2A1 1 0 009 3v4m6 3L9 7m6 3v6m-6-6l-4.553-2.276A1 1 0 003 8.618v6.764a1 1 0 00.447.894L9 18m0-8v6m0 0v4m0-4h6"
          />
        </svg>
      ),
      title: "Secure payments",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h11M9 21V10M9 21h6M9 3v7M4 21h16a1 1 0 001-1V7a1 1 0 00-1-1H4a1 1 0 00-1 1v13a1 1 0 001 1z"
          />
        </svg>
      ),
      title: "Free shipping over 89€",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.38 12.34l-8.17 8.18a1 1 0 01-1.42 0l-8.17-8.18a5.94 5.94 0 010-8.42 6 6 0 018.42 0 6 6 0 018.42 8.42z"
          />
        </svg>
      ),
      title: "Unique and original design",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 16.5L5.75 19l.75-3.25-2.5-2.5 3.25-.25L9.75 10l1 3.25 3.25.25-2.5 2.5.75 3.25-4-2.5zM20.75 9.75L19 5.25 15.5 6.75l-3.5-1.5 3.5-1.5L20.75 2l.75 4.25 2.5 2.5-2.5 2.5z"
          />
        </svg>
      ),
      title: "Premium quality",
    },
  ];

  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="">{feature.icon}</div>
            <h3 className="text-lg font-medium text-gray-700">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features