import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import './Navbar.css'
import logo from '../assets/logo.png'
import { firebaseAuth } from "../utils/Firebase-config";
import { FaPowerOff, FaSearch } from "react-icons/fa";
export default function Navbar({ isScrolled }) {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const navigate = useNavigate();
  const links = [
    { name: "House", link: "/" },
    { name: "TV shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(!currentUser) navigate("/login");
  });
  return (
    <Container>
      <nav className={`${isScrolled ? "scrolled" : ""} flex`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="links flex">
            {links.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right flex a-center">
          <div className={`search ${showSearch ? "show-search" : ""}`}>
          <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) {
                  setShowSearch(false);
                }
              }}
            >
              <FaSearch />
            </button>
            <input 
            
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
          <button onClick={()=>signOut(firebaseAuth)} style={{float:"left"}}>
            <FaPowerOff />
          </button>
        </div>
      </nav>
      </Container>
  );
}

const Container = styled.div`
*{
    background-color: black;
}
  .scrolled {
    background-color: black;
    background:transparent;
  }
  nav {
    position: sticky;
    top: 0;
    // background:transparent;
    height: 6.5rem;
    width: 100%;
    justify-content:space-between ;
    position: fixed;
    top: 0;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left {
      background:transparent;
      gap: 2rem;
      .brand {
      background:transparent;
        img {
        background:transparent;
          height: 4rem;
        }
      }
      .links {
      background:transparent;
        list-style-type: none;
        gap: 2rem;
        li {
        background:transparent;
          a {
          background:transparent;
            color: white;
            text-decoration: none;
          }
        }
      }
    }
    .right {
    background:transparent;
      gap: 1rem;
      button {
        background: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f34242;
          font-size: 1.2rem;
        }
      }
      .search {
        background:transparent;
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        padding-left: 0.5rem;
        button {
        background:transparent;
          background-color: transparent;
          border: none;
          &:focus {
            outline: none;
          }
          svg {
          background:transparent;
            color: white;
            font-size: 1.2rem;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease-in-out;
          background-color: transparent;
          border: none;
          color: white;
          &:focus {
            outline: none;
          }
        }
      }
      .show-search {
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0.6);
        input {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.3rem;
        }
      }
    }
  }
`;