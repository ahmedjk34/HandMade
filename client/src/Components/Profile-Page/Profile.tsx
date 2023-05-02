import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../Types";

type Props = {};

function Profile({}: Props) {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${id}`)
      .then((response) => setUser(response.data))
      .catch((e) => console.log(e));
  }, [id]);
  return <div>Profile</div>;
}

export default Profile;
