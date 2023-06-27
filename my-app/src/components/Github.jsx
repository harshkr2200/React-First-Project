import React, { useEffect, useState } from "react";
import "../Style/github.scss";
import Loading from "./Loading";
const Github = () => {
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setusers(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="github_box">
        <h1>Hello Github Page </h1>
        <div className="github_mini_box">
          {users.map((Value, index) => {
            return (
              <>
                <div className="github_user_card">
                  <div className="github_user_img">
                    <img
                      src={Value.avatar_url}
                      alt="this is github user image"
                    />
                  </div>
                  <div className="github_user_detalis">
                    <h2>{Value.login} </h2>
                    <p>{Value.node_id} </p>
                    <div className="user_handle_detalis">
                      <div className="artice user_handle">
                        <span className="item_name">{Value.html_url}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Github;
