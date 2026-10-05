function ProfileCard({ name, imageUrl, description }) {
    return (
        <section className="profile-card">
            <img
                className="profile-image"
                src={imageUrl}
                alt={`${name} profile`}
            />

            <div className="profile-content">
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </section>
    );
}

export default ProfileCard;
