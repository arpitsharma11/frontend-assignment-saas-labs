import { useQuery } from "@tanstack/react-query";

const useGetKickstarter = (url) => {
  const fetchKickstarter = async () => {
    const response = await fetch(url);
    const data = response.json();

    return data;
  };

  return useQuery({ queryKey: ["kickstarter"], queryFn: fetchKickstarter });
};

export default useGetKickstarter;
