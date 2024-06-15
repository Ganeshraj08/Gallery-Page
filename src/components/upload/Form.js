import { Add } from '@mui/icons-material';
import { Fab, Input } from '@mui/material';
import { useRef, useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext'; // Import your authentication context

const Form = ({ setFiles }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const fileRef = useRef();
  const { currentUser } = useAuth(); // Access the currentUser from your authentication context

  useEffect(() => {
    // Update the login status based on currentUser
    if (currentUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [currentUser]);

  const handleClick = () => {
    fileRef.current.click();
  };

  const handleChange = (e) => {
    setFiles([...e.target.files]);
    fileRef.current.value = null;
  };

  // Render the form only if the user is logged in
  return (
    <>
      {isLoggedIn && (
        <form>
          <Input
            type="file"
            inputProps={{ multiple: true }}
            sx={{ display: 'none' }}
            inputRef={fileRef}
            onChange={handleChange}
          />
          <Fab color="primary" aria-label="add" onClick={handleClick}>
            <Add fontSize="large" />
          </Fab>
        </form>
      )}
    </>
  );
};

export default Form;
