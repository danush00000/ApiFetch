import React,{useEffect,useState} from 'react'

const Fetchdata = () => {
const[data,setData]=useState([]);
const[loading,setLoading]=useState(true);
const[error,setError]=useState(null);

const url='https://jsonplaceholder.typicode.com/users';

    useEffect(()=>{
        fetchdatas();
    },[]);

const fetchdatas=async()=>{
    const getapi=await fetch(url);
    if( getapi.ok){
        setData(await getapi.json());
        setLoading(false);
    }
    else{
        setError("data error");
        setLoading(false);
    }
    
}

  return (
    <div>
        {
            loading==true ?<>data Loading....</> : data.map((values,index)=>(
                <li key={index}>{values.name}</li>
            ))
        }
    </div>
  )
}

export default Fetchdata