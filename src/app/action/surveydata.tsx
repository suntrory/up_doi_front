

async function fetchUser() {
    //   const [user, setUser] = useState([]);
    const response = await fetch('http://localhost:3333/user', { cache: 'default' });
    return response.json();
}

export async function MyComponent() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch('http://localhost:3333/getCount');
    //         const data = await response.json();
    //         setData(data);

    //         console.log(data)
    //     }

    // });
    // const albumsData = fetchUser()

    // const [artist] = await Promise.all([albumsData])
    // console.log(artist);
    const artist = await fetchUser().finally();


    return (

        <div>
            {/* {data.map((itm:any) => {
        return (<p>{itm.id}</p>)
      })} */}
            <p>{artist.name}</p>
            <p>{artist.sex}</p>
        </div>
    );
}

