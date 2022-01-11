import React,{useState} from "react";

export default function Wordtext(props) {
    // Declare a new state variable, which we'll call "count"

  const [text, settext] = useState("");
  const [ftext, findtext] = useState("Write text here");
  const [rtext, replacetext] = useState("Write text here");
  
//   text="change text ";        wrong way of changing text
//   settext("change text");     correct way of changing text
// -----------------------------------------------------------------------------------------------------------------
  const handleup=()=>{
    //   settext("Button is clicked");
    //   console.log("Button is clicked");

    let newtext=text.toUpperCase();
    settext(newtext);
    props.showalert("Uppercase successful","success");
  }
  const handlechange=(event)=>{
    //   console.log("Onchange is clicked");
      settext(event.target.value);
  }
// -----------------------------------------------------------------------------------------------------------------------
  const handlelo=()=>{
    //   settext("Button is clicked");
    //   console.log("Button is clicked");

    let newtext=text.toLowerCase();
    settext(newtext);
    props.showalert("Lowercase successful","success");

  }
  const handleclear =()=>{
      let newtext="";
      settext(newtext);
  }
  const handleca =()=>{
      let mytext= text.charAt(0);
      let newtext= mytext.toUpperCase();
      settext(newtext+text.slice(1));
  }
  

  const findchange=(event)=>{
      findtext(event.target.value)
  }
  const replacechange=(event)=>{
      replacetext(event.target.value);
}
  const handlefindreplace=()=>{
      let newtext=text.replaceAll(ftext,rtext);
      settext(newtext);
  }
  
  
  return (
      <>
    <div>
      <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.title}</h1>
        <textarea className="form-control" value={text} onChange={handlechange} id="mybox" rows="8" style={{background:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'black'}}></textarea>   
      </div>
      <button type="button" className="btn btn-primary mx-2" onClick={handleup}>Convert to Uppercase</button>
      {/* ----------------------------------------------------------------------------------------------------------------------------- */}
      <button type="button" className="btn btn-primary mx-2" onClick={handlelo}>Convert to Lowercase</button>
      <button type="button" className="btn btn-primary mx-2" onClick={handleclear}>Clear</button>
      <button type="button" className="btn btn-primary mx-2" onClick={handleca} >Capitalise</button>
      
     <div className="replacing" id="findcontainer" >
      <textarea className="form-control my-2" value={ftext} onChange={findchange} id="fbox" rows="1" style={{background:props.mode==='dark'?'grey':'white'}}></textarea>   
      <textarea className="form-control" value={rtext} onChange={replacechange} id="fbox" rows="1" style={{background:props.mode==='dark'?'grey':'white'}}></textarea>   
      <button type="button" className="btn btn-primary mx-2 my-2" id="findbox" onClick={handlefindreplace} >Find and Replace</button>
      </div>
    </div>


    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Text Analysis</h2>
       <p>{(text==="" )? 0: text.trim().split(" ").length} words and {text.length} characters</p>
       <p>{0.008* text.split(" ").length} minutes to read</p>
       <h2>preview</h2>
       <p>{text.length>0?text:"write your text in the above box for preview"}</p>
    </div>
    </>
  );
}
