// export const useGetData = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(false);
//     useEffect(() => {
//         const getData = async () => {
//         try {
//             const response = await fetch("https://api.github.com/users");
//             const data = await response.json();
//             setData(data);
//             setLoading(false);
//         } catch (error) {
//             setLoading(false);
//             setError(error);
//         }
//         };
//         getData();
//     }, []);
//     return { data, loading, error };
//     }

import { FILES } from "../mocks/files";

export const useGetData = () => {
  const all = FILES;
  const categories = FILES.map((file) => file.category);
  return { all, categories };
};
