import { useState } from "react";

export default useApi = (api) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await api(...args);

    setLoading(false);
    setData(response.data);
    // setError(true);

    return response;
  };

  return { data, loading, error, request };
};
