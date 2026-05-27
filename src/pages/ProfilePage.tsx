import { useParams } from "react-router";
import { profiles } from "../users";
export default function ProfilePage() {
  const params = useParams<{ profileId: string }>();
  const profile = profiles.find((e) => e.id === params.profileId);
  return (
    <>
      <div className="flex flex-col gap-2 text-4xl">
        profile page {profile ? profile.name : "not found"}
        <br />
        Age {profile ? profile.age : "No age"}
      </div>
    </>
  );
}
