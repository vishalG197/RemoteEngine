import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";

const SkillComponent = ({ setSkills }) => {
  const [inputValue, setInputValue] = useState("");
  const [skill, setSkill] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const fetchSkills = async (value) => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const response = await fetch(`https://remote-engine-ohgy.onrender.com/skills?query=${value}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      const data = await response.json();
      console.log(data)
      setSkill(data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  const handleSkillSelect = (skill) => {
    setSelectedSkills([...selectedSkills, skill]);
    setInputValue("");
  };

  const handleSkillRemove = (skillId) => {
    const updatedSkills = selectedSkills.filter((s) => s.id !== skillId);
    setSelectedSkills(updatedSkills);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSkills(selectedSkills);
  };

  useEffect(() => {
    if (inputValue.trim() !== "") {
      fetchSkills(inputValue);
    } else {
      setSkill([]);
    }
  }, [inputValue]);
console.log(skill)
  return (
    <StyledDiv>
      <form onSubmit={handleSubmit}>
        <div id="skillinput">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search skills..."
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <ul>
            {skill?.map((skill) => (
              <li key={skill.id} onClick={() => handleSkillSelect(skill)}>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
        <div id="selected-skill">
          {selectedSkills?.map((skill) => (
            <span key={skill.id}>
              {skill.name}{" "}
              <FontAwesomeIcon
                icon={faTimes}
                className="remove-icon"
                onClick={() => handleSkillRemove(skill.id)}
              />
            </span>
          ))}
        </div>
        <button type="submit">
          <FontAwesomeIcon icon={faCheck} />
          Submit
        </button>
      </form>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  max-width: 400px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    position: relative;

    .search-icon {
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      color: #aaa;
      cursor: pointer;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 8px;
        cursor: pointer;

        &:hover {
          background-color: #f0f0f0;
        }
      }
    }
  }

  #selected-skill {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    span {
      margin-right: 10px;
      margin-bottom: 10px;
      background-color: #e0e0e0;
      padding: 4px;
      border-radius: 4px;

      .remove-icon {
        cursor: pointer;
        margin-left: 5px;
        font-weight: bold;
        color: #ff0000;
      }
    }
  }

  button {
    align-self: flex-start;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    svg {
      margin-right: 5px;
    }
  }
`;



export default SkillComponent;
