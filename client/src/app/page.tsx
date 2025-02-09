import { HeroSection } from "@/components/blocks/HeroSection";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

async function loader(){
  const data = await getHomePage()
  if(!data) notFound()
  //console.log(data)
  return {...data.data}
}

export default async function HomeRout() {
  const data = await loader()
  const blocks = data?.blocks || []
  console.log(data)
  return (
   <div>
    <HeroSection {...blocks[0]} />
   </div>
  );
}
