import Image from "next/image";
import TopicList from "@/components/TopicsList"
import NewTodoForm from "@/components/NewTodoForm";

export default function Home() {
  return (
      <div>
        < TopicList />
        <NewTodoForm />
      </div>
  );
}
