import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
export default function Abstract() {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const Navigate = useNavigate();
  const setT = (e) => {
    setTitle(e.target.value);
  }
  const setA = (e) => {
    setAbstract(e.target.value);
  }
  const check = () => {
    // console.log(abstract);
    // alert("Checking")
    var no = 1;
    for (var i = 0; i < abstract.length; i++) {
      // console.log("length=", abstract.length);
      var ch = abstract[i];
      if (ch === " ") {
        no++;
      // console.log(ch);
      console.log("n = ",no);
      
    }
  }
    if (no > 5) {
      // console.log(no)
      alert("Constraint Failed above 250 words Please Enter abstract within 250 words")
    }
    else {
      return true
    }
  
}

  return (
    <div>
      <div className='main2'>
        <div className='loginform'>
          <div className='container'>
            <h1>Submit Your Abstract</h1><br />
            <p>Enter Title</p>
            <input type="text" placeholder='Enter Title' onChange={setT} /><br /><br />
            <p>Enter Your Abstract (Costraint 250 words)</p>
            <textarea rows={"10"} cols={"50"} placeholder="Enter Abstract" onChange={setA}></textarea><br /><br />
            <Link className='btn btn-light' onClick={
              check()
              }>Submit Abstract</Link><br /><br />
            <div className='pointers'>
              <Link to={'/Register'}><span>Haven't Registered?</span></Link><br/><br/>
              <Link to={'/'}><span>Go Back to Home</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
