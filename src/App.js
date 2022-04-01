import './App.css';
import React, {useEffect, useState} from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';


function App() {

  const [animals, setAnimals] = useState([])
  const [commentArray, setCommentArray] = useState([])
  const [comments, setComments] = useState("")
  // const [commentEditBool, setCommentEditBool] = (false)

  useEffect(() => {
      fetch('http://localhost:9292/animals')
      .then(response => response.json())
      .then(animals => setAnimals(animals))
  }, [])
  
  useEffect(() => {
    fetch('http://localhost:9292/comments')
    .then(response => response.json())
    .then(comments => setCommentArray(comments))
}, [])

  function handleAddComment (newComment) {
    setCommentArray([...commentArray, newComment])
  }

  function handleDelete(id) {
    const deletedComment = commentArray.filter((comment) => comment.id !== id)        
    setCommentArray(deletedComment);
  };

  function handleClickEditBtn(e) {
    e.preventDefault()
    const clickedCommentText = e.target.parentElement.parentElement.parentElement.firstChild.innerText;
    setComments(clickedCommentText)
  }

  const handleChangeEditComment = (e) => {
    setComments(e.target.value);
  }

  function onSubmitEditComment(e) {
    e.preventDefault()
    const id = e.target.id;
    fetch(`http://localhost:9292/comments/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            comments: comments, 
        }),
    })
    .then((r) => r.json())
    .then(data => {
      const updatedArray = commentArray.map((comment) => {
        if (comment.id === data.id) {
          return data
        } else {
          return comment
        }
      })
      setCommentArray(updatedArray);
    })
    // fetch('http://localhost:9292/comments')
    // .then(response => response.json())
    // .then(comments => setCommentArray(comments))
  }


  return (
    <div className="App">
      <header className ="App-header">
        <h2 className='header-banner'> 
          <img className='img-banner' src={require('./Images/HeaderBanner.png')} alt="Shelter-Banner"/> 
        </h2>
      </header>
      <NavBar 
        animals={animals} 
        commentArray={commentArray} 
        onAddComment={handleAddComment}
        onDelete={handleDelete}
        handleClickEditBtn={handleClickEditBtn}
        handleChangeEditComment={handleChangeEditComment}
        onSubmitEditComment={onSubmitEditComment}
        
      />
      <Footer />
    </div>
  );
}

export default App;
