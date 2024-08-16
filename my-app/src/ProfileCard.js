import React, {useState} from 'react';

const ProfileCard = () => {
    const initialProfile = {
        name : "John",
        email: "john@google.com",
        bio: "Software engineer at google" 

    };

    const[profile, setProfile] = useState(initialProfile);
    const[isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProfile( {
            ...profile,
            [name]: value
        });
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleCancel = () => {
        setProfile(initialProfile);
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input
                    type = "text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    />

                    <input
                    type = "email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    />

                    <textare
                    name="bio"
                    value={profile.bio}
                    onChange={handleChange}
                    />

                    <button onClick={handleSave}> Save </button>
                    <button onClick={handleCancel}> Cancel </button>
                    </div>
            ): (
                
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.email}</p>
                    <p>{profile.bio}</p>
                    <button onClick={() => setIsEditing(true)}> Edit </button>
                </div>
            )}
            </div>
    );
};                    
export default ProfileCard;