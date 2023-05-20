import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import MyToysTable from "./MyToysTable";
import Swal from 'sweetalert2'


const MyToys = () => {
  const { user } = useContext(AuthContext)
  const [myToys, setMyToys] = useState([])

  const [sorting, setSorting] = useState('')

  const handleAscending = () => {
    setSorting(1)


  }

  const hanldeDescending = () => {
    setSorting(-1)

  }

  useEffect(() => {
    fetch(`http://localhost:5000/myToys?email=${user?.email}&srt=${sorting }`)
      .then(res => res.json())
      .then(data => {
        setMyToys(data)
      })
  }, [sorting])



  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/remove/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {

            if (data.deletedCount > 0) {
              const withOutDeleted = myToys.filter(mf => mf._id !== id)
              setMyToys(withOutDeleted)

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

            }

          })

      }
    })






  }

  return (
    <div className="overflow-x-auto w-full mx-auto my-10">
      <div className="flex gap-8 px-10 py-10">
        <button onClick={handleAscending} className="btn btn-success">Ascending</button>
        <button onClick={hanldeDescending} className="btn btn-success">Descending</button>
      </div>
      <table className="table w-full text-center mx-auto">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Toy Name</th>
            <th>Price</th>
            <th>Edite</th>
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            myToys.map(toy => <MyToysTable key={toy._id} toy={toy} handleDelete={handleDelete}></MyToysTable>)
          }

        </tbody>

      </table>
    </div>
  );
};

export default MyToys;