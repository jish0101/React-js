import React, {useState} from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
    const [error, setError] = useState('');
    const { currentUser, logOut} = useAuth();
    const navigate = useNavigate()

    async function handleLogout() {
        setError('');
        try {
            await logOut();
            navigate('/login');
            
        } catch {
            setError("Failed to logout!")
        }
    }
    
  return (
    <>
      <Card>
        <Card.Body className="text-center" style={{paddingBlock: "2.5rem"}} >
                  <h2 className="pb-4">Profile</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <strong>Email: {currentUser.email} </strong>
                  <Link to="/update-profile" className="btn btn-primary w-100 mt-5">Update Profile</Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-3">
        <Button onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}