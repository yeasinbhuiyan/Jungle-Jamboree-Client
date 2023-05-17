import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import MyToysTable from "./MyToysTable";


const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [myToys,setMyToys] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/allToys?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyToys(data)
        })
    },[])
    return (
        <div className="overflow-x-auto w-full mx-auto my-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                Action
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Edite</th>
            </tr>
          </thead>
          <tbody>
                     {
                        myToys.map(toy => <MyToysTable key={toy._id} toy={toy}></MyToysTable>)
                     }
          
          </tbody>
        
        </table>
      </div>
    );
};

export default MyToys;