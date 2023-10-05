import axios from "axios";

export const createTodo = async (data) => {
    const { data: response } = await axios.post('https://crudcrud.com/api/626bf4791bd24b9e9d34abb8cb0e402d/todos', data);
    return response.data;
};

export const getTodoData = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const res = await fetch('https://crudcrud.com/api/626bf4791bd24b9e9d34abb8cb0e402d/todos');
    return res.json();
};


// export const DataFetcher=() => {
//   const { data, isLoading, error } = useQuery('data', async () => {
//     const response = await fetch('https://api.example.com/endpoint');
//     return response.json();
//   });

//   if (isLoading) {
//     return <p>Loading data...</p>;
//   }

//   if (error) {
//     return <p>Error fetching data.</p>;
//   }

//   return <p>Data: {JSON.stringify(data)}</p>;
// }

