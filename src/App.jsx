import ProfileCard from "./components/ProfileCard";

function App() {
    const profile = {
        name: "Shriram Dani",
        imageUrl: "/fsd-asg4-react-profile-card/profile.jpg",
        description:
            "Computer science student passionate about web development, JavaScript, React, and building useful software applications."
    };

    return (
        <main className="page">
            <ProfileCard
                name={profile.name}
                imageUrl={profile.imageUrl}
                description={profile.description}
            />
        </main>
    );
}

export default App;

