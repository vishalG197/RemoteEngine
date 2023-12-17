import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SkillComponent = ({ setSkill }) => {
  const [inputValue, setInputValue] = useState("");
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  // Function to fetch skills from the API
  const fetchSkills = async (value) => {
    try {
      const response = await fetch(`/skill?search=${value}`);
      const data = await response.json();
      setSkills(data.skills);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  // Function to handle skill selection
  const handleSkillSelect = async (skill) => {
    try {
      const response = await fetch(`/getSkillId?name=${skill}`);
      const data = await response.json();

      if (data && data.skillId) {
        const skillObject = {
          name: skill,
          id: data.skillId,
        };
        setSelectedSkills([...selectedSkills, skillObject]);
        setInputValue(""); // Clear input after selecting a skill
      } else {
        console.error("Error fetching skill ID");
      }
    } catch (error) {
      console.error("Error selecting skill:", error);
    }
  };

  // Function to handle skill removal
  const handleSkillRemove = (skillId) => {
    const updatedSkills = selectedSkills.filter((s) => s.id !== skillId);
    setSelectedSkills(updatedSkills);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extract the array of object IDs from selectedSkills
    const skillIds = selectedSkills.map((skill) => skill.id);

    // Perform POST request with skillIds
    try {
      const response = await fetch("/submitSkills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ skillIds }),
      });
      const data = await response.json();
      setSkill(data); // Update the state with the response data
    } catch (error) {
      console.error("Error submitting skills:", error);
    }
  };

  // useEffect to fetch skills when inputValue changes
  useEffect(() => {
    if (inputValue.trim() !== "") {
      fetchSkills(inputValue);
    } else {
      setSkills([]);
    }
  }, [inputValue]);

  return (
    <StyledDiv>
      <form onSubmit={handleSubmit}>
        <div id="skillinput">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <ul>
            {/* Display the fetched skills */}
            {skills?.map((skill) => (
              <li key={skill} onClick={() => handleSkillSelect(skill)}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div id="selected-skill">
          {/* Display the selected skills with a remove option */}
          {selectedSkills?.map((skill) => (
            <span key={skill.id}>
              {skill.name}{" "}
              <span onClick={() => handleSkillRemove(skill.id)}>X</span>
            </span>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </StyledDiv>
  );
};

// Styled component for the outer div
const StyledDiv = styled.div`
  /* Add your CSS styling for the component here */
  /* Example styles: */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;

  form {
    display: flex;
    flex-direction: column;
  }

  #skillinput {
    margin-bottom: 10px;
    position: relative;

    input {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: #fff;
      border: 1px solid #ccc;
      border-top: 0;
      border-radius: 0 0 4px 4px;

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
    span {
      margin-right: 5px;
      background-color: #e0e0e0;
      padding: 4px;
      border-radius: 4px;

      span {
        cursor: pointer;
        margin-left: 5px;
        font-weight: bold;
      }
    }
  }

  button {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export default SkillComponent;
