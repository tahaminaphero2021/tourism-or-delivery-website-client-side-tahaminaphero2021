import React, { useEffect, useState } from 'react';


const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        
        fetch('https://agile-basin-74598.herokuapp.com/')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[]);

    
    const handleDelete = id => {
        const url = `https://agile-basin-74598.herokuapp.com//${id}`
        fetch(url, {
            method: "DELETE",
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){  
                alert("successfully deleted!!")
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
          
            }
            
        })

    
    }
    return (
        <div>
          
            <h2 className="mb-3 text-primary">This is manage services </h2>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleDelete(service._id) } className="btn btn-warning">Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;