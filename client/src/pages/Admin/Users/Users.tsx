import React, {useEffect, useState} from 'react';
import {RootState} from "../../../store";
import {connect, ConnectedProps} from "react-redux";
import {getUsers} from "../../../store/actions/getUsers";
import UserDetails from "./UserDetails";
import UsersList from "./UsersList";

const mapStateToProps = (state: RootState) => ({
    usersList: state.users.users,
    usersLoading: state.users.loading
});
const mapDispatchToProps = (dispatch: Function) => ({
    getUsers: () => dispatch(getUsers())
});
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Users = ({getUsers, usersList, usersLoading}: PropsFromRedux) => {
    const [openDetails, setOpenDetails] = useState(false);
    const handleOpenDetails = () => setOpenDetails(true);
    const handleCloseDetails = () => setOpenDetails(false);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
            <div className="adminContent">
                {usersLoading && <h1 className="loading">Loading...</h1>}
                {!openDetails && !usersLoading && <UsersList usersList={usersList} openDetails={handleOpenDetails}/>}
                {openDetails && <UserDetails closeDetails={handleCloseDetails}/>}
            </div>
    )
};

export default connector(Users);

