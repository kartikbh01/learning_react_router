import { Link } from "react-router";
import { profiles } from "../users";

export default function ProfilesPage() {
  return (
    <>
      <h1 className="m-4 text-4xl">Profiles</h1>
      {profiles.map((profile) => (
        <div className="m-4">
          <Link key={profile.id} to={`/profiles/${profile.id}`}>
            {profile.name}
            <br />
          </Link>
        </div>
      ))}
    </>
  );
}
