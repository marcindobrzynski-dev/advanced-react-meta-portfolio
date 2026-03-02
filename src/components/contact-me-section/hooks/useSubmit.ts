import { useState } from "react";
import type { SubmitResponse, SubmitData } from "./types";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<SubmitResponse | null>(null);

  const submit = async (data: SubmitData) => {
    const random = Math.random();
    setLoading(true);

    try {
      await wait(1000);

      if (random < 0.5) {
        throw new Error("Something went wrong.");
      }

      setResponse({
        type: "success",
        message: `Thanks for your submission ${data.name}, we will get back to you shortly!`,
      });
    } catch {
      setResponse({
        type: "error",
        message: "Something went wrong, please try again later!",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
