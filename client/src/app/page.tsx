import { BlockRenderer } from "@/components/BlockRenderer";
import { BlogCard } from "@/components/BlogCard";
import { ContentList } from "@/components/ContentLIst";
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
  //console.log(data)
  return (
    <div>
      <BlockRenderer blocks={blocks} />
      <div className="container">
        <ContentList
            headline="Check out our latest articles"
            path="/api/articles"
            component={BlogCard}
        />
      </div>
    </div>
   
  );
}
