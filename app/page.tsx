"use client";
import Default from "@/Components/Default";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const App = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page when the App component mounts
    router.push("/home"); // Adjust the path accordingly
  }, [router]);
  return (
    <div className="">
      <Default />
    </div>
  );
};

export default App;
