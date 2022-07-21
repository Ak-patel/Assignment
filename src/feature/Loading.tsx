import React, { useEffect } from 'react'
import { useSnapshot } from 'valtio';
import { UserManager } from '../manager/UserManager';
import { UserState } from '../store';

export default function Loading() {
    const load = async () => {
        await UserManager.getAll();
    };

    const { selectedUser } = useSnapshot(UserState);
    useEffect(() => {
        load();
    }, []);
    return (
        <div>
            <h1>User Details</h1>
            <div className="row row-cols-2">
                <div className="col p-2 border">Name: </div>
                <div className="col p-2 border">{selectedUser?.name}
                </div></div>
            <div className="row row-cols-2">
                <div className="col p-2 border">Email:</div>
                <div className="col p-2 border">{selectedUser?.email}</div>
            </div>
        </div>
    )
}
