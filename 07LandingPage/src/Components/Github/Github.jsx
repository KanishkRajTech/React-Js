import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
function Github(){
//    const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect( () =>{
        fetch('https://api.github.com/users/KanishkRajTech')
        .then(respose => respose.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
    }, [])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Account: {data.login}
            <div className="flex flex-row  items-start mt-4">
                <div className="mr-4">
                    <img src={data.avatar_url} alt="User Avatar" width={300} />
                </div>
                <div className="text-left">
                    <h2 className="text-xl font-semibold">User Name: {data.name}</h2>
                    <h4>Public Repo: {data.public_repos}</h4>
                    <h4>Followers: {data.followers}</h4>
                </div>
            </div>
        </div>

    )
}

export default Github

// export const githubInfoLoader = async () => {
//    const response = await fetch('https://api.github.com/users/KanishkRajTech')
//    return response.json()
// }