import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import userDefault from "./../images/user.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "./../actions";
import "./../styles.scss";
const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  const [user, setUser] = useState(null);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [user, dispatch]);

  return (
    <Grid container justifyContent="space-around" spacing={2}>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Grid container>
          <Grid item xs={12}>
            <div className="heading">users</div>
          </Grid>

          <Grid item xs={12}>
            <Grid container alignItems="stretch" spacing={3}>
              {users == null ? (
                <CircularProgress
                  size="5em"
                  style={{ margin: "20px auto", color: "white" }}
                />
              ) : (
                users.map((useritem) => (
                  <Grid item key={useritem.id} xs={12} sm={12} md={6} lg={6}>
                    <div
                      className="user-card"
                      onClick={() => setUser(useritem)}
                    >
                      <img
                        src={useritem.avatar}
                        alt="pic"
                        onError={(event) => {
                          event.target.src = `${userDefault}`;
                          event.onerror = null;
                        }}
                      />
                      <div>{`${useritem.profile.firstName} ${useritem.profile.lastName}`}</div>
                    </div>
                  </Grid>
                ))
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {user != null && (
        <Grid item xs={12} sm={6} md={4}>
          <Grid container style={{ color: "white" }}>
            <Grid item xs={12}>
              <div className="heading">user profile</div>
            </Grid>
            <Grid item xs={12}>
              {" "}
              <div className="user-profile-image">
                <img
                  src={user.avatar}
                  alt="pic"
                  onError={(event) => {
                    event.target.src = `${userDefault}`;
                    event.onerror = null;
                  }}
                />
                <div>@{user.profile.username}</div>
              </div>
              <h3 style={{ textAlign: "center" }}>{user.Bio}</h3>
              <div className="content-box">
                <div className="label">Full Name</div>
                <div className="content">{`${user.profile.firstName} ${user.profile.lastName}`}</div>
              </div>
              <div className="content-box">
                <div className="label">Job Title</div>
                <div className="content">{user.jobTitle}</div>
              </div>
              <div className="content-box">
                <div className="label">Email</div>
                <div className="content">{user.profile.email}</div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
export default Users;
