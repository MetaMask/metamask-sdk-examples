import { useEffect, useState } from "react";

export const Message = ({
  message,
  type,
}: {
  message: string;
  type: "user" | "system";
}) => {
  const [answering, setAnswering] = useState(true);

  useEffect(() => {
    if (type === "system") {
      setTimeout(() => {
        setAnswering(false);
      }, message.length * 12);
    }
  }, [message, type]);

  return (
    <>
      {type === "user" ? (
        <div className="bg-gray-800 w-fit pl-5 pr-12 py-4 rounded-lg ml-auto">
          <p className="text-gray-50">{message}</p>
        </div>
      ) : (
        <>
          {answering ? (
            <div>Answering...</div>
          ) : (
            <div className="bg-orange-100 pl-5 pr-12 py-4 rounded-lg max-w-lg">
              <h3 className="font-bold text-gray-600">TRAVIS:</h3>
              <p className="text-gray-600">{message}</p>
            </div>
          )}
        </>
      )}
    </>
  );
};
