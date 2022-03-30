import React, { useState } from 'react'
// import { NavLink } from "react-router-dom";
import Home from './Home';
import AnimalContainer from './AnimalContainer';
import Adopters from './Adopters';
import AboutUs from './AboutUs';
import Comments from './Comments';
// import CommentDisplay from './CommentDisplay';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function NavBar({animals, commentArray}) {

    const [comments, setComments] = useState("")
    // const [commentArray, setCommentArray] = useState([])

    // const renderComments = commentArray.map((comment) => <CommentDisplay key={comments.id} {...comment}/>)


    // useEffect(()=> {
    //     fetch('http://localhost:9292/comments')
    //     .then(response => response.json())
    //     .then(comments => setCommentArray(comments))
    // }, [])

    function handleCommentFormSubmit(e) {
        e.preventDefault();
        const formData = {
            adopter_id: e.target.value,
            comments: e.target.value,
        };
    
        fetch('http://localhost:9292/comments', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((formData) => {;
                setComments([...comments, formData])
            });
            // clear inputs
    }


    const routes = [
        {
            path: "/",
            exact: true,
            sidebar: () => <div></div>,
            main: () => <Home />,
        },
        {
            path: "/available-pets",
            sidebar: () => <div></div>,
            main: () => <AnimalContainer animals={animals} />,
        },
        {
            path: "/adopters",
            sidebar: () => <div></div>,
            main: () => <Adopters />,
        },
        {
            path: "/comments",
            sidebar: () => <div></div>,
            main: () => <Comments handleCommentFormSubmit={handleCommentFormSubmit} commentArray={commentArray} />,
        },
        {
            path: "/about-us",
            sidebar: () => <div></div>,
            main: () => <AboutUs />,
        }
        ];
    
        return (
            <Router>
                <div style={{ display: "flex" }}>
                {/* {renderComments} */}
                <div
                    style={{
                    padding: "25px",
                    width: "300x",
                    background: "#f0f0f0",
                    }}
                >
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li className='home-link'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='available-pets-link'>
                        <Link to="/available-pets">Available Pets</Link>
                    </li>
                    <li className='adopters-link'>
                        <Link to="/adopters">Interested in Adopting?</Link>
                    </li>
                    <li className='comments-link'>
                        <Link to="/comments">Leave us a Comment</Link>
                    </li>
                    <li className='about-link'>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    </ul>
    
                    <Switch>
                    {routes.map((route, index) => (
                        <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.sidebar />}
                        />
                    ))}
                    </Switch>
                </div>
    
                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                    {routes.map((route, index) => (
                        <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main />}
                        />
                    ))}
                    </Switch>
                </div>
                </div>
        </Router>
        );
}

export default NavBar