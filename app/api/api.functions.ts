/*
 *  Function to handle the response of the fetch API
 *  It returns the response data if the response is ok, otherwise it throws an error
 */
export const handleResponse = async (response: Response) => {
  const text = await response.text();
  let data: any = null;

  try {
    data = text ? JSON.parse(text) : null;
  } catch {
  }

  if (!response.ok) {
    const errorMessage =
      (data && data.message) || text || response.statusText || "Unknown error";
    throw new Error(errorMessage);
  }

  return data;
};

