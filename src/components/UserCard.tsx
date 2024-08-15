import { IUsers } from "../interfaces";

function UserCard({ user }: { user: IUsers }) {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <strong>{user.address.city}, {user.address.street}</strong>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
}

export default UserCard;
