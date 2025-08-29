"use client";
import useFetchCats from "@/hooks/GetCatList";
import UserCard from "./components/UserCard";
import useFetchUsers from "@/hooks/GetRandomUser";

function Page() {
  const gatos = useFetchCats();
  const users = useFetchUsers();
  console.log(users);

  return (
    <div className="space-y-5 container mx-auto">
      {gatos.map((contentCat, index) => {
        return (
          <UserCard
            key={index}
            description={contentCat.fact}
            userImage="/file.svg"
            userName="usuario"
          />
        );
      })}
    </div>
  );
}

export default Page;
