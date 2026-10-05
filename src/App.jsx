import ProfileCard from "./components/ProfileCard";

function App() {
    const profile = {
        name: "Shriram Dani",
        imageUrl: "https://i.pravatar.cc/300?img=12",
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
