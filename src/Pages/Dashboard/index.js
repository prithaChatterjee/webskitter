import React, { useEffect } from 'react';
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { auth } from '../../Service/config';
import { useDispatch, useSelector } from 'react-redux';
import { fetchuserSuccess } from '../../Redux';
import { StyledDashboardIn } from './dashboard.style';
import Button from '../../components/Button';
import { getAuth, signOut } from "firebase/auth";

export const DashBoard = () => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch()

  async function getCities() {
    const usersCol = collection(getFirestore(auth), "users")
    const userSnapshot = await getDocs(usersCol);
    const userList = userSnapshot.docs.map(doc => doc.data());
    return userList.find(res => res.email === user.user.email)
  }
  useEffect(() => {
    getCities().then(res => dispatch(fetchuserSuccess({ token: user.token, user: res })))
      .catch(error => console.log(error))
  }, []);

  const logout = () => signOut(getAuth(auth)).then(() => {
    dispatch(fetchuserSuccess({token:'' , user: null}))
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });

  return (<StyledDashboardIn>
    <div>
      <h3>{user.user.fname}</h3>
      <p><b>Phone :</b> {user.user.phone}</p>
      <p><b>Email : </b>{user.user.email}</p>
      <p><b>Phone :</b> {user.user.phone}</p>
      <p><b>Country : </b>{user.user.country}</p>
      <p><b>State :</b> {user.user.state}</p>
      <p><b>City : </b>{user.user.city}</p>
      <p><b>Zip : </b>{user.user.zip}</p>
      <Button type="button" onClick={logout}>Log out</Button>
    </div>
  </StyledDashboardIn>)
};
